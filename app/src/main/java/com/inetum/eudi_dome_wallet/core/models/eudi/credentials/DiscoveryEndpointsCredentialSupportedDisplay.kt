package com.inetum.eudi_dome_wallet.core.models.eudi.credentials

import java.io.Serializable

data class DiscoveryEndpointsCredentialSupportedDisplay(
    var name : String,
    var locale : String
) : Serializable

