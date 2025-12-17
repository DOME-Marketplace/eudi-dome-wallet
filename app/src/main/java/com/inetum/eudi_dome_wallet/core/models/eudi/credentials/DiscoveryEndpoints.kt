package com.inetum.eudi_dome_wallet.core.models.eudi.credentials

import java.io.Serializable

data class DiscoveryEndpoints(
    var authorizationServer: String,
    var credentialIssuer: String?,
    var credentialEndpoint: String?,
    var deferredCredentialEndpoint: String?,
    var credentialsSupported: List<DiscoveryEndpointsCredentialSupported>?
) : Serializable
