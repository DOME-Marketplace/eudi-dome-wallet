package com.inetum.eudi_dome_wallet.core.models.eudi.presentations

import java.io.Serializable

data class Presentation(
    var rawJwt: String,
    var rawJwtRequest: String,
    var iss: String,
    var aud: String,
    var sub: String,
    var iat: Long,
    var nbf: Long,
    var exp: Long,
    var nonce: String,
    var jti: String,
    var vp: VerifiablePresentation
) : Serializable