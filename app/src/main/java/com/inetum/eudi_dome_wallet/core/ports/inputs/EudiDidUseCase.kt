package com.inetum.eudi_dome_wallet.core.ports.inputs

import com.inetum.eudi_dome_wallet.core.models.eudi.EudiClass
import com.inetum.eudi_dome_wallet.core.models.eudi.did.EudiEntityDidDocument
import com.inetum.eudi_dome_wallet.core.models.eudi.did.EudiNaturalPersonDidDocument

interface EudiDidUseCase {
    suspend fun createNewEudiClass(): EudiClass
    suspend fun getEudiClass(): EudiClass
    suspend fun deleteEudiClass()
    suspend fun getNaturalPersonDidDocumentByDid(did: String): EudiNaturalPersonDidDocument
    suspend fun getEntityDidDocumentByDid(did: String): EudiEntityDidDocument
    suspend fun getOwnJWKPublicKey(): String
    suspend fun getOwnJWKPrivateKey(): String
    suspend fun getOwnDid(): String
    suspend fun getOwnDidDocumentAuthentication(): String
    suspend fun initializeEudiDidAndKeys()
    suspend fun getSignedJWT(
        headerParams: Map<String, Any>,
        payloadParams: Map<String, Any>
    ): String
}