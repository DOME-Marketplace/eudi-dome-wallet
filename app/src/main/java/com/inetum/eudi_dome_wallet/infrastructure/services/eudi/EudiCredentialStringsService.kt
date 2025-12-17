package com.inetum.eudi_dome_wallet.infrastructure.services.eudi

import com.inetum.eudi_dome_wallet.core.mappers.eudi.EudiCredentialStringsMapper.toCore
import com.inetum.eudi_dome_wallet.core.mappers.eudi.EudiCredentialStringsMapper.toDbRoom
import com.inetum.eudi_dome_wallet.core.models.eudi.credentials.CredentialEudiString
import com.inetum.eudi_dome_wallet.infrastructure.persistence.localDB.eudiRoomDB.credentials.CredentialEudiStringsRepository

class EudiCredentialStringsService(private val credentialEudiStringsRepository: CredentialEudiStringsRepository) {

    fun getAll(): List<CredentialEudiString> {
        return credentialEudiStringsRepository.getAll().map { it.toCore() }
    }

    fun getById(key_type3: String): List<CredentialEudiString> {
        return credentialEudiStringsRepository.getById(key_type3).map { it.toCore() }
    }

    fun getByIdAndLocale(key_type3: String, locale: String): CredentialEudiString? {
        return credentialEudiStringsRepository.getByIdAndLocale(key_type3, locale)?.toCore()
    }

    fun insert(credential: CredentialEudiString) {
        return credentialEudiStringsRepository.insert(credential.toDbRoom())
    }

    fun insertAll(credentials: List<CredentialEudiString>) {
        credentialEudiStringsRepository.insertAll(credentials.map { it.toDbRoom() })
    }

    fun update(credential: CredentialEudiString) {
        credentialEudiStringsRepository.update(credential.toDbRoom())
    }

    fun delete(credential: CredentialEudiString) {
        credentialEudiStringsRepository.delete(credential.toDbRoom())
    }

}