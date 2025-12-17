package com.inetum.eudi_dome_wallet.infrastructure.adapters.inputs

import com.inetum.eudi_dome_wallet.core.models.eudi.credentials.CredentialEudiString
import com.inetum.eudi_dome_wallet.core.ports.inputs.EudiCredentialStringsDBUseCase

class EudiCredentialStringsDBInputAdapter(private val eudiUseCase: EudiCredentialStringsDBUseCase) {
    suspend fun getCredentialStringsFromDBbyId(keyType3: String): List<CredentialEudiString> {
        return eudiUseCase.getCredentialStringsFromDBbyId(keyType3)
    }
}