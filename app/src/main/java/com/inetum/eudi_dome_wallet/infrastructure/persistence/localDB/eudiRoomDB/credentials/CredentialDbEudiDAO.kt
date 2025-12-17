package com.inetum.eudi_dome_wallet.infrastructure.persistence.localDB.eudiRoomDB.credentials

import androidx.room.Dao
import androidx.room.Delete
import androidx.room.Insert
import androidx.room.OnConflictStrategy
import androidx.room.Query
import androidx.room.Transaction
import androidx.room.Update


@Dao
interface CredentialDbEudiDAO {
    @Query("SELECT * FROM credentials_eudi")
    fun getAll(): List<CredentialEntity>

    @Transaction
    @Query("SELECT * FROM credentials_eudi")
    fun getAllWithPresentation(): List<CredentialWithPresentations>

    @Query("SELECT * FROM credentials_eudi WHERE raw_jwt_vc=(:rawJwtVc) LIMIT 1")
    fun getById(rawJwtVc: String): CredentialEntity?

    @Query("SELECT * FROM credentials_eudi WHERE type_last_position=(:internalName)")
    fun getByInternalName(internalName: String): List<CredentialEntity>

    @Transaction
    @Query("SELECT * FROM credentials_eudi WHERE raw_jwt_vc=(:rawJwtVc)")
    fun getByIdWithCredentialsStrings(rawJwtVc: String): CredentialWithCredentialStrings?

    @Transaction
    @Query("SELECT * FROM credentials_eudi WHERE raw_jwt_vc=(:rawJwtVc)")
    fun getByIdWithPresentations(rawJwtVc: String): CredentialWithPresentations?

    @Insert(onConflict = OnConflictStrategy.REPLACE)
    fun insert(credentialEntity: CredentialEntity): Long

    @Insert(onConflict = OnConflictStrategy.REPLACE)
    fun insertAll(credentialsDbEudiList: List<CredentialEntity>)

    @Update
    fun update(credentialEntity: CredentialEntity)

    @Delete
    fun delete(credentialEntity: CredentialEntity)
}