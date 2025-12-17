package com.inetum.eudi_dome_wallet.infrastructure.persistence.localDB.eudiRoomDB.presentations

import androidx.room.Embedded
import androidx.room.Junction
import androidx.room.Relation
import com.inetum.eudi_dome_wallet.infrastructure.persistence.localDB.eudiRoomDB.PresentationDbCredentialDbCrossRefEntity
import com.inetum.eudi_dome_wallet.infrastructure.persistence.localDB.eudiRoomDB.credentials.CredentialEntity
import java.io.Serializable

data class PresentationWithCredentials(
    @Embedded val presentationEntity: PresentationEntityEudi,
    @Relation(
        parentColumn = "jti",
        entityColumn = "raw_jwt_vc",
        associateBy = Junction(
            value = PresentationDbCredentialDbCrossRefEntity::class,
            parentColumn = "presentation_jti",
            entityColumn = "credential_raw_jwt_vc"
        )
    )
    val credentialEntityList: List<CredentialEntity>
) : Serializable
