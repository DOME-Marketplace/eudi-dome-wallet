package com.inetum.eudi_dome_wallet.core.models.eudi.credentials

import java.io.Serializable

data class VerifiableCredentialEudiCredentialSchema(
    var id: String,
    var type: String
) : Serializable
