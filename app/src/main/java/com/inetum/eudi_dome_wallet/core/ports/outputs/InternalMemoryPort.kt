package com.inetum.eudi_dome_wallet.core.ports.outputs

import com.inetum.eudi_dome_wallet.core.models.enums.UserEnums.TechnologyType
import org.json.JSONArray
import java.io.File

interface InternalMemoryPort {
    fun recoverTechnologyTypeFromStorage(): TechnologyType
    fun saveTechnologyTypeToStorage(technologyType: TechnologyType)
    fun deleteAllSharedPreferences()
    fun getAllSharedPreferencesForBackup(): Map<String, Any>
    fun restoreSharedPreferencesFromMap(spValues: Map<String, Any>): Boolean
    fun restoreSharedPreferencesFromJsonArray(spValues: JSONArray): Boolean
    fun getUserWantsToUseBiometricAuthentication(): Boolean
    fun checkPassword(pwd: String): Boolean
    fun getWalletFilename(): String?
    fun setWalletFilename(fileName: String)
    fun getUserUnlockPin(): String?
    fun setUserUnlockPin(pin: String)
    fun hasWalletKeyStore(): Boolean
    fun setWalletKeyStore(value: Boolean)
    fun firstTime(): Boolean
    fun setFirstTime(value: Boolean)
    fun getCredentialInformationVersion(): Int
    fun updateInformationVersion(version: Int)
    fun setHideUseGuide(hideUseGuide: Boolean)
    fun getHideUseGuide(): Boolean
    fun saveUsername(userName: String)
    fun getUsername(): String
    fun recovery_setNewKeystore(keystore: File)
    fun setUserWantsToUseBiometricAuthentication(value: Boolean)
    fun getRegistrationCompletedFromStorage(): Boolean
    fun saveRegistrationCompletedToStorage(registrationCompleted: Boolean)
    fun getEudiDIDFromStorage(): String?
    fun saveEudiDIDToStorage(didString: String)
    fun getEudiPrivateKeyFromStorage(): String?
    fun saveEudiPrivateKeyJWKToStorage(privateKeyJWK: String)
}