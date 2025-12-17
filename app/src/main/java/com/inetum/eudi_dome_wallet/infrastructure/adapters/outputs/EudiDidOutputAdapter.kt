package com.inetum.eudi_dome_wallet.infrastructure.adapters.outputs

import com.google.gson.GsonBuilder
import com.google.gson.JsonDeserializer
import com.inetum.eudi_dome_wallet.common.classes.LogLevel
import com.inetum.eudi_dome_wallet.common.utils.AppUtils
import com.inetum.eudi_dome_wallet.common.utils.StringUtilsK.toEntityDidDocument
import com.inetum.eudi_dome_wallet.core.models.enums.AlgorithmType
import com.inetum.eudi_dome_wallet.core.models.eudi.EudiClass
import com.inetum.eudi_dome_wallet.core.models.eudi.did.EudiEntityDidDocument
import com.inetum.eudi_dome_wallet.core.models.eudi.did.EudiNaturalPersonDidDocument
import com.inetum.eudi_dome_wallet.core.ports.outputs.EudiDidPort
import com.inetum.eudi_dome_wallet.infrastructure.network.javaNative.HttpURLConnection
import com.inetum.eudi_dome_wallet.manager.IoCManager
import com.inetum.eudi_dome_wallet.ui.eudi.EudiDidService
import com.inetum.eudi_dome_wallet.ui.eudi.factories.EudiClassFactory
import com.inetum.utils.toJsonString

class EudiDidOutputAdapter (
    private val eudiDidService: EudiDidService,
    private val eudiClassFactory: EudiClassFactory
): EudiDidPort {

    private val TAG : String = "DW:${(this::class.java.simpleName ?: "Unknown class")}"


    override suspend fun createNewEudiClass(): EudiClass {
        val externalEudiClass = eudiClassFactory.createEudiClass()
        val eudiClass = EudiClass(
            algorithmType = AlgorithmType.valueOf(externalEudiClass.getAlgorithmType().name),
            keyPair = externalEudiClass.getKeyPair(),
            privateKeyJsonString = externalEudiClass.getPrivateKeyJsonStringFromKeyPair(),
            publicKeyJsonString = externalEudiClass.getPublicKeyJsonStringFromKeyPair(),
            did = externalEudiClass.getDid()
        )

        return eudiClass
    }

    override suspend fun restoreEudiClassFromPrivateKey(jwkPrivateKeyJsonString: String, did: String): EudiClass {
        val externalEudiClass = eudiClassFactory.restoreEudiClass(jwkPrivateKeyJsonString, did)
        val eudiClass = EudiClass(
            algorithmType = AlgorithmType.valueOf(externalEudiClass.getAlgorithmType().name),
            keyPair = externalEudiClass.getKeyPair(),
            privateKeyJsonString = externalEudiClass.getPrivateKeyJsonStringFromKeyPair(),
            publicKeyJsonString = externalEudiClass.getPublicKeyJsonStringFromKeyPair(),
            did = externalEudiClass.getDid(),
        )
        return eudiClass
    }

    override suspend fun getNaturalPersonDidDocumentByDid(did: String): EudiNaturalPersonDidDocument {

        val didDocumentString = eudiDidService.getDidDocumentStringByDid(did)
        IoCManager.getLogInputAdapter().log(
            LogLevel.WARM,
            TAG,
            "${AppUtils.getFunctionName()} \t DID Doc natural person: $didDocumentString"
        )
        try {
            val gson = GsonBuilder()
                .registerTypeAdapter(String::class.java, JsonDeserializer { json, _, _ ->
                    if (json != null && json.isJsonObject)
                        json.toString()
                    else
                        json?.toString()?.replace("\"", "") ?: ""
                })
                .create()
            val didDocument = gson.fromJson(didDocumentString, EudiNaturalPersonDidDocument::class.java)

            return didDocument
        } catch (e: Exception) {
            IoCManager.getLogInputAdapter().log(LogLevel.ERROR, TAG, "${AppUtils.getFunctionName()} ${e.message}", e)
            throw e
        }

    }
    override suspend fun getEntityDidDocumentByDid(did: String): EudiEntityDidDocument {
        try {

            val url = "https://api-pilot.ebsi.eu/did-registry/v4/identifiers/$did"

            val response = HttpURLConnection.getRequest<Map<String, *>>(url, null)

            val data = response.toJsonString()

            val eudiEntityDidDocument = data.toEntityDidDocument()

            return eudiEntityDidDocument

        } catch (e: Exception) {
            IoCManager.getLogInputAdapter().log(
                LogLevel.ERROR,
                TAG,
                "${AppUtils.getFunctionName()} Error receiving Entity Did Document from Eudi API.  ${e.message}",
                e
            )
            throw e
        }
    }
}