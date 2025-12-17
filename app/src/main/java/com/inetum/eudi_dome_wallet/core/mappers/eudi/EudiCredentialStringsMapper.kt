package com.inetum.eudi_dome_wallet.core.mappers.eudi

import com.inetum.eudi_dome_wallet.core.models.eudi.credentials.CredentialEudiString
import com.inetum.eudi_dome_wallet.infrastructure.persistence.localDB.eudiRoomDB.credentials.CredentialStringsEntity
object EudiCredentialStringsMapper {

    fun CredentialStringsEntity.toCore(): CredentialEudiString = CredentialEudiString(
        keyTypeLastPosition = key_type_last_position,
        locale = locale,
        keyPretty = key_pretty
    )

    fun CredentialEudiString.toDbRoom(): CredentialStringsEntity = CredentialStringsEntity(
        key_type_last_position = keyTypeLastPosition,
        locale = locale,
        key_pretty = keyPretty
    )
}