package com.inetum.eudi_dome_wallet.core.models.eudi.presentations

import java.io.Serializable

data class PresentationTokenRequestPresentationDefinitionInputDescriptorsConstraintsFieldFilter(
    var type: String,
    var contains: PresentationTokenRequestPresentationDefinitionInputDescriptorsConstraintsFieldFilterContains
) : Serializable