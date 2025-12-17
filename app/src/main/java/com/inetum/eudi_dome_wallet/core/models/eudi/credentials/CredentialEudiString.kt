package com.inetum.eudi_dome_wallet.core.models.eudi.credentials

import java.io.Serializable

data class CredentialEudiString(
    var keyTypeLastPosition: String,
    var locale: String,
    var keyPretty: String
) : Serializable