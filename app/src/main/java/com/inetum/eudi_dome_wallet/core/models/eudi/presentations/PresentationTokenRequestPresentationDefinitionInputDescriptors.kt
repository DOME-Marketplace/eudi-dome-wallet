package com.inetum.eudi_dome_wallet.core.models.eudi.presentations

import java.io.Serializable

data class PresentationTokenRequestPresentationDefinitionInputDescriptors(
    var id: String,
    var format: Map<*, *>,
    var constraints: PresentationTokenRequestPresentationDefinitionInputDescriptorsConstraints
) : Serializable