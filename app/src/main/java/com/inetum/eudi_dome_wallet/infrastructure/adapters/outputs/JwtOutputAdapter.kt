package com.inetum.eudi_dome_wallet.infrastructure.adapters.outputs

import com.inetum.eudi_dome_wallet.common.classes.LogLevel
import com.inetum.eudi_dome_wallet.common.utils.AppUtils
import com.inetum.eudi_dome_wallet.core.ports.outputs.JwtPort
import com.inetum.eudi_dome_wallet.infrastructure.network.javaNative.HttpURLConnection
import com.inetum.eudi_dome_wallet.manager.IoCManager
import com.inetum.eudi_dome_wallet.ui.eudi.services.jwt.JwtService
import com.inetum.eudi_dome_wallet.ui.eudi.keys.KeyService
import com.inetum.eudi_dome_wallet.ui.eudi.models.EnumClass
import com.inetum.utils.getValueAs

class JwtOutputAdapter: JwtPort {

    private val TAG : String = "DW:${(this::class.java.simpleName ?: "Unknown class")}"

    override suspend fun getSignedJWT(headerParams: Map<String, Any>, payloadParams: Map<String, Any>, algorithmType: String, jwkPrivateKeyJsonString: String): String {
        return JwtService.getSignedJWT(headerParams, payloadParams, EnumClass.AlgorithmType.valueOf(algorithmType), jwkPrivateKeyJsonString)
    }

    override suspend fun validateJWTFromPublicKey(jwt: String, jwkPublicKeyJsonString: String): Boolean {
        return JwtService.validateJWT(jwt, jwkPublicKeyJsonString)
    }

    override suspend fun getDecodeJWT(jwt: String): Map<String, Any> {
        return JwtService.getDecodeJWT(jwt)
    }

    override suspend fun getDecodeJWTIncorrectFormat(jwt: String): Map<String, Any> {
        return JwtService.getDecodeSignedJWTComplete(jwt)
    }

    override suspend fun validateJWTFromPublicKeyIncorrectFormat(jwt: String, jwkPublicKeyJsonString: String, algorithmType: String): Boolean {
        return JwtService.validateJWTWithoutConsideringHeader(jwt, jwkPublicKeyJsonString, EnumClass.AlgorithmType.valueOf(algorithmType))
    }

    override suspend fun getEntityPublicKeyJWK(baseUrl: String): List<Map<*, *>> {
        try {

            val response = HttpURLConnection.getRequest<Map<String, *>>(baseUrl, null)

            val keysList = response.getValueAs<List<Map<*, *>>>("keys")

            return keysList

        } catch (e: Exception) {
            IoCManager.getLogInputAdapter().log(LogLevel.ERROR, TAG, "${AppUtils.getFunctionName()} Error receiving Entity Public Key. ${e.message}", e)
            throw e
        }
    }

    override suspend fun createNewKeyPairES256(): String {
        return KeyService.generateKeypairAndReturnJWKSetJsonString(EnumClass.AlgorithmType.ES_256)
    }

    override suspend fun createNewKeyPairES256K(): String {
        return KeyService.generateKeypairAndReturnJWKSetJsonString(EnumClass.AlgorithmType.ES_256_K)
    }
}