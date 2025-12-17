package com.inetum.eudi_dome_wallet.core.models.eudi.presentations

import java.io.Serializable

data class PresentationTokenRequestPresentationDefinitionFormat(
    var jwtVc: Map<*, *>,
    var jwtVp: Map<*, *>
) : Serializable