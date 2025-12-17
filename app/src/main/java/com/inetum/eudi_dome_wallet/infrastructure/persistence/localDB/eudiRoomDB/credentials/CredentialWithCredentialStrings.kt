package com.inetum.eudi_dome_wallet.infrastructure.persistence.localDB.eudiRoomDB.credentials

import androidx.room.Embedded
import androidx.room.Relation

data class CredentialWithCredentialStrings(
    @Embedded val credentialEntity: CredentialEntity,
    @Relation(
        parentColumn = "type_last_position",
        entityColumn = "key_type_last_position"
    )
    val credentialStringsEntityList: List<CredentialStringsEntity>
)
