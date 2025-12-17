package com.inetum.eudi_dome_wallet.core.servicies

import android.util.Base64
import android.util.Log
import com.google.gson.internal.LinkedTreeMap
import com.inetum.eudi_dome_wallet.common.classes.LogLevel
import com.inetum.eudi_dome_wallet.common.exception.CustomException
import com.inetum.eudi_dome_wallet.common.utils.AppUtils
import com.inetum.eudi_dome_wallet.core.models.eudi.credentials.EudiCredential
import com.inetum.eudi_dome_wallet.core.models.eudi.presentations.PresentationEudi
import com.inetum.eudi_dome_wallet.core.models.eudi.presentations.PresentationTokenRequestEudi
import com.inetum.eudi_dome_wallet.core.models.factories.eudi.CredentialFactory
import com.inetum.eudi_dome_wallet.core.models.factories.eudi.PresentationFactory
import com.inetum.eudi_dome_wallet.core.ports.inputs.EudiNetworkUseCase
import com.inetum.eudi_dome_wallet.core.ports.outputs.EudiNetworkPort
import com.inetum.eudi_dome_wallet.manager.IoCManager
import com.inetum.utils.BuildConfig
import com.inetum.utils.getNetworkEpochTimeInMillis
import com.inetum.utils.getValueAs
import com.inetum.utils.toJsonString
import com.inetum.utils.toSeconds
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.withContext
import java.nio.charset.StandardCharsets
import java.util.UUID

class EudiNetworkServiceCore(private val eudiNetworkPort: EudiNetworkPort) :
    EudiNetworkUseCase {

    private val TAG: String = "DW:${(this::class.java.simpleName ?: "Unknown class")}"

    private val JSON_OBJECT_LOG_PRETTY_PRINT = true
    private val DELAY_TIME_SERVER = 10

    private val EXPIRATION_TIME_1_HOUR = 3600L
    private val EXPIRATION_TIME_1_YEAR = 31536000L


    override suspend fun getCredentialOffer(fullUrl: String): Map<String, *> {
        val credentialOfferMap =  withContext(Dispatchers.IO) {
            try {
                eudiNetworkPort.getCredentialOffer(fullUrl)
            } catch (e: Exception) {
                IoCManager.getLogInputAdapter().log(LogLevel.ERROR, TAG, "${AppUtils.getFunctionName()} ${e.message}", e)
                throw e
            }
        }

        return credentialOfferMap
    }

    override suspend fun getOpenIDCredentialIssuer(baseUrl: String): Map<String, *> {
        val discoveryEndpointsMap = withContext(Dispatchers.IO) {
            try {
                eudiNetworkPort.getDiscoveryEndpoints(baseUrl)
            } catch (e: Exception) {
                IoCManager.getLogInputAdapter().log(LogLevel.ERROR, TAG, "${AppUtils.getFunctionName()} ${e.message}", e)
                throw e
            }
        }
        IoCManager.getLogInputAdapter().log(LogLevel.DEBUG, TAG, AppUtils.getFunctionName() +
                " CALL Discovery 1 -> discoveryEndpointsMap:\n${discoveryEndpointsMap.toJsonString(JSON_OBJECT_LOG_PRETTY_PRINT)}")
        return discoveryEndpointsMap
    }

    override suspend fun getOpenIDConfiguration(baseUrl: String): Map<String, *> {

        val openIDAuthorisationServerConfigMap = withContext(Dispatchers.IO) {
            try {
                eudiNetworkPort.getOpenIDAuthorisationServerConfig(baseUrl)
            } catch (e: Exception) {
                IoCManager.getLogInputAdapter().log(LogLevel.ERROR, TAG, "${AppUtils.getFunctionName()} ${e.message}", e)
                throw e
            }
        }
        IoCManager.getLogInputAdapter().log(LogLevel.DEBUG, TAG, AppUtils.getFunctionName() +
                " CALL Discovery 2 -> openIDAuthorisationServerConfigMap:\n${openIDAuthorisationServerConfigMap.toJsonString(true)}")

        return openIDAuthorisationServerConfigMap

    }

    override suspend fun getCredentialRequest(
        credentialOfferMap: Map<String, *>,
        discovery1Map: Map<String, *>,
        preAuthorizedCodeUserPin: String
    ): List<EudiCredential> {
        val credentialIssuer = credentialOfferMap.getValueAs<String>("credential_issuer")

        val discovery2Map = withContext(Dispatchers.IO) {
            try {
                IoCManager.getEudiNetworkInputAdapter().getOpenIDConfiguration(credentialIssuer)
            } catch (e: Exception) {
                IoCManager.getLogInputAdapter().log(LogLevel.ERROR,
                    TAG, "${AppUtils.getFunctionName()} ${e.message}", e)
                throw e
            }
        }

        IoCManager.getLogInputAdapter().log(LogLevel.DEBUG, TAG, AppUtils.getFunctionName() +
                " discovery2Map: ${discovery2Map.toJsonString(true)}")
        val did = withContext(Dispatchers.IO) { IoCManager.getEudiDidInputAdapter().getOwnDid() }
        IoCManager.getLogInputAdapter()
            .log(LogLevel.DEBUG, TAG, "${AppUtils.getFunctionName()} Eudi did: $did")
        var kid = did.removePrefix("did:key:")
        kid = "$did#$kid"
        IoCManager.getLogInputAdapter()
            .log(LogLevel.DEBUG, TAG, "${AppUtils.getFunctionName()} Eudi kid: $kid")

        IoCManager.getLogInputAdapter().log(LogLevel.DEBUG, TAG, AppUtils.getFunctionName() +
                " INPUT_CODE: $preAuthorizedCodeUserPin"
        )
        val tokenResponseParams = populateRequestDataTokenFlowPreAuthorized(credentialOfferMap, preAuthorizedCodeUserPin)

        IoCManager.getLogInputAdapter().log(LogLevel.DEBUG, TAG, AppUtils.getFunctionName() +
                " TokenResponse query params: ${tokenResponseParams.toJsonString(JSON_OBJECT_LOG_PRETTY_PRINT)}")

        val urlTokenEndpoint = discovery2Map.getValueAs<String>("token_endpoint")

        val tokenResponseMap = withContext(Dispatchers.IO) {
            try {
                eudiNetworkPort.getTokenResponse(urlTokenEndpoint, tokenResponseParams)
            } catch (e: Exception) {
                IoCManager.getLogInputAdapter().log(LogLevel.ERROR, TAG, "${AppUtils.getFunctionName()} ${e.message}", e)
                throw e
            }
        }
        IoCManager.getLogInputAdapter().log(LogLevel.DEBUG, TAG, AppUtils.getFunctionName() +
                " tokenResponseMap:\n${tokenResponseMap.toJsonString(JSON_OBJECT_LOG_PRETTY_PRINT)}")

        val accessToken = tokenResponseMap.getValueAs<String>("access_token")
        return getCredentialRequest(
            credentialOfferMap,
            discovery1Map,
            discovery2Map,
            accessToken
        )

    }

    suspend fun getCredentialRequest(
        credentialOfferMap: Map<String, *>,
        discovery1Map: Map<String, *>,
        discovery2Map: Map<String, *>,
        accessToken: String
    ): List<EudiCredential> {

        val coreCredentialList: MutableList<EudiCredential> = mutableListOf()

        val did = withContext(Dispatchers.IO) { IoCManager.getEudiDidInputAdapter().getOwnDid() }
        IoCManager.getLogInputAdapter()
            .log(LogLevel.DEBUG, TAG, "${AppUtils.getFunctionName()} Eudi did: $did")
        var kid = did.removePrefix("did:key:")
        kid = "$did#$kid"
        IoCManager.getLogInputAdapter()
            .log(LogLevel.DEBUG, TAG, "${AppUtils.getFunctionName()} Eudi kid: $kid")
        val credentialRequestBody = populateCredentialRequest(
            credentialOfferMap,
            discovery1Map,
            did,
            kid
        )

        IoCManager.getLogInputAdapter().log(LogLevel.DEBUG, TAG, AppUtils.getFunctionName() +
                " credentialRequestBody:\n${credentialRequestBody.toJsonString(JSON_OBJECT_LOG_PRETTY_PRINT)}")

        val credentialEndpoint = discovery1Map.getValueAs<String>("credential_endpoint")
        val credentialResponseMap = withContext(Dispatchers.IO) {
            try {
                eudiNetworkPort.getCredentialRequest(
                    credentialEndpoint,
                    credentialRequestBody,
                    accessToken
                )
            } catch (e: Exception) {
                IoCManager.getLogInputAdapter().log(LogLevel.ERROR, TAG, "${AppUtils.getFunctionName()} ${e.message}", e)
                throw e
            }
        }

        IoCManager.getLogInputAdapter().log(LogLevel.DEBUG, TAG, AppUtils.getFunctionName() +
                " CALL Credential Request -> credentialResponse:\n${credentialResponseMap.toJsonString(JSON_OBJECT_LOG_PRETTY_PRINT)}")


        val credentialsList = credentialResponseMap["credentials"] as? List<LinkedTreeMap<String, Any>> ?: emptyList()
        var jwtVC = ""
        var payload: Map<*, *> = mutableMapOf<String, Any>()

        for (credential in credentialsList) {
            val value = credential["credential"] as String
            val decodedCredentialMap = IoCManager.getJwtInputAdapter().getDecodeJWT(value)
            jwtVC = value
            val jwtPayloadMap = decodedCredentialMap.getValueAs<Map<*, *>>("payload")
            payload = jwtPayloadMap
        }
        credentialResponseMap.mapNotNull { (_, _) ->
            coreCredentialList.add(CredentialFactory.createCredentialFromMap(payload, jwtVC))
        }

        return coreCredentialList
    }
    private fun populateRequestDataTokenFlowPreAuthorized(
        credentialOfferMap: Map<String, *>,
        preAuthorizedCodeUserPin: String
    ): Map<String, String> {

        val grandsMap = credentialOfferMap.getValueAs<Map<String, *>>("grants")

        val grantTypeMap = grandsMap.getValueAs<Map<String, *>>("urn:ietf:params:oauth:grant-type:pre-authorized_code")

        val preAuthorizedCode = grantTypeMap.getValueAs<String>("pre-authorized_code")

        val params = mapOf(
            "grant_type" to "urn:ietf:params:oauth:grant-type:pre-authorized_code",
            "pre-authorized_code" to preAuthorizedCode,
            "tx_code" to preAuthorizedCodeUserPin,
        )

        return params
    }

    private suspend fun populateCredentialRequest(
        credentialOfferMap: Map<String, *>,
        discovery1Map: Map<String, *>,
        did: String,
        kid: String
    ): Map<String, *> {

        val header = mapOf(
            "alg" to "ES256",
            "kid" to kid,
            "typ" to "openid4vci-proof+jwt"
        )
        val audience = discovery1Map.getValueAs<String>("credential_issuer")
        val issuedAt = getIssuedAtTimeEpoch()
        val payload = mapOf(
            "iss" to did,
            "aud" to audience,
            "iat" to issuedAt
        )

        val jwtSignedForCredentialResponse = IoCManager.getEudiDidInputAdapter().getSignedJWT(header, payload)
        IoCManager.getLogInputAdapter().log(LogLevel.DEBUG, TAG, "${AppUtils.getFunctionName()} " +
                "jwtSigned For CredentialRequest: $jwtSignedForCredentialResponse"
        )

        val typesList = credentialOfferMap.getValueAs<List<String>>("credential_configuration_ids")
        val bodyMap = mapOf(
            "credential_configuration_id" to typesList[0],
            "proofs" to mapOf(
                "jwt" to listOf(jwtSignedForCredentialResponse)
            )
        )

        return bodyMap
    }

    override suspend fun getVPAuthorizationRequest(baseUrl: String): String {
        val authorisationRequestMap = withContext(Dispatchers.IO) {
            try {
                eudiNetworkPort.getVPAuthorizationRequest(baseUrl)
            } catch (e: Exception) {
                IoCManager.getLogInputAdapter().log(LogLevel.ERROR, TAG, "${AppUtils.getFunctionName()} ${e.message}", e)
                throw e
            }
        }

        IoCManager.getLogInputAdapter().log(LogLevel.DEBUG, TAG, AppUtils.getFunctionName() +
                " CALL VP Authorization Request -> authorisationRequestMap:\n${authorisationRequestMap.toJsonString(JSON_OBJECT_LOG_PRETTY_PRINT)}")

        return authorisationRequestMap
    }
    override suspend fun getVPAuthorizationResponse(vpAuthorizationRequest: Map<*, *>, presentationTokenRequest: PresentationTokenRequestEudi) : PresentationEudi {
        IoCManager.getLogInputAdapter().log(
            LogLevel.DEBUG,
            TAG,
            "${AppUtils.getFunctionName()} initialize with uri: $vpAuthorizationRequest"
        )

        val did = withContext(Dispatchers.IO) { IoCManager.getEudiDidInputAdapter().getOwnDid() }
        var kid = did.removePrefix("did:key:")
        kid = "$did#$kid"
        IoCManager.getLogInputAdapter()
            .log(LogLevel.DEBUG, TAG, "${AppUtils.getFunctionName()} DID and kid: $did $kid")
        val (presentationResponseParams, vpTokenJwt) = populateRequestDataVPAuthorizationResponse(vpAuthorizationRequest, did, kid)
        IoCManager.getLogInputAdapter().log(LogLevel.DEBUG, TAG, "${AppUtils.getFunctionName()} params presentation Response: ${presentationResponseParams.toJsonString(JSON_OBJECT_LOG_PRETTY_PRINT)}")
        val responseUri = vpAuthorizationRequest.getValueAs<String>("response_uri")

        withContext(Dispatchers.IO) {
            try {
                eudiNetworkPort.getVPAuthorizationResponse(responseUri, presentationResponseParams)
            } catch (e: Exception) {
                IoCManager.getLogInputAdapter()
                    .log(LogLevel.ERROR, TAG, "${AppUtils.getFunctionName()} ${e.message}", e)
                throw e
            }
        }

        val presentationEntity = PresentationFactory.createPresentationFromJwt(vpTokenJwt, presentationTokenRequest.rawJwt)
        return presentationEntity
    }
    private suspend fun populateRequestDataVPAuthorizationResponse(
        vpAuthorizationRequest: Map<*, *>,
        did: String,
        kid: String
    ): Pair<Map<String, String>, String> {

        val uuid = UUID.randomUUID()

        val issuedAt = getIssuedAtTimeEpoch()
        val expirationTime = getExpirationTimeEpoch()

        val credentialList = withContext(Dispatchers.IO) {
            try {
                IoCManager.getEudiCredentialDBInputAdapter().getAllCredentialFromDB()
            } catch (e: CustomException) {
                Log.e(TAG, "${AppUtils.getFunctionName()} ${e.message}. ${e.userMessage}", e)
                throw e
            } catch (e: Exception) {
                Log.e(TAG, "${AppUtils.getFunctionName()} ${e.message}", e)
                throw e
            }
        }
        val vpMap = mapOf(
            "@context" to arrayListOf("https://www.w3.org/2018/credentials/v1"),
            "id" to "urn:uuid:$uuid",
            "type" to arrayListOf("VerifiablePresentation"),
            "holder" to did,
            "verifiableCredential" to arrayListOf(credentialList[0].rawJwt)
        )

        val aud = vpAuthorizationRequest.getValueAs<String>("client_id")

        val nonce = vpAuthorizationRequest.getValueAs<String>("nonce")

        val vpTokenMap = mapOf(
            "iss" to did,
            "aud" to aud,
            "sub" to did,
            "iat" to issuedAt,
            "nbf" to issuedAt,
            "exp" to expirationTime,
            "nonce" to nonce,
            "jti" to "urn:uuid:$uuid",
            "vp" to vpMap
        )

        val header = mapOf(
            "alg" to "ES256",
            "kid" to kid,
            "typ" to "JWT"
        )
        val jwtSignedVpToken = IoCManager.getEudiDidInputAdapter().getSignedJWT(header, vpTokenMap)
        IoCManager.getLogInputAdapter().log(LogLevel.DEBUG, TAG, "${AppUtils.getFunctionName()} jwtSignedVpToken: $jwtSignedVpToken")

        val jwtSignedBase64VpToken = Base64.encodeToString(
            jwtSignedVpToken.toByteArray(StandardCharsets.UTF_8),
            Base64.URL_SAFE or Base64.NO_WRAP
        )
        IoCManager.getLogInputAdapter().log(LogLevel.DEBUG, TAG, "${AppUtils.getFunctionName()} jwtSignedBase64VpToken: $jwtSignedBase64VpToken")

        val state = vpAuthorizationRequest.getValueAs<String>("state")

        val presentationResponseMap = mapOf(
            "state" to state,
            "vp_token" to jwtSignedBase64VpToken
        )

        return Pair(presentationResponseMap, jwtSignedVpToken)
    }
    private suspend fun getIssuedAtTimeEpoch(): Long {
        val currentTime = getNetworkEpochTimeInMillis().toSeconds()
        val issuedAt = currentTime - DELAY_TIME_SERVER

        return issuedAt
    }

    private suspend fun getExpirationTimeEpoch(): Long {

        val currentTime = getNetworkEpochTimeInMillis().toSeconds()
        val expirationTime = if (BuildConfig.DEBUG) {
            currentTime + EXPIRATION_TIME_1_YEAR
        } else {
            currentTime + EXPIRATION_TIME_1_HOUR
        }

        return expirationTime
    }
}