package com.inetum.eudi_dome_wallet.infrastructure.persistence.localDB.eudiRoomDB.credentials

import androidx.room.Embedded
import androidx.room.Junction
import androidx.room.Relation
import com.inetum.eudi_dome_wallet.infrastructure.persistence.localDB.eudiRoomDB.PresentationDbCredentialDbCrossRefEntity
import com.inetum.eudi_dome_wallet.infrastructure.persistence.localDB.eudiRoomDB.presentations.PresentationEntityEudi
import java.io.Serializable
data class CredentialWithPresentations(
    @Embedded val credentialEntity: CredentialEntity,
    @Relation(
        parentColumn = "raw_jwt_vc",
        entityColumn = "jti",
        associateBy = Junction(
            value = PresentationDbCredentialDbCrossRefEntity::class,
            parentColumn = "credential_raw_jwt_vc",
            entityColumn = "presentation_jti"
        )
    )
    val presentationEntityList: List<PresentationEntityEudi>
) : Serializable