package com.inetum.eudi_dome_wallet.ui.eudi.factories

import com.inetum.eudi_dome_wallet.ui.eudi.EudiClass
import com.inetum.eudi_dome_wallet.ui.eudi.EudiDidService

class EudiClassFactory(private val eudiDidService: EudiDidService) {
    private val TAG: String = "DW:${(this::class.java.simpleName ?: "Unknown class")}"

    suspend fun createEudiClass(): EudiClass {

        val eudiClass = EudiClass()

        val did = eudiDidService.didCreation(eudiClass.getKeyPair())

        eudiClass.setDid(did)

        println("[$TAG]\t${(object {}.javaClass.enclosingMethod?.name ?: "Unknown function")}() did Created: $did")
        return eudiClass
    }

    suspend fun restoreEudiClass(jwkPrivateKeyJsonString: String, did: String): EudiClass {

        val eudiClass = EudiClass(jwkPrivateKeyJsonString, did)
        return eudiClass
    }
}