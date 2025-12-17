package com.inetum.eudi_dome_wallet.infrastructure.persistence.localDB.eudiRoomDB.credentials

import androidx.room.Entity
import androidx.room.Index
import java.io.Serializable
@Entity(
    tableName = "credentials_eudi_strings",
    primaryKeys = ["key_type_last_position", "locale"],
    indices = [Index(value = ["key_type_last_position"])]
)
data class CredentialStringsEntity(
    var key_type_last_position: String,
    var locale: String,
    var key_pretty: String
) : Serializable
