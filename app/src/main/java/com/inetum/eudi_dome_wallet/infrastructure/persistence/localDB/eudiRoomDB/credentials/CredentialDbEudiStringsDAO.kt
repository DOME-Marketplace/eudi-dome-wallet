package com.inetum.eudi_dome_wallet.infrastructure.persistence.localDB.eudiRoomDB.credentials

import androidx.room.Dao
import androidx.room.Delete
import androidx.room.Insert
import androidx.room.OnConflictStrategy
import androidx.room.Query
import androidx.room.Update

@Dao
interface CredentialDbEudiStringsDAO {
    @Query("SELECT * FROM credentials_eudi_strings")
    fun getAll(): List<CredentialStringsEntity>
    @Query("SELECT * FROM credentials_eudi_strings WHERE key_type_last_position=(:key_type3)")
    fun getById(key_type3: String): List<CredentialStringsEntity>
    @Query("SELECT * FROM credentials_eudi_strings WHERE key_type_last_position=(:key_type3) AND locale=(:locale) LIMIT 1")
    fun getByIdAndLocale(key_type3: String, locale: String): CredentialStringsEntity?
    @Insert(onConflict = OnConflictStrategy.REPLACE)
    fun insert(credentialStringsEntity: CredentialStringsEntity): Long

    @Insert(onConflict = OnConflictStrategy.REPLACE)
    fun insertAll(credentialStringEntities: List<CredentialStringsEntity>)

    @Update
    fun update(credentialStringsEntity: CredentialStringsEntity)

    @Delete
    fun delete(credentialStringsEntity: CredentialStringsEntity)
}