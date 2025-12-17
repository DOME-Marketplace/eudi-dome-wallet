package com.inetum.eudi_dome_wallet.core.mappers.eudi

import com.inetum.eudi_dome_wallet.core.models.eudi.credentials.IssuerEntityInfoEudi
import com.inetum.eudi_dome_wallet.core.models.factories.eudi.CredentialFactory
import com.inetum.eudi_dome_wallet.infrastructure.persistence.localDB.eudiRoomDB.credentials.CredentialEntity
import com.inetum.utils.toDateIso8601String
import com.inetum.utils.toEpochDateTimeLong
import com.inetum.utils.toJsonString
import com.inetum.utils.toObject
import com.inetum.eudi_dome_wallet.core.models.eudi.credentials.EudiCredential as CoreEudiCredential
import com.inetum.eudi_dome_wallet.core.models.eudi.credentials.VerifiableCredentialEudiCredentialSchema as CoreVerifiableCredentialEudiCredentialSchema
import com.inetum.eudi_dome_wallet.core.models.eudi.credentials.VerifiableCredentialEudi as CoreVerifiableCredentialEudi
import com.inetum.eudi_dome_wallet.core.models.eudi.credentials.VerifiableCredentialEudiCredentialSubject as CoreVerifiableCredentialEudiCredentialSubject
object EudiCredentialMapper {
    fun CredentialEntity.toCore_OLD(): CoreEudiCredential {
        val verifiableCredentialEudiCredentialSubject =
            CoreVerifiableCredentialEudiCredentialSubject(
                id = "",
                credentialObjectKey = key,
                credentialObjectPrettyKey = key_pretty,
                credentialObjectPrettyKeyList = arrayListOf(),
                credentialObject = value.toObject<Map<*, *>>()
            )
        val issuer = IssuerEntityInfoEudi(
            id = "",
            organizationIdentifier = "",
            organization = "",
            country = "",
            commonName = "",
            emailAddress = "",
            serialNumber = ""
        )
        CoreVerifiableCredentialEudiCredentialSchema(
            id = "",
            type = ""
        )
        val coreVerifiableCredentialEudi = CoreVerifiableCredentialEudi(
            context = arrayListOf(),
            id = "",
            type = arrayListOf(type_last_position),
            description = "",
            credentialSubject = verifiableCredentialEudiCredentialSubject,
            issuer = issuer,
            validFrom = not_before_date.toDateIso8601String(),
            validUntil = expiration_date.toDateIso8601String(),
            presentationsList = arrayListOf()
        )
        return CoreEudiCredential(
            rawJwt = raw_jwt_vc,
            sub = "",
            iss = "",
            nbf = 0L,
            exp = 0L,
            iat = 0L,
            vc = coreVerifiableCredentialEudi,
            favorite = favorite,
            multivalued = multivalued
        )
    }

    suspend fun CredentialEntity.toCoreWithFactory(): CoreEudiCredential {
        val coreCredentialEudi = CredentialFactory.createCredentialFromJwt(raw_jwt_vc)

        return coreCredentialEudi
    }

    fun CoreEudiCredential.toDbRoom(): CredentialEntity = CredentialEntity(
        raw_jwt_vc = rawJwt,
        key = vc.credentialSubject.credentialObjectKey,
        key_pretty = vc.credentialSubject.credentialObjectPrettyKey,
        value = vc.credentialSubject.credentialObject.toJsonString(),
        type_last_position = vc.type.first(),
        expiration_date = vc.validUntil.toEpochDateTimeLong(),
        issued_date = vc.validFrom.toEpochDateTimeLong(),
        not_before_date = vc.validFrom.toEpochDateTimeLong(),
        issuer_did = vc.issuer.id,
        favorite = favorite,
        multivalued = false
    )
}
