package com.inetum.eudi_dome_wallet.core.ports.inputs

import com.inetum.eudi_dome_wallet.core.models.eudi.credentials.EudiCredential

interface EudiCredentialDBUseCase {
    suspend fun getAllCredentialFromDB(): List<EudiCredential>
    suspend fun getCredentialFromDBbyId(rawJwt: String): EudiCredential
    suspend fun getCredentialByInternalNameFromDB(internalName: String): List<EudiCredential>
    suspend fun saveCredentialIntoDB(eudiCredential: EudiCredential)
    suspend fun saveCredentialListIntoDB(credentialsEudi: List<EudiCredential>)
    suspend fun updateCredentialIntoDB(eudiCredential: EudiCredential)
    suspend fun deleteCredentialIntoDB(eudiCredential: EudiCredential)

}
