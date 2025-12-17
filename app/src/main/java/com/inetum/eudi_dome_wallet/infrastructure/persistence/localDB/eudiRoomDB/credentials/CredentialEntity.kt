package com.inetum.eudi_dome_wallet.infrastructure.persistence.localDB.eudiRoomDB.credentials

import androidx.room.ColumnInfo
import androidx.room.Entity
import androidx.room.PrimaryKey
import java.io.Serializable

@Entity(
    tableName = "credentials_eudi",
)
data class CredentialEntity(
    @PrimaryKey
    @ColumnInfo(index = true, name = "raw_jwt_vc")
    var raw_jwt_vc: String,
    var key: String,
    var key_pretty: String,
    var value: String,
    var type_last_position: String,
    var expiration_date: Long,
    var issued_date: Long,
    var not_before_date: Long,
    var issuer_did: String,
    var favorite: Boolean,
    var multivalued: Boolean

): Serializable