package com.inetum.eudi_dome_wallet.core.models.eudi.presentations

import java.io.Serializable

data class VerificationOffer(
    val verificationEndpoint: String,
    val state: String
) : Serializable
