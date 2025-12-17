package com.inetum.eudi_dome_wallet.core.models.eudi.presentations

import java.io.Serializable

data class PresentationTokenRequestEudi(
    var rawJwt: String,
    var iss: String,
    var aud: String,
    var exp: Long,
    var responseType: String,
    var responseMode: String,
    var clientId: String,
    var redirectUri: String,
    var scope: String,
    var nonce: String,
) : Serializable
