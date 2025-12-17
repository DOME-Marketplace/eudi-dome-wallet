package com.inetum.eudi_dome_wallet.core.models.eudi.credentials

import java.io.Serializable

data class DiscoveryEndpointsCredentialSupported(
    var format: String,
    var types: List<String>,
    var display: List<DiscoveryEndpointsCredentialSupportedDisplay>
) : Serializable

