package com.inetum.eudi_dome_wallet.core.servicies

import com.inetum.eudi_dome_wallet.core.models.eudi.credentials.CredentialEudiString
import com.inetum.eudi_dome_wallet.core.ports.inputs.EudiCredentialStringsDBUseCase
import com.inetum.eudi_dome_wallet.core.ports.outputs.EudiCredentialStringsDBPort

class EudiCredentialStringsDBServiceCore (private val eudiPort: EudiCredentialStringsDBPort): EudiCredentialStringsDBUseCase {

    override suspend fun getAllCredentialStringsFromDB(): List<CredentialEudiString> {
        return eudiPort.getAllCredentialStringsFromDB()
    }

    override suspend fun getCredentialStringsFromDBbyId(keyType3: String): List<CredentialEudiString> {
        return eudiPort.getCredentialStringsFromDBbyId(keyType3)
    }

    override suspend fun getCredentialStringsFromDBbyIdAndLocale(keyType3: String, locale: String): CredentialEudiString {
        return eudiPort.getCredentialStringsFromDBbyIdAndLocale(keyType3, locale)
    }

    override suspend fun saveCredentialStringsIntoDB(credentialEudiString: CredentialEudiString) {
        return eudiPort.saveCredentialStringsIntoDB(credentialEudiString)
    }

    override suspend fun saveCredentialStringsListIntoDB(credentialsEudiString: List<CredentialEudiString>) {
        return eudiPort.saveCredentialStringsListIntoDB(credentialsEudiString)
    }

    override suspend fun updateCredentialStringsIntoDB(credentialEudiString: CredentialEudiString) {
        return eudiPort.updateCredentialStringsIntoDB(credentialEudiString)
    }

    override suspend fun deleteCredentialStringsIntoDB(credentialEudiString: CredentialEudiString) {
        return eudiPort.deleteCredentialStringsIntoDB(credentialEudiString)
    }
}