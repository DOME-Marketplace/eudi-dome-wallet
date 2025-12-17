package com.inetum.eudi_dome_wallet.infrastructure.adapters.outputs

import com.inetum.eudi_dome_wallet.common.classes.LogLevel
import com.inetum.eudi_dome_wallet.common.constants.ServerConstants.Eudi.pathOpenidConfigurationWellKnown
import com.inetum.eudi_dome_wallet.common.constants.ServerConstants.Eudi.pathOpeningCredentialIssuerWellKnown
import com.inetum.eudi_dome_wallet.common.exception.HttpRedirectException
import com.inetum.eudi_dome_wallet.common.utils.AppUtils
import com.inetum.eudi_dome_wallet.core.ports.outputs.EudiNetworkPort
import com.inetum.eudi_dome_wallet.infrastructure.network.javaNative.HttpURLConnection
import com.inetum.eudi_dome_wallet.manager.IoCManager

class EudiNetworkOutputAdapter(): EudiNetworkPort {

    private val TAG : String = "DW:${(this::class.java.simpleName ?: "Unknown class")}"
    override suspend fun getCredentialOffer(fullUrl: String): Map<String, *> {
        try {

            val responseMap = HttpURLConnection.getRequest<Map<String, *>>(fullUrl, null, null)
            IoCManager.getLogInputAdapter().log(LogLevel.DEBUG, TAG, "${AppUtils.getFunctionName()} responseMap: $responseMap")

            return responseMap

        } catch (e: HttpRedirectException) {
            IoCManager.getLogInputAdapter().log(LogLevel.INFO, TAG, "${AppUtils.getFunctionName()} ${e.message}", e)
            throw e

        } catch (e: Exception) {
            IoCManager.getLogInputAdapter().log(LogLevel.ERROR, TAG, "${AppUtils.getFunctionName()} ${e.message}", e)
            throw e
        }
    }

    override suspend fun getDiscoveryEndpoints(baseUrl: String): Map<String, *> {
        try {
            val fullUrl = "$baseUrl$pathOpeningCredentialIssuerWellKnown"

            val responseMap = HttpURLConnection.getRequest<Map<String, *>>(fullUrl, null, null)

            IoCManager.getLogInputAdapter().log(LogLevel.DEBUG, TAG, "${AppUtils.getFunctionName()} responseMap: $responseMap")

            return responseMap

        } catch (e: HttpRedirectException) {
            IoCManager.getLogInputAdapter().log(LogLevel.INFO, TAG, "${AppUtils.getFunctionName()} ${e.message}", e)
            throw e
        } catch (e: Exception) {
            IoCManager.getLogInputAdapter().log(LogLevel.ERROR, TAG, "${AppUtils.getFunctionName()} ${e.message}", e)
            throw e
        }
    }

    override suspend fun getOpenIDAuthorisationServerConfig(baseUrl: String): Map<String, *> {
        try {
            val fullUrl = "$baseUrl$pathOpenidConfigurationWellKnown"

            val responseMap = HttpURLConnection.getRequest<Map<String, *>>(fullUrl, null, null)

            IoCManager.getLogInputAdapter().log(LogLevel.DEBUG, TAG, "${AppUtils.getFunctionName()} responseMap: $responseMap")

            return responseMap

        } catch (e: HttpRedirectException) {
            IoCManager.getLogInputAdapter().log(LogLevel.INFO, TAG, "${AppUtils.getFunctionName()} ${e.message}", e)
            throw e
        } catch (e: Exception) {
            IoCManager.getLogInputAdapter().log(LogLevel.ERROR, TAG, "${AppUtils.getFunctionName()} ${e.message}", e)
            throw e
        }
    }

    override suspend fun getTokenResponse(baseUrl: String, params: Map<String, String>): Map<String, *> {
        try {
            val responseMap = HttpURLConnection.postRequestXWwwFormUrlEncoded<Map<*, *>, Map<String, *>>(baseUrl, null, null, params, null)

            IoCManager.getLogInputAdapter().log(LogLevel.DEBUG, TAG, "${AppUtils.getFunctionName()} responseMap: $responseMap")

            return responseMap

        } catch (e: HttpRedirectException) {
            IoCManager.getLogInputAdapter().log(LogLevel.INFO, TAG, "${AppUtils.getFunctionName()} ${e.message}", e)
            throw e

        } catch (e: Exception) {
            IoCManager.getLogInputAdapter().log(LogLevel.ERROR, TAG, "${AppUtils.getFunctionName()} ${e.message}", e)
            throw e
        }
    }

    override suspend fun getCredentialRequest(baseUrl: String, params: Map<String, *>, bearerToken: String): Map<String, *> {

        try {

            val responseMap = HttpURLConnection.postRequest<Map<String, *>, Map<String, *>>(baseUrl, null, params, bearerToken)

            IoCManager.getLogInputAdapter().log(LogLevel.DEBUG, TAG, "${AppUtils.getFunctionName()} responseMap: $responseMap")

            return responseMap

        } catch (e: HttpRedirectException) {
            IoCManager.getLogInputAdapter().log(LogLevel.INFO, TAG, "${AppUtils.getFunctionName()} ${e.message}", e)
            throw e

        } catch (e: Exception) {
            IoCManager.getLogInputAdapter().log(LogLevel.ERROR, TAG, "${AppUtils.getFunctionName()} ${e.message}", e)
            throw e
        }
    }

    override suspend fun getVPAuthorizationRequest(baseUrl: String): String {
        try {

            val responseMap = HttpURLConnection.getRequest<String>(baseUrl, null, null)
            IoCManager.getLogInputAdapter().log(LogLevel.DEBUG, TAG, "${AppUtils.getFunctionName()} responseMap: $responseMap")

            return responseMap

        } catch (e: HttpRedirectException) {
            IoCManager.getLogInputAdapter().log(LogLevel.INFO, TAG, "${AppUtils.getFunctionName()} ${e.message}", e)
            throw e

        } catch (e: Exception) {
            IoCManager.getLogInputAdapter().log(LogLevel.ERROR, TAG, "${AppUtils.getFunctionName()} ${e.message}", e)
            throw e
        }
    }

    override suspend fun getVPAuthorizationResponse(baseUrl: String, params: Map<String, String>): Map<String, *> {
        try {
            val response = HttpURLConnection.postRequestXWwwFormUrlEncoded<Map<String, *>, Map<String, *>>(baseUrl, null, null, params)
            return response

        } catch (e: HttpRedirectException) {
            IoCManager.getLogInputAdapter().log(LogLevel.INFO, TAG, "${AppUtils.getFunctionName()} ${e.message}", e)
            throw e

        } catch (e: Exception) {
            IoCManager.getLogInputAdapter().log(LogLevel.ERROR, TAG, "${AppUtils.getFunctionName()} ${e.message}", e)
            throw e
        }
    }
}