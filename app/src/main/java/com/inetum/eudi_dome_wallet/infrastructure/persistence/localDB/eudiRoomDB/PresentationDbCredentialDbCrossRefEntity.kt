package com.inetum.eudi_dome_wallet.infrastructure.persistence.localDB.eudiRoomDB

import androidx.room.ColumnInfo
import androidx.room.Entity
import androidx.room.ForeignKey
import com.inetum.eudi_dome_wallet.infrastructure.persistence.localDB.eudiRoomDB.credentials.CredentialEntity
import com.inetum.eudi_dome_wallet.infrastructure.persistence.localDB.eudiRoomDB.presentations.PresentationEntityEudi


@Entity(tableName = "presentation_credential_cross_ref",
    primaryKeys = ["presentation_jti", "credential_raw_jwt_vc"],
    foreignKeys = [
        ForeignKey(entity = PresentationEntityEudi::class,
            parentColumns = ["jti"],
            childColumns = ["presentation_jti"],
            onDelete = ForeignKey.CASCADE),
        ForeignKey(entity = CredentialEntity::class,
            parentColumns = ["raw_jwt_vc"],
            childColumns = ["credential_raw_jwt_vc"],
            onDelete = ForeignKey.CASCADE)
    ])
data class PresentationDbCredentialDbCrossRefEntity(
    @ColumnInfo(name = "presentation_jti")
    var presentation_jti: String,
    @ColumnInfo( name = "credential_raw_jwt_vc")
    var credential_raw_jwt_vc: String
)