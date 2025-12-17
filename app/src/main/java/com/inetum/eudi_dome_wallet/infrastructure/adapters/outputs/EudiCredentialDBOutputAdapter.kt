package com.inetum.eudi_dome_wallet.infrastructure.adapters.outputs

import com.inetum.eudi_dome_wallet.core.models.eudi.credentials.EudiCredential
import com.inetum.eudi_dome_wallet.core.ports.outputs.EudiCredentialDBPort
import com.inetum.eudi_dome_wallet.infrastructure.services.eudi.EudiCredentialService
class EudiCredentialDBOutputAdapter(
    private val eudiCredentialService: EudiCredentialService
) : EudiCredentialDBPort {

    override suspend fun getAllCredentialFromDB(): List<EudiCredential> {
        return eudiCredentialService.getAll()
    }

    override suspend fun getCredentialFromDBbyId(rawJwt: String): EudiCredential {
        return eudiCredentialService.getById(rawJwt)
            ?: throw NullPointerException("CredentialEudi null")
    }

    override suspend fun getCredentialByInternalNameFromDB(internalName: String): List<EudiCredential> {
        return eudiCredentialService.getCredentialByInternalNameFromDB(internalName)
    }

    override suspend fun saveCredentialIntoDB(EudiCredential: EudiCredential) {
        return eudiCredentialService.insert(EudiCredential)
    }

    override suspend fun saveCredentialListIntoDB(credentialsEudi: List<EudiCredential>) {
        return eudiCredentialService.insertAll(credentialsEudi)
    }

    override suspend fun updateCredentialIntoDB(EudiCredential: EudiCredential) {
        return eudiCredentialService.update(EudiCredential)
    }

    override suspend fun deleteCredentialIntoDB(EudiCredential: EudiCredential) {
        return eudiCredentialService.delete(EudiCredential)
    }
}