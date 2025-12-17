package com.inetum.eudi_dome_wallet.core.servicies

import com.inetum.eudi_dome_wallet.core.ports.inputs.JwtUseCase
import com.inetum.eudi_dome_wallet.core.ports.outputs.JwtPort

class JwtServiceCore (private val jwtPort: JwtPort) : JwtUseCase {
    override suspend fun getSignedJWT(headerParams: Map<String, Any>, payloadParams: Map<String, Any>, algorithmType: String, jwkPrivateKeyJsonString: String): String {
        return jwtPort.getSignedJWT(headerParams, payloadParams, algorithmType, jwkPrivateKeyJsonString)
    }

    override suspend fun validateJWTFromPublicKey(jwt: String, jwkPublicKeyJsonString: String): Boolean {
        return jwtPort.validateJWTFromPublicKey(jwt, jwkPublicKeyJsonString)
    }

    override suspend fun getDecodeJWT(jwt: String): Map<String, Any> {
        return jwtPort.getDecodeJWT(jwt)
    }

    override suspend fun getDecodeJWTIncorrectFormat(jwt: String): Map<String, Any> {
        return jwtPort.getDecodeJWTIncorrectFormat(jwt)
    }

    override suspend fun validateJWTFromPublicKeyIncorrectFormat(jwt: String, jwkPublicKeyJsonString: String, algorithmType: String): Boolean {
        return jwtPort.validateJWTFromPublicKeyIncorrectFormat(jwt, jwkPublicKeyJsonString, algorithmType)
    }
    override suspend fun getEntityPublicKeyJWK(baseUrl: String): List<Map<*, *>> {
        return jwtPort.getEntityPublicKeyJWK(baseUrl)
    }

    override suspend fun createNewKeyPairES256(): String {
        return jwtPort.createNewKeyPairES256()
    }

    override suspend fun createNewKeyPairES256K(): String {
        return jwtPort.createNewKeyPairES256K()
    }
}