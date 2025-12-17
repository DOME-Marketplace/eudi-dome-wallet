package com.inetum.eudi_dome_wallet.core.servicies

import com.inetum.eudi_dome_wallet.core.models.enums.UserEnums.TechnologyType
import com.inetum.eudi_dome_wallet.core.ports.inputs.InternalMemoryUseCase
import com.inetum.eudi_dome_wallet.core.ports.outputs.InternalMemoryPort
import org.json.JSONArray
import java.io.File

class InternalMemoryServiceCore(private val internalMemoryPort: InternalMemoryPort) :
    InternalMemoryUseCase {

    override fun recoverTechnologyTypeFromStorage(): TechnologyType {
        return internalMemoryPort.recoverTechnologyTypeFromStorage()
    }

    override fun saveTechnologyTypeToStorage(technologyType: TechnologyType) {
        return internalMemoryPort.saveTechnologyTypeToStorage(technologyType)
    }

    override fun deleteAllSharedPreferences() {
        return internalMemoryPort.deleteAllSharedPreferences()
    }

    override fun getAllSharedPreferencesForBackup(): Map<String, Any> {
        return internalMemoryPort.getAllSharedPreferencesForBackup()
    }

    override fun restoreSharedPreferencesFromMap(spValues: Map<String, Any>): Boolean {
        return internalMemoryPort.restoreSharedPreferencesFromMap(spValues)
    }

    override fun restoreSharedPreferencesFromJsonArray(spValues: JSONArray): Boolean {
        return internalMemoryPort.restoreSharedPreferencesFromJsonArray(spValues)
    }

    override fun getUserWantsToUseBiometricAuthentication(): Boolean {
        return internalMemoryPort.getUserWantsToUseBiometricAuthentication()
    }

    override fun checkPassword(pwd: String): Boolean {
        return internalMemoryPort.checkPassword(pwd)
    }

    override fun getWalletFilename(): String? {
        return internalMemoryPort.getWalletFilename()
    }

    override fun setWalletFilename(fileName: String) {
        return internalMemoryPort.setWalletFilename(fileName)
    }

    override fun getUserUnlockPin(): String? {
        return internalMemoryPort.getUserUnlockPin()
    }

    override fun setUserUnlockPin(pin: String) {
        return internalMemoryPort.setUserUnlockPin(pin)
    }

    override fun hasWalletKeyStore(): Boolean {
        return internalMemoryPort.hasWalletKeyStore()
    }

    override fun setWalletKeyStore(value: Boolean) {
        return internalMemoryPort.setWalletKeyStore(value)
    }

    override fun firstTime(): Boolean {
        return internalMemoryPort.firstTime()
    }

    override fun setFirstTime(value: Boolean) {
        return internalMemoryPort.setFirstTime(value)
    }

    override fun getCredentialInformationVersion(): Int {
        return internalMemoryPort.getCredentialInformationVersion()
    }

    override fun updateInformationVersion(version: Int) {
        return internalMemoryPort.updateInformationVersion(version)
    }

    override fun setHideUseGuide(hideUseGuide: Boolean) {
        return internalMemoryPort.setHideUseGuide(hideUseGuide)
    }

    override fun getHideUseGuide(): Boolean {
        return internalMemoryPort.getHideUseGuide()
    }

    override fun saveUsername(userName: String) {
        return internalMemoryPort.saveUsername(userName)
    }

    override fun getUsername(): String {
        return internalMemoryPort.getUsername()
    }

    override fun recoverySetnewkeystore(keystore: File) {
        return internalMemoryPort.recovery_setNewKeystore(keystore)
    }

    override fun setUserWantsToUseBiometricAuthentication(value: Boolean) {
        return internalMemoryPort.setUserWantsToUseBiometricAuthentication(value)
    }

    override fun getRegistrationCompletedFromStorage(): Boolean {
        return internalMemoryPort.getRegistrationCompletedFromStorage()
    }

    override fun saveRegistrationCompletedToStorage(registrationCompleted: Boolean) {
        return internalMemoryPort.saveRegistrationCompletedToStorage(registrationCompleted)
    }

    override fun getEudiDIDFromStorage(): String? {
        return internalMemoryPort.getEudiDIDFromStorage()
    }

    override fun saveEudiDIDToStorage(didString: String) {
        return internalMemoryPort.saveEudiDIDToStorage(didString)
    }

    override fun getEudiPrivateKeyFromStorage(): String? {
        return internalMemoryPort.getEudiPrivateKeyFromStorage()
    }

    override fun saveEudiPrivateKeyJWKToStorage(privateKeyJWK: String) {
        return internalMemoryPort.saveEudiPrivateKeyJWKToStorage(privateKeyJWK)
    }

}