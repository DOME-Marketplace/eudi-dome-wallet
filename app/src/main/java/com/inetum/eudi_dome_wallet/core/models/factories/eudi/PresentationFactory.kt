package com.inetum.eudi_dome_wallet.core.models.factories.eudi

import com.inetum.eudi_dome_wallet.core.models.eudi.presentations.PresentationEudi
import com.inetum.eudi_dome_wallet.core.models.eudi.presentations.PresentationTokenRequestEudi
import com.inetum.eudi_dome_wallet.core.models.eudi.presentations.VerifiablePresentationEudi
import com.inetum.eudi_dome_wallet.manager.IoCManager
import com.inetum.utils.getValueAs

/**
 * Factory class responsible for creating and initializing instances of [com.inetum.eudi_dome_wallet.core.models.eudi.presentations.Presentation].
 *
 * The factory ensures that the 'Presentation' object is initialized correctly, it is also responsible for creating
 */
object PresentationFactory {
    suspend fun createPresentationFromJwt(
        presentationJwt: String,
        presentationTokenRequestJwt: String
    ): PresentationEudi {

        val jwtDecoded = IoCManager.getJwtInputAdapter().getDecodeJWT(presentationJwt)

        val jwtPayloadMap = jwtDecoded.getValueAs<Map<*, *>>("payload")

        val presentationTokenRequest =
            PresentationTokenRequestFactory.createPresentationFromJwt(presentationTokenRequestJwt)

        return createPresentationFromMap(jwtPayloadMap, presentationJwt, presentationTokenRequest)
    }

    fun createPresentationFromMap(
        presentationMap: Map<*, *>,
        presentationJwt: String,
        presentationTokenRequest: PresentationTokenRequestEudi
    ): PresentationEudi {
        val vpMap = presentationMap.getValueAs<Map<String, *>>("vp")
        val vp = VerifiablePresentationEudi(
            context = vpMap.getValueAs<List<String>>("@context"),
            id = vpMap.getValueAs<String>("id"),
            type = vpMap.getValueAs<List<String>>("type"),
            holder = vpMap.getValueAs<String>("holder"),

            verifiableCredential = arrayListOf()
        )

        val incompletePresentation = PresentationEudi(
            rawJwt = "",
            rawJwtRequest = presentationTokenRequest.rawJwt,
            iss = presentationMap.getValueAs<String>("iss"),
            aud = presentationMap.getValueAs<String>("aud"),
            sub = presentationMap.getValueAs<String>("sub"),
            iat = presentationMap.getValueAs<Long>("iat"),
            nbf = presentationMap.getValueAs<Long>("nbf"),
            exp = presentationMap.getValueAs<Long>("exp"),
            nonce = presentationMap.getValueAs<String>("nonce"),
            jti = presentationMap.getValueAs<String>("jti"),
            vp = vp
        )


        return getPresentation(
            incompletePresentation,
            presentationJwt
        )
    }
    private fun getPresentation(
        incompletePresentation: PresentationEudi,
        presentationJwt: String
    ): PresentationEudi {

        incompletePresentation.apply {
            rawJwt = presentationJwt
        }

        return incompletePresentation
    }
}