package com.inetum.eudi_dome_wallet.infrastructure.adapters.outputs

import com.inetum.eudi_dome_wallet.core.models.eudi.credentials.CredentialEudiString
import com.inetum.eudi_dome_wallet.core.ports.outputs.EudiCredentialStringsDBPort
import com.inetum.eudi_dome_wallet.infrastructure.services.eudi.EudiCredentialStringsService

class EudiCredentialStringsDBOutputAdapter (
    private val eudiCredentialStringsService: EudiCredentialStringsService
): EudiCredentialStringsDBPort {
    override suspend fun getAllCredentialStringsFromDB(): List<CredentialEudiString> {
        return eudiCredentialStringsService.getAll()
    }

    override suspend fun getCredentialStringsFromDBbyId(keyType3: String): List<CredentialEudiString> {
        return eudiCredentialStringsService.getById(keyType3)
    }

    override suspend fun getCredentialStringsFromDBbyIdAndLocale(keyType3: String, locale: String): CredentialEudiString {
        return eudiCredentialStringsService.getByIdAndLocale(keyType3, locale) ?: throw NullPointerException("CredentialEudiString null")
    }

    override suspend fun saveCredentialStringsIntoDB(credentialEudiString: CredentialEudiString) {
        return eudiCredentialStringsService.insert(credentialEudiString)
    }

    override suspend fun saveCredentialStringsListIntoDB(credentialsEudiString: List<CredentialEudiString>) {
        return eudiCredentialStringsService.insertAll(credentialsEudiString)
    }

    override suspend fun updateCredentialStringsIntoDB(credentialEudiString: CredentialEudiString) {
        return eudiCredentialStringsService.update(credentialEudiString)
    }

    override suspend fun deleteCredentialStringsIntoDB(credentialEudiString: CredentialEudiString) {
        return eudiCredentialStringsService.delete(credentialEudiString)
    }
}