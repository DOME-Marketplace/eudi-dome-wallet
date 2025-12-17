package com.inetum.eudi_dome_wallet.core.ports.outputs

import com.inetum.eudi_dome_wallet.core.models.eudi.credentials.EudiCredential

interface EudiCredentialDBPort {
    suspend fun getAllCredentialFromDB(): List<EudiCredential>
    suspend fun getCredentialFromDBbyId(rawJwt: String): EudiCredential
    suspend fun getCredentialByInternalNameFromDB(internalName: String): List<EudiCredential>
    suspend fun saveCredentialIntoDB(EudiCredential: EudiCredential)
    suspend fun saveCredentialListIntoDB(credentialsEudi: List<EudiCredential>)
    suspend fun updateCredentialIntoDB(EudiCredential: EudiCredential)
    suspend fun deleteCredentialIntoDB(EudiCredential: EudiCredential)
}