package com.inetum.eudi_dome_wallet.core.models.eudi.presentations

import java.io.Serializable

data class PresentationTokenRequestPresentationDefinitionInputDescriptorsConstraintsField(
    var path: List<String>,
    var optional: Boolean,
    var filter: PresentationTokenRequestPresentationDefinitionInputDescriptorsConstraintsFieldFilter
) : Serializable