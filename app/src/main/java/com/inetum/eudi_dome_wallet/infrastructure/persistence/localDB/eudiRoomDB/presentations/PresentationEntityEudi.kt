package com.inetum.eudi_dome_wallet.infrastructure.persistence.localDB.eudiRoomDB.presentations

import androidx.room.ColumnInfo
import androidx.room.Entity
import androidx.room.PrimaryKey
import java.io.Serializable

@Entity(tableName = "presentations_eudi")
data class PresentationEntityEudi(
    @PrimaryKey
    @ColumnInfo(index = true, name = "jti")


    var jti: String,
    var raw_jwt_presentation: String,
    var raw_jwt_presentation_request: String,
    var id_presentation_definition: String,
    var expiration_date: Long,
    var issued_date: Long,
    var not_before_date: Long,
    var aud_did: String,
    var issuer_did: String
) : Serializable
