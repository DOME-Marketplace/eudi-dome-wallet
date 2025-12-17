package com.inetum.eudi_dome_wallet.core.mappers.eudi

import com.inetum.eudi_dome_wallet.core.models.eudi.presentations.PresentationEudi
import com.inetum.eudi_dome_wallet.core.models.factories.eudi.PresentationFactory
import com.inetum.eudi_dome_wallet.infrastructure.persistence.localDB.eudiRoomDB.presentations.PresentationEntityEudi

object EudiPresentationMapper {
    suspend fun PresentationEntityEudi.toCoreWithFactory(): PresentationEudi {
        val corePresentation = PresentationFactory.createPresentationFromJwt(
            raw_jwt_presentation,
            raw_jwt_presentation_request
        )

        return corePresentation
    }
    fun PresentationEudi.toDbRoom(): PresentationEntityEudi = PresentationEntityEudi(
        jti = jti,
        raw_jwt_presentation = rawJwt,
        raw_jwt_presentation_request = rawJwtRequest,
        id_presentation_definition = vp.id,
        expiration_date = exp,
        issued_date = iat,
        not_before_date = nbf,
        aud_did = aud,
        issuer_did = iss
    )
}