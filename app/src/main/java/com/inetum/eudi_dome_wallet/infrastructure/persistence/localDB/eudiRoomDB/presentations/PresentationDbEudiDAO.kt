package com.inetum.eudi_dome_wallet.infrastructure.persistence.localDB.eudiRoomDB.presentations

import androidx.room.Dao
import androidx.room.Delete
import androidx.room.Insert
import androidx.room.OnConflictStrategy
import androidx.room.Query
import androidx.room.Transaction
import androidx.room.Update


@Dao
interface PresentationDbEudiDAO {
    @Query("SELECT * FROM presentations_eudi")
    fun getAll(): List<PresentationEntityEudi>

    @Transaction
    @Query("SELECT * FROM presentations_eudi")
    fun getAllWithCredentials(): List<PresentationWithCredentials>

    @Query("SELECT * FROM presentations_eudi WHERE jti=(:jti) LIMIT 1")
    fun getById(jti: String): PresentationEntityEudi?

    @Transaction
    @Query("SELECT * FROM presentations_eudi WHERE jti=(:jti)")
    fun getByIdWithCredentials(jti: String): PresentationWithCredentials?

    @Insert(onConflict = OnConflictStrategy.REPLACE)
    fun insert(presentationEntity: PresentationEntityEudi): Long

    @Insert(onConflict = OnConflictStrategy.REPLACE)
    fun insertAll(presentationsDbEudi: List<PresentationEntityEudi>)

    @Update
    fun update(presentationEntity: PresentationEntityEudi)

    @Delete
    fun delete(presentationEntity: PresentationEntityEudi)
}