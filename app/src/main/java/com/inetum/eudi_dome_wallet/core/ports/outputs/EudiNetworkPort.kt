package com.inetum.eudi_dome_wallet.core.ports.outputs

interface EudiNetworkPort {
    suspend fun getCredentialOffer(fullUrl: String): Map<String, *>
    suspend fun getDiscoveryEndpoints(baseUrl: String): Map<String, *>
    suspend fun getOpenIDAuthorisationServerConfig(baseUrl: String): Map<String, *>
    suspend fun getTokenResponse(baseUrl: String, params: Map<String, String>): Map<String, *>
    suspend fun getCredentialRequest(baseUrl: String, params: Map<String, *>, bearerToken: String): Map<String, *>
    suspend fun getVPAuthorizationRequest(baseUrl: String): String
    suspend fun getVPAuthorizationResponse(baseUrl: String, params: Map<String, String>): Map<String, *>
}