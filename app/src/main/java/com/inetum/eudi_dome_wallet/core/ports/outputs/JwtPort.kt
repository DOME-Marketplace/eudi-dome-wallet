package com.inetum.eudi_dome_wallet.core.ports.outputs

interface JwtPort {
    suspend fun getSignedJWT(headerParams: Map<String, Any>, payloadParams: Map<String, Any>, algorithmType: String, jwkPrivateKeyJsonString: String): String
    suspend fun validateJWTFromPublicKey(jwt: String, jwkPublicKeyJsonString: String): Boolean
    suspend fun getDecodeJWT(jwt: String): Map<String, Any>
    suspend fun getDecodeJWTIncorrectFormat(jwt: String): Map<String, Any>
    suspend fun validateJWTFromPublicKeyIncorrectFormat(jwt: String, jwkPublicKeyJsonString: String, algorithmType: String): Boolean
    suspend fun getEntityPublicKeyJWK(baseUrl: String): List<Map<*, *>>
    suspend fun createNewKeyPairES256(): String
    suspend fun createNewKeyPairES256K(): String
}