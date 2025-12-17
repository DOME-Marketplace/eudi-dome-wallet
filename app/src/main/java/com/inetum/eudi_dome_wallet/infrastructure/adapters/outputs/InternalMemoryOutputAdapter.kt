package com.inetum.eudi_dome_wallet.infrastructure.adapters.outputs

import android.content.SharedPreferences
import android.util.Log
import com.inetum.eudi_dome_wallet.common.classes.LogLevel
import com.inetum.eudi_dome_wallet.common.utils.AppUtils
import com.inetum.eudi_dome_wallet.core.models.enums.UserEnums.TechnologyType
import com.inetum.eudi_dome_wallet.core.ports.outputs.InternalMemoryPort
import com.inetum.eudi_dome_wallet.infrastructure.persistence.sharedPreferences.SharedPreferencesEncryptedService
import com.inetum.eudi_dome_wallet.infrastructure.persistence.sharedPreferences.SharedPreferencesEncryptedServiceEudi
import com.inetum.eudi_dome_wallet.infrastructure.persistence.sharedPreferences.SharedPreferencesRepository
import com.inetum.eudi_dome_wallet.manager.IoCManager
import org.json.JSONArray
import java.io.File

class InternalMemoryOutputAdapter(
    private var sharedPreferencesEncryptedService: SharedPreferencesEncryptedService,
    private var sharedPreferencesEncryptedServiceEudi: SharedPreferencesEncryptedServiceEudi
) : InternalMemoryPort {
    private val TAG: String = "DW:${(this::class.java.simpleName ?: "Unknown class")}"

    private val APP_USER_PREFERENCES_KEY_VALUE = "appUserPreferences"
    private val EUDI_PREFS_KEY_VALUE = "eudiPrefs"

    private enum class PreferenceTag() {
        UserName, UnlockPin, WantsBiometric,
        HasWalletKeystore, WalletFilename, DID, FTE, LastUseTime,
        CredentialInformationVersion, HideHomeUseGuide, AtfUser, TechnologyType, ECKeyPrivateKey
    }

    override fun recoverTechnologyTypeFromStorage(): TechnologyType {
        val technologyTypeString = sharedPreferencesEncryptedService.readPreference(
            PreferenceTag.TechnologyType.name, SharedPreferencesRepository.PreferenceType.STRING
        ) as String?
        try {
            return if (technologyTypeString != null) TechnologyType.valueOf(technologyTypeString)
            else TechnologyType.EUDI_TYPE
        } catch (e: Exception) {
            IoCManager.getLogInputAdapter().log(
                LogLevel.DEBUG,
                TAG,
                "${AppUtils.getFunctionName()} userUnlockPin is null into recoverTechnologyTypeFromStorage" + e
            )
            return TechnologyType.EUDI_TYPE
        }

    }

    override fun saveTechnologyTypeToStorage(technologyType: TechnologyType) {
        sharedPreferencesEncryptedService.storePreference(
            PreferenceTag.TechnologyType.name,
            technologyType.name,
            SharedPreferencesRepository.PreferenceType.STRING
        )
    }


    override fun deleteAllSharedPreferences() {
        sharedPreferencesEncryptedServiceEudi.deleteAllSharedPreferences()
    }

    override fun getAllSharedPreferencesForBackup(): Map<String, Any> {

        val appUserPreferences = getAppUserPreferencesSharedPreferencesForBackup()
        val eudiPrefs = getEudiSharedPreferencesForBackup()

        val map = mapOf(
            APP_USER_PREFERENCES_KEY_VALUE to appUserPreferences,
            "eudiPrefs" to eudiPrefs
        )

        return map as Map<String, Any>
    }

    private fun getAppUserPreferencesSharedPreferencesForBackup(): Map<String, Any>? {
        val prefs: SharedPreferences =
            sharedPreferencesEncryptedService.getCompleteSharedPreferences()
        return try {
            prefs.all as Map<String, Any>?
        } catch (e: Exception) {
            IoCManager.getLogInputAdapter().log(
                LogLevel.DEBUG,
                TAG,
                "${AppUtils.getFunctionName()} userUnlockPin is null into getAppUserPreferencesSharedPreferencesForBackup" + e
            )
            null
        }
    }
    private fun getEudiSharedPreferencesForBackup(): Map<String, Any>? {
        val prefs: SharedPreferences =
            sharedPreferencesEncryptedServiceEudi.getCompleteSharedPreferences()
        return try {
            prefs.all as Map<String, Any>?
        } catch (e: Exception) {
            IoCManager.getLogInputAdapter().log(
                LogLevel.DEBUG,
                TAG,
                "${AppUtils.getFunctionName()} userUnlockPin is null into getEudiSharedPreferencesForBackup" + e
            )
            null
        }
    }

    override fun restoreSharedPreferencesFromMap(spValues: Map<String, Any>): Boolean {
        spValues.entries.forEach {
            if (it.key == EUDI_PREFS_KEY_VALUE) {
                if (!saveMapToEudiPreferences(it.value as Map<String, Any>)) return false
            }
        }
        return true
    }

    private fun saveMapToEudiPreferences(map: Map<String, Any>): Boolean {
        try {
            map.entries.forEach { (key, value) ->
                when (value) {
                    is String -> {
                        sharedPreferencesEncryptedServiceEudi.storePreference(
                            PreferenceTag.valueOf(key).name,
                            value,
                            SharedPreferencesRepository.PreferenceType.STRING
                        )
                    }

                    is Int -> {
                        sharedPreferencesEncryptedServiceEudi.storePreference(
                            PreferenceTag.valueOf(key).name,
                            value,
                            SharedPreferencesRepository.PreferenceType.INT
                        )
                    }

                    is Boolean -> {
                        sharedPreferencesEncryptedServiceEudi.storePreference(
                            PreferenceTag.valueOf(key).name,
                            value,
                            SharedPreferencesRepository.PreferenceType.BOOLEAN
                        )
                    }

                    is Float -> {}
                    is Long -> {}
                    else -> throw IllegalArgumentException("Unsupported type")
                }
            }
        } catch (e: java.lang.Exception) {
            Log.d(TAG, "${AppUtils.getFunctionName()} ERROR when processing SharedPreferences! ")
            e.printStackTrace()
            return false
        }

        return true
    }

    override fun restoreSharedPreferencesFromJsonArray(spValues: JSONArray): Boolean {
        var counter = 0
        try {
            for (i in 0 until spValues.length()) {
                val sharedPreference = spValues.getJSONObject(i)
                val key = sharedPreference.keys().next()
                val value = sharedPreference[key]
                Log.d(TAG, "${AppUtils.getFunctionName()} SP Found: Key -> $key")
                if (isRecoverableKey(key)) {
                    when (value) {
                        is String -> {
                            sharedPreferencesEncryptedServiceEudi.storePreference(
                                PreferenceTag.valueOf(key).name,
                                value,
                                SharedPreferencesRepository.PreferenceType.STRING
                            )
                        }

                        is Boolean -> {
                            sharedPreferencesEncryptedServiceEudi.storePreference(
                                PreferenceTag.valueOf(key).name,
                                value,
                                SharedPreferencesRepository.PreferenceType.BOOLEAN
                            )
                        }

                        is Int -> {
                            sharedPreferencesEncryptedServiceEudi.storePreference(
                                PreferenceTag.valueOf(key).name,
                                value,
                                SharedPreferencesRepository.PreferenceType.INT
                            )
                        }

                        else -> {

                        }
                    }
                    counter++
                }
            }
            Log.d(
                TAG,
                "${AppUtils.getFunctionName()} Recovered " + counter + "/" + spValues.length() + " Shared Prefences"
            )
        } catch (e: java.lang.Exception) {
            Log.d(TAG, "${AppUtils.getFunctionName()} ERROR when processing SharedPreferences! ")
            e.printStackTrace()
            return false
        }

        return true
    }

    override fun getUserWantsToUseBiometricAuthentication(): Boolean {
        return sharedPreferencesEncryptedServiceEudi.readPreference(
            PreferenceTag.WantsBiometric.name, SharedPreferencesRepository.PreferenceType.BOOLEAN
        ) as Boolean
    }

    override fun checkPassword(pwd: String): Boolean {
        return pwd.isNotEmpty() && pwd == sharedPreferencesEncryptedServiceEudi.readPreference(
            PreferenceTag.UnlockPin.name, SharedPreferencesRepository.PreferenceType.STRING
        ).toString()
    }

    override fun getWalletFilename(): String? {
        return sharedPreferencesEncryptedServiceEudi.readPreference(
            PreferenceTag.WalletFilename.name, SharedPreferencesRepository.PreferenceType.STRING
        ) as String?
    }

    override fun setWalletFilename(fileName: String) {
        sharedPreferencesEncryptedServiceEudi.storePreference(
            PreferenceTag.WalletFilename.name,
            fileName,
            SharedPreferencesRepository.PreferenceType.STRING
        )
    }

    override fun getUserUnlockPin(): String? {
        try {
            val userUnlockPin = sharedPreferencesEncryptedServiceEudi.readPreference(
                PreferenceTag.UnlockPin.name, SharedPreferencesRepository.PreferenceType.STRING
            ) as String

            if (userUnlockPin.isEmpty()) throw NullPointerException("userUnlockPin is null")

            return userUnlockPin

        } catch (e: Exception) {
            IoCManager.getLogInputAdapter().log(
                LogLevel.DEBUG,
                TAG,
                "${AppUtils.getFunctionName()} userUnlockPin is null into SharedPreferences" + e
            )
            return null
        }
    }

    override fun setUserUnlockPin(pin: String) {
        sharedPreferencesEncryptedServiceEudi.storePreference(
            PreferenceTag.UnlockPin.name, pin, SharedPreferencesRepository.PreferenceType.STRING
        )
    }

    override fun hasWalletKeyStore(): Boolean {
        return sharedPreferencesEncryptedServiceEudi.readPreference(
            PreferenceTag.HasWalletKeystore.name, SharedPreferencesRepository.PreferenceType.BOOLEAN
        ) as Boolean
    }

    override fun setWalletKeyStore(value: Boolean) {
        sharedPreferencesEncryptedServiceEudi.storePreference(
            PreferenceTag.HasWalletKeystore.name,
            value,
            SharedPreferencesRepository.PreferenceType.BOOLEAN
        )
    }

    override fun firstTime(): Boolean {
        return sharedPreferencesEncryptedServiceEudi.readPreference(
            PreferenceTag.FTE.name, SharedPreferencesRepository.PreferenceType.BOOLEAN
        ) as Boolean
    }

    override fun setFirstTime(value: Boolean) {
        sharedPreferencesEncryptedServiceEudi.storePreference(
            PreferenceTag.FTE.name, value, SharedPreferencesRepository.PreferenceType.BOOLEAN
        )
    }

    override fun getCredentialInformationVersion(): Int {
        return sharedPreferencesEncryptedServiceEudi.readPreference(
            PreferenceTag.CredentialInformationVersion.name,
            SharedPreferencesRepository.PreferenceType.INT
        ) as Int
    }

    override fun updateInformationVersion(version: Int) {
        sharedPreferencesEncryptedServiceEudi.storePreference(
            PreferenceTag.CredentialInformationVersion.name,
            version,
            SharedPreferencesRepository.PreferenceType.INT
        )
    }

    override fun setHideUseGuide(hideUseGuide: Boolean) {
        sharedPreferencesEncryptedServiceEudi.storePreference(
            PreferenceTag.HideHomeUseGuide.name,
            hideUseGuide,
            SharedPreferencesRepository.PreferenceType.BOOLEAN
        )
    }

    override fun getHideUseGuide(): Boolean {
        return sharedPreferencesEncryptedServiceEudi.readPreference(
            PreferenceTag.HideHomeUseGuide.name, SharedPreferencesRepository.PreferenceType.BOOLEAN
        ) as Boolean
    }

    override fun saveUsername(userName: String) {
        sharedPreferencesEncryptedServiceEudi.storePreference(
            PreferenceTag.UserName.name, userName, SharedPreferencesRepository.PreferenceType.STRING
        )
    }

    override fun getUsername(): String {
        return sharedPreferencesEncryptedServiceEudi.readPreference(
            PreferenceTag.UserName.name, SharedPreferencesRepository.PreferenceType.STRING
        ) as String
    }

    override fun recovery_setNewKeystore(keystore: File) {
        sharedPreferencesEncryptedServiceEudi.storePreference(
            PreferenceTag.HasWalletKeystore.name,
            true,
            SharedPreferencesRepository.PreferenceType.BOOLEAN
        )
        sharedPreferencesEncryptedServiceEudi.storePreference(
            PreferenceTag.WalletFilename.name,
            keystore.absolutePath,
            SharedPreferencesRepository.PreferenceType.STRING
        )
    }

    override fun setUserWantsToUseBiometricAuthentication(value: Boolean) {
        sharedPreferencesEncryptedServiceEudi.storePreference(
            PreferenceTag.WantsBiometric.name,
            value,
            SharedPreferencesRepository.PreferenceType.BOOLEAN
        )
    }

    override fun getRegistrationCompletedFromStorage(): Boolean {
        try {
            val registrationCompleted = sharedPreferencesEncryptedServiceEudi.readPreference(
                PreferenceTag.HasWalletKeystore.name,
                SharedPreferencesRepository.PreferenceType.BOOLEAN
            ) as Boolean

            return registrationCompleted
        } catch (e: Exception) {
            IoCManager.getLogInputAdapter().log(
                LogLevel.DEBUG,
                TAG,
                "${AppUtils.getFunctionName()} registrationCompleted is null into SharedPreferences" + e
            )
            return false
        }
    }

    override fun saveRegistrationCompletedToStorage(registrationCompleted: Boolean) {
        sharedPreferencesEncryptedServiceEudi.storePreference(
            PreferenceTag.HasWalletKeystore.name,
            registrationCompleted,
            SharedPreferencesRepository.PreferenceType.BOOLEAN
        )
    }

    override fun getEudiDIDFromStorage(): String? {
        try {
            val eudiDidString = sharedPreferencesEncryptedServiceEudi.readPreference(
                PreferenceTag.DID.name, SharedPreferencesRepository.PreferenceType.STRING
            ) as String

            if (eudiDidString.isEmpty()) throw NullPointerException("Eudi Did is null")

            return eudiDidString
        } catch (e: Exception) {
            IoCManager.getLogInputAdapter().log(
                LogLevel.DEBUG,
                TAG,
                "${AppUtils.getFunctionName()} Eudi Did is null into SharedPreferences" + e
            )
            return null
        }
    }

    override fun saveEudiDIDToStorage(didString: String) {
        sharedPreferencesEncryptedServiceEudi.storePreference(
            PreferenceTag.DID.name, didString, SharedPreferencesRepository.PreferenceType.STRING
        )
    }

    override fun getEudiPrivateKeyFromStorage(): String? {
        try {
            val eudiPrivateKeyJWTString = sharedPreferencesEncryptedServiceEudi.readPreference(
                PreferenceTag.ECKeyPrivateKey.name,
                SharedPreferencesRepository.PreferenceType.STRING
            ) as String

            if (eudiPrivateKeyJWTString.isEmpty()) throw NullPointerException("Eudi PrivateKey is null")

            return eudiPrivateKeyJWTString
        } catch (e: Exception) {
            IoCManager.getLogInputAdapter().log(
                LogLevel.DEBUG,
                TAG,
                "${AppUtils.getFunctionName()} Eudi PrivateKey is null into SharedPreferences" + e
            )
            return null
        }
    }

    override fun saveEudiPrivateKeyJWKToStorage(privateKeyJWK: String) {
        sharedPreferencesEncryptedServiceEudi.storePreference(
            PreferenceTag.ECKeyPrivateKey.name,
            privateKeyJWK,
            SharedPreferencesRepository.PreferenceType.STRING
        )
    }

    private fun isRecoverableKey(key: String): Boolean {
        return key == PreferenceTag.UserName.name || key == PreferenceTag.UnlockPin.name || key == PreferenceTag.WantsBiometric.name || key == PreferenceTag.DID.name ||
                key == PreferenceTag.HideHomeUseGuide.name || key == PreferenceTag.FTE.name
    }
}