package com.inetum.eudi_dome_wallet.infrastructure.persistence.localDB.eudiRoomDB

import androidx.room.Dao
import androidx.room.Delete
import androidx.room.Insert
import androidx.room.OnConflictStrategy
import androidx.room.Query
import androidx.room.Update

@Dao
interface PresentationDbCredentialDbCrossRefDAO {
    @Query("SELECT * FROM presentation_credential_cross_ref")
    fun getAll(): List<PresentationDbCredentialDbCrossRefEntity>

    @Query("SELECT * FROM presentation_credential_cross_ref WHERE presentation_jti=(:presentation_jti) AND credential_raw_jwt_vc=(:credential_raw_jwt_vc) LIMIT 1")
    fun getByIDs(presentation_jti: String, credential_raw_jwt_vc: String): PresentationDbCredentialDbCrossRefEntity?

    @Insert(onConflict = OnConflictStrategy.IGNORE)
    fun insert(presentationDbCredentialDbCrossRefEntity: PresentationDbCredentialDbCrossRefEntity): Long

    @Insert(onConflict = OnConflictStrategy.IGNORE)
    fun insertAll(presentationDbCredentialDbCrossRefEntity: List<PresentationDbCredentialDbCrossRefEntity>)

    @Update(onConflict = OnConflictStrategy.IGNORE)
    fun update(presentationDbCredentialDbCrossRefEntity: PresentationDbCredentialDbCrossRefEntity)

    @Delete
    fun delete(presentationDbCredentialDbCrossRefEntity: PresentationDbCredentialDbCrossRefEntity)
}