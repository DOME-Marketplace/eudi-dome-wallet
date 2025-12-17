package com.inetum.eudi_dome_wallet.infrastructure.adapters.inputs

import com.inetum.eudi_dome_wallet.core.models.eudi.credentials.EudiCredential
import com.inetum.eudi_dome_wallet.core.ports.inputs.EudiCredentialDBUseCase

class EudiCredentialDBInputAdapter(private val eudiUseCase: EudiCredentialDBUseCase) {

    suspend fun getAllCredentialFromDB(): List<EudiCredential> {
        return eudiUseCase.getAllCredentialFromDB()
    }

    suspend fun getCredentialFromDBbyId(rawJwt: String): EudiCredential {
        return eudiUseCase.getCredentialFromDBbyId(rawJwt)
    }

    suspend fun saveCredentialIntoDB(eudiCredential: EudiCredential) {
        return eudiUseCase.saveCredentialIntoDB(eudiCredential)
    }

    suspend fun saveCredentialListIntoDB(credentialsEudi: List<EudiCredential>) {
        return eudiUseCase.saveCredentialListIntoDB(credentialsEudi)
    }

    suspend fun updateCredentialIntoDB(eudiCredential: EudiCredential) {
        return eudiUseCase.updateCredentialIntoDB(eudiCredential)
    }
}