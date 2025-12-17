package com.inetum.eudi_dome_wallet.infrastructure.persistence.localDB.eudiRoomDB

import androidx.room.Database
import androidx.room.RoomDatabase
import com.inetum.eudi_dome_wallet.infrastructure.persistence.localDB.eudiRoomDB.credentials.CredentialDbEudiDAO
import com.inetum.eudi_dome_wallet.infrastructure.persistence.localDB.eudiRoomDB.credentials.CredentialDbEudiStringsDAO
import com.inetum.eudi_dome_wallet.infrastructure.persistence.localDB.eudiRoomDB.credentials.CredentialEntity
import com.inetum.eudi_dome_wallet.infrastructure.persistence.localDB.eudiRoomDB.credentials.CredentialStringsEntity
import com.inetum.eudi_dome_wallet.infrastructure.persistence.localDB.eudiRoomDB.presentations.PresentationDbEudiDAO
import com.inetum.eudi_dome_wallet.infrastructure.persistence.localDB.eudiRoomDB.presentations.PresentationEntityEudi

@Database(
    entities = [
        CredentialEntity::class,
        CredentialStringsEntity::class,
        PresentationEntityEudi::class,
        PresentationDbCredentialDbCrossRefEntity::class
               ],
    version = 2,
    exportSchema = false
)
abstract class AppDatabaseEudi : RoomDatabase() {
    abstract fun credentialDbEudiDAO(): CredentialDbEudiDAO
    abstract fun credentialDBEudiStringsDAO(): CredentialDbEudiStringsDAO
    abstract fun presentationDbEudiDAO(): PresentationDbEudiDAO
    abstract fun presentationDbCredentialDbCrossRefDAO(): PresentationDbCredentialDbCrossRefDAO
}