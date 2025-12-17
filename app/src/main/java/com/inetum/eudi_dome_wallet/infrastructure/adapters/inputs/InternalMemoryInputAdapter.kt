package com.inetum.eudi_dome_wallet.infrastructure.adapters.inputs

import com.inetum.eudi_dome_wallet.core.models.enums.UserEnums
import com.inetum.eudi_dome_wallet.core.ports.inputs.InternalMemoryUseCase

class InternalMemoryInputAdapter(private val internalMemoryUseCase: InternalMemoryUseCase) {
    fun deleteAllSharedPreferences() {
        return internalMemoryUseCase.deleteAllSharedPreferences()
    }

    fun recoverTechnologyTypeFromStorage(): UserEnums.TechnologyType {
        return internalMemoryUseCase.recoverTechnologyTypeFromStorage()
    }

    fun saveTechnologyTypeToStorage(technologyType: UserEnums.TechnologyType) {
        return internalMemoryUseCase.saveTechnologyTypeToStorage(technologyType)
    }

    fun getRegistrationCompletedFromStorage(): Boolean {
        return internalMemoryUseCase.getRegistrationCompletedFromStorage()
    }

    fun saveRegistrationCompletedToStorage(registrationCompleted: Boolean) {
        return internalMemoryUseCase.saveRegistrationCompletedToStorage(registrationCompleted)
    }
    fun getUserWantsToUseBiometricAuthentication(): Boolean {
        return internalMemoryUseCase.getUserWantsToUseBiometricAuthentication()
    }

    fun checkPassword(pwd: String): Boolean {
        return internalMemoryUseCase.checkPassword(pwd)
    }

    fun getUserUnlockPin(): String? {
        return internalMemoryUseCase.getUserUnlockPin()
    }

    fun setUserUnlockPin(pin: String) {
        return internalMemoryUseCase.setUserUnlockPin(pin)
    }

    fun firstTime(): Boolean {
        return internalMemoryUseCase.firstTime()
    }

    fun setFirstTime(value: Boolean) {
        return internalMemoryUseCase.setFirstTime(value)
    }

    fun getHideUseGuide(): Boolean {
        return internalMemoryUseCase.getHideUseGuide()
    }

    fun saveUsername(userName: String) {
        return internalMemoryUseCase.saveUsername(userName)
    }

    fun getUsername(): String {
        return internalMemoryUseCase.getUsername()
    }

    fun setUserWantsToUseBiometricAuthentication(value: Boolean) {
        return internalMemoryUseCase.setUserWantsToUseBiometricAuthentication(value)
    }

    fun getEudiDIDFromStorage(): String? {
        return internalMemoryUseCase.getEudiDIDFromStorage()
    }

    fun saveEudiDIDToStorage(didString: String) {
        return internalMemoryUseCase.saveEudiDIDToStorage(didString)
    }

    fun getEudiPrivateKeyFromStorage(): String? {
        return internalMemoryUseCase.getEudiPrivateKeyFromStorage()
    }

    fun saveEudiPrivateKeyJWKToStorage(privateKeyJWK: String) {
        return internalMemoryUseCase.saveEudiPrivateKeyJWKToStorage(privateKeyJWK)
    }
}