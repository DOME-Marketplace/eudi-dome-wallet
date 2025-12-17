package com.inetum.eudi_dome_wallet.infrastructure.adapters.inputs

import com.inetum.eudi_dome_wallet.core.models.eudi.EudiClass
import com.inetum.eudi_dome_wallet.core.ports.inputs.EudiDidUseCase

class EudiDidInputAdapter (private val eudiDidUseCase: EudiDidUseCase) {
    suspend fun createNewEudiClass(): EudiClass {
        return eudiDidUseCase.createNewEudiClass()
    }

    suspend fun getOwnJWKPublicKey(): String {
        return eudiDidUseCase.getOwnJWKPublicKey()
    }
    suspend fun getOwnDid(): String {
        return eudiDidUseCase.getOwnDid()
    }
    suspend fun initializeEudiDidAndKeys() {
        return eudiDidUseCase.initializeEudiDidAndKeys()
    }
    suspend fun getSignedJWT(headerParams: Map<String, Any>, payloadParams: Map<String, Any>): String {
        return eudiDidUseCase.getSignedJWT(headerParams, payloadParams)
    }
}