package com.inetum.eudi_dome_wallet.core.ports.outputs

import com.inetum.eudi_dome_wallet.core.models.eudi.EudiClass
import com.inetum.eudi_dome_wallet.core.models.eudi.did.EudiEntityDidDocument
import com.inetum.eudi_dome_wallet.core.models.eudi.did.EudiNaturalPersonDidDocument

interface EudiDidPort {
    suspend fun createNewEudiClass(): EudiClass
    suspend fun restoreEudiClassFromPrivateKey(jwkPrivateKeyJsonString: String, did: String): EudiClass
    suspend fun getNaturalPersonDidDocumentByDid(did: String): EudiNaturalPersonDidDocument
    suspend fun getEntityDidDocumentByDid(did: String): EudiEntityDidDocument
}