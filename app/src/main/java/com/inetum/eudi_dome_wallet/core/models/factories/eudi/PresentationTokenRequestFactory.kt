package com.inetum.eudi_dome_wallet.core.models.factories.eudi

import com.inetum.eudi_dome_wallet.core.models.eudi.presentations.PresentationTokenRequest
import com.inetum.eudi_dome_wallet.core.models.eudi.presentations.PresentationTokenRequestEudi
import com.inetum.eudi_dome_wallet.manager.IoCManager
import com.inetum.utils.createObjectFromMapRecursivelyHelper
import com.inetum.utils.getValueAs

/**
 * Factory class responsible for creating and initializing instances of [PresentationTokenRequest].
 *
 * The factory ensures that the 'PresentationTokenRequest' object is initialized correctly, it is also responsible for creating
 */
object PresentationTokenRequestFactory {
    suspend fun createPresentationFromJwt(presentationTokenRequestJwt: String): PresentationTokenRequestEudi {

        val jwtDecoded = IoCManager.getJwtInputAdapter().getDecodeJWT(presentationTokenRequestJwt)

        val jwtPayloadMap = jwtDecoded.getValueAs<Map<*, *>>("payload")

        return createPresentationFromMap(jwtPayloadMap, presentationTokenRequestJwt)
    }

    fun createPresentationFromMap(
        presentationMap: Map<*, *>,
        presentationJwt: String
    ): PresentationTokenRequestEudi {

        val map = presentationMap.toMutableMap()
        map["raw_jwt"] = presentationJwt

        val keysMapping: Map<String, (Map<*, *>) -> Any?> = mapOf(
            "optional" to { (it["optional"] as? Boolean) ?: false },
            "redirectUri" to {
                it["response_uri"] ?: it["redirect_uri"] ?: ""
            }
        )

        val incompletePresentation = map.createObjectFromMapRecursivelyHelper(
            PresentationTokenRequestEudi::class,
            keysMapping = keysMapping
        )
        return getPresentation(
            incompletePresentation,
            presentationJwt
        )
    }

    private fun getPresentation(
        incompletePresentation: PresentationTokenRequestEudi,
        presentationJwt: String
    ): PresentationTokenRequestEudi {

        incompletePresentation.apply {
            rawJwt = presentationJwt
        }

        return incompletePresentation
    }
}