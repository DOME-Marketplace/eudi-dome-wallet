package com.inetum.eudi_dome_wallet.core.models.factories.eudi

import com.google.gson.Gson
import com.inetum.eudi_dome_wallet.App
import com.inetum.eudi_dome_wallet.common.classes.LogLevel
import com.inetum.eudi_dome_wallet.common.utils.AppUtils
import com.inetum.eudi_dome_wallet.core.models.eudi.credentials.CredentialEudiString
import com.inetum.eudi_dome_wallet.core.models.eudi.credentials.EudiCredential
import com.inetum.eudi_dome_wallet.manager.IoCManager
import com.inetum.utils.getValueAs
import com.inetum.utils.toJsonString
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.withContext

/**
 * Factory class responsible for creating and initializing instances of [EudiCredential].
 *
 * The factory ensures that the 'CredentialEudi' object is initialized correctly, it is also responsible for creating
 * and adding the associated list of 'CredentialEudiString' in different ways.
 */
object CredentialFactory {
    private val TAG: String = "DW:${(this::class.java.simpleName ?: "Unknown class")}"

    suspend fun createCredentialFromMap(credentialMap: Map<*, *>, jwtVC: String): EudiCredential {
        val incompleteCredential =
            Gson().fromJson(credentialMap.toJsonString(), EudiCredential::class.java)

        val credentialType =
            incompleteCredential.vc.type.first()
        val credentialStringList = withContext(Dispatchers.IO) {
            try {
                IoCManager.getEudiCredentialStringsDBInputAdapter()
                    .getCredentialStringsFromDBbyId(credentialType)
            } catch (e: Exception) {
                IoCManager.getLogInputAdapter().log(
                    LogLevel.DEBUG,
                    TAG,
                    "${AppUtils.getFunctionName()} Credential String not exit in database"
                )
                arrayListOf()
            }
        }

        return getCredential(
            credentialStringList,
            credentialType,
            credentialMap,
            incompleteCredential,
            jwtVC
        )
    }

    fun createCredentialFromMap(
        credentialMap: Map<*, *>,
        jwtVC: String,
        credentialStringList: List<CredentialEudiString>
    ): EudiCredential {
        val incompleteCredential =
            Gson().fromJson(credentialMap.toJsonString(), EudiCredential::class.java)

        val credentialType =
            incompleteCredential.vc.type.first()
        return getCredential(
            credentialStringList,
            credentialType,
            credentialMap,
            incompleteCredential,
            jwtVC
        )
    }

    suspend fun createCredentialFromJwt(jwtVC: String): EudiCredential {

        val decodedCredentialMap = IoCManager.getJwtInputAdapter().getDecodeJWT(jwtVC)

        val jwtPayloadMap = decodedCredentialMap.getValueAs<Map<*, *>>("payload")

        return createCredentialFromMap(jwtPayloadMap, jwtVC)
    }

    suspend fun createCredentialFromJwt(
        jwtVC: String,
        credentialStringList: List<CredentialEudiString>
    ): EudiCredential {

        val decodedCredentialMap = IoCManager.getJwtInputAdapter().getDecodeJWT(jwtVC)

        val jwtPayloadMap = decodedCredentialMap.getValueAs<Map<*, *>>("payload")

        return createCredentialFromMap(jwtPayloadMap, jwtVC, credentialStringList)
    }
    private fun getCredential(
        credentialStringList: List<CredentialEudiString>,
        credentialType: String,
        jsonMap: Map<*, *>,
        incompleteCredential: EudiCredential,
        jwtVC: String
    ): EudiCredential {
        val appLocale = App.language
        val showName = credentialStringList.firstOrNull {
            appLocale.lowercase().contains(it.locale.lowercase()) ||
                    it.locale.lowercase().contains(appLocale.lowercase())
        }?.keyPretty

        val verifiableCredential = jsonMap.getValueAs<Map<*, *>>("vc")
        incompleteCredential.apply {
            rawJwt = jwtVC
            vc.presentationsList = arrayListOf()
            vc.context = verifiableCredential.getValueAs<List<String>>("@context")
            vc.credentialSubject.populateCredentialSubjectFromCredentialJwtDecodedPayloadMap(jsonMap)

            vc.credentialSubject.credentialObjectPrettyKeyList = credentialStringList
            vc.credentialSubject.credentialObjectPrettyKey = showName
                ?: credentialType
            vc.credentialSubject.credentialObjectKey = credentialType
        }

        return incompleteCredential
    }
}