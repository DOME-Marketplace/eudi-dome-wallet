package com.inetum.eudi_dome_wallet.core.servicies

import com.inetum.eudi_dome_wallet.common.classes.LogLevel
import com.inetum.eudi_dome_wallet.common.utils.AppUtils
import com.inetum.eudi_dome_wallet.core.models.eudi.EudiClass
import com.inetum.eudi_dome_wallet.core.models.eudi.did.EudiEntityDidDocument
import com.inetum.eudi_dome_wallet.core.models.eudi.did.EudiNaturalPersonDidDocument
import com.inetum.eudi_dome_wallet.core.ports.inputs.EudiDidUseCase
import com.inetum.eudi_dome_wallet.core.ports.outputs.EudiDidPort
import com.inetum.eudi_dome_wallet.manager.IoCManager
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.withContext

class EudiDidServiceCore (private val eudiDidPort: EudiDidPort) : EudiDidUseCase {
    private val TAG : String = "DW:${(this::class.java.simpleName ?: "Unknown class")}"
    private var eudiClass: EudiClass? = null
    override suspend fun createNewEudiClass(): EudiClass {
        val eudiClass = eudiDidPort.createNewEudiClass()

        this.eudiClass = eudiClass
        val did = eudiClass.did
        withContext(Dispatchers.IO) { IoCManager.getInternalMemoryInputAdapter().saveEudiDIDToStorage(did) }

        val privateKey = eudiClass.privateKeyJsonString
        withContext(Dispatchers.IO) { IoCManager.getInternalMemoryInputAdapter().saveEudiPrivateKeyJWKToStorage(privateKey) }

        return this.eudiClass!!
    }

    override suspend fun getEudiClass(): EudiClass {
        if (eudiClass != null) {
            return eudiClass!!
        }

        val privateKeyJwkString = withContext(Dispatchers.IO) { IoCManager.getInternalMemoryInputAdapter().getEudiPrivateKeyFromStorage() }
        val did = withContext(Dispatchers.IO) { IoCManager.getInternalMemoryInputAdapter().getEudiDIDFromStorage() }

        val eudiClass = if (privateKeyJwkString != null && did != null) {
            eudiDidPort.restoreEudiClassFromPrivateKey(privateKeyJwkString, did)
        } else {
            createNewEudiClass()
        }

        this.eudiClass = eudiClass
        return eudiClass
    }

    override suspend fun deleteEudiClass() {
        eudiClass = null

        withContext(Dispatchers.IO) { IoCManager.getInternalMemoryInputAdapter().deleteAllSharedPreferences() }
    }

    override suspend fun getOwnJWKPublicKey(): String {
        if (eudiClass == null) {
            getEudiClass()
        }

        return eudiClass!!.publicKeyJsonString
    }

    override suspend fun getOwnJWKPrivateKey(): String {
        if (eudiClass == null) {
            getEudiClass()
        }

        return eudiClass!!.privateKeyJsonString
    }

    override suspend fun getOwnDid(): String {
        IoCManager.getLogInputAdapter().log(LogLevel.DEBUG, TAG, "${AppUtils.getFunctionName()} execute")
        if (eudiClass == null) {
            getEudiClass()
        }

        return eudiClass!!.did
    }

    override suspend fun getNaturalPersonDidDocumentByDid(did: String): EudiNaturalPersonDidDocument {
        return eudiDidPort.getNaturalPersonDidDocumentByDid(did)
    }

    override suspend fun getOwnDidDocumentAuthentication(): String {
        if (eudiClass == null) {
            getEudiClass()
        }
        return ""
    }

    override suspend fun getEntityDidDocumentByDid(did: String): EudiEntityDidDocument {
        return eudiDidPort.getEntityDidDocumentByDid(did)
    }


    override suspend fun initializeEudiDidAndKeys() {
        IoCManager.getLogInputAdapter().log(LogLevel.DEBUG, TAG, "${AppUtils.getFunctionName()} execute")
        if (eudiClass == null) {
            getEudiClass()
        }
    }
    override suspend fun getSignedJWT(headerParams: Map<String, Any>, payloadParams: Map<String, Any>): String {

        val eudiClass = getEudiClass()

        val signedJWT = IoCManager.getJwtInputAdapter().getSignedJWT(headerParams, payloadParams, eudiClass.algorithmType.name, eudiClass.privateKeyJsonString)

        return signedJWT
    }
}