package com.inetum.eudi_dome_wallet.core.ports.inputs

import com.inetum.eudi_dome_wallet.core.models.eudi.credentials.CredentialEudiString

interface EudiCredentialStringsDBUseCase {
    suspend fun getAllCredentialStringsFromDB(): List<CredentialEudiString>
    suspend fun getCredentialStringsFromDBbyId(keyType3: String): List<CredentialEudiString>
    suspend fun getCredentialStringsFromDBbyIdAndLocale(keyType3: String, locale: String): CredentialEudiString
    suspend fun saveCredentialStringsIntoDB(credentialEudiString: CredentialEudiString)
    suspend fun saveCredentialStringsListIntoDB(credentialsEudiString: List<CredentialEudiString>)
    suspend fun updateCredentialStringsIntoDB(credentialEudiString: CredentialEudiString)
    suspend fun deleteCredentialStringsIntoDB(credentialEudiString: CredentialEudiString)

}