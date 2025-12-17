package com.inetum.eudi_dome_wallet.core.servicies

import com.inetum.eudi_dome_wallet.core.models.eudi.credentials.EudiCredential
import com.inetum.eudi_dome_wallet.core.ports.inputs.EudiCredentialDBUseCase
import com.inetum.eudi_dome_wallet.core.ports.outputs.EudiCredentialDBPort

class EudiCredentialDBServiceCore (private val eudiCredentialDBPort: EudiCredentialDBPort): EudiCredentialDBUseCase {

    override suspend fun getAllCredentialFromDB(): List<EudiCredential> {
        return eudiCredentialDBPort.getAllCredentialFromDB()
    }
    override suspend fun getCredentialFromDBbyId(rawJwt: String): EudiCredential {
        return eudiCredentialDBPort.getCredentialFromDBbyId(rawJwt)
    }
    override suspend fun getCredentialByInternalNameFromDB(internalName: String): List<EudiCredential> {
        return eudiCredentialDBPort.getCredentialByInternalNameFromDB(internalName)
    }
    override suspend fun saveCredentialIntoDB(eudiCredential: EudiCredential) {
        return eudiCredentialDBPort.saveCredentialIntoDB(eudiCredential)
    }
    override suspend fun saveCredentialListIntoDB(credentialsEudi: List<EudiCredential>) {
        return eudiCredentialDBPort.saveCredentialListIntoDB(credentialsEudi)
    }
    override suspend fun updateCredentialIntoDB(eudiCredential: EudiCredential) {
        return eudiCredentialDBPort.updateCredentialIntoDB(eudiCredential)
    }
    override suspend fun deleteCredentialIntoDB(eudiCredential: EudiCredential) {
        return eudiCredentialDBPort.deleteCredentialIntoDB(eudiCredential)
    }
}