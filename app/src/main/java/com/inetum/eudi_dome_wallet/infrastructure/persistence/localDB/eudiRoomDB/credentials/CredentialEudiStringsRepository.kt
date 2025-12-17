package com.inetum.eudi_dome_wallet.infrastructure.persistence.localDB.eudiRoomDB.credentials

class CredentialEudiStringsRepository(
    private val credentialDbEudiStringsDao: CredentialDbEudiStringsDAO,
) {
    fun getAll(): List<CredentialStringsEntity> {
        return credentialDbEudiStringsDao.getAll()
    }

    fun getById(key_type3: String): List<CredentialStringsEntity> {
        return credentialDbEudiStringsDao.getById(key_type3)
    }

    fun getByIdAndLocale(key_type3: String, locale: String): CredentialStringsEntity? {
        return credentialDbEudiStringsDao.getByIdAndLocale(key_type3, locale)
    }

    fun insert(credential: CredentialStringsEntity) {
        credentialDbEudiStringsDao.insert(credential)
    }

    fun insertAll(credentials: List<CredentialStringsEntity>) {
        credentialDbEudiStringsDao.insertAll(credentials)
    }

    fun update(credential: CredentialStringsEntity) {
        credentialDbEudiStringsDao.update(credential)
    }

    fun delete(credential: CredentialStringsEntity) {
        credentialDbEudiStringsDao.delete(credential)
    }
}