package com.inetum.eudi_dome_wallet.core.models.eudi.presentations

import java.io.Serializable

data class VerificationOfferEudi(
    val verificationEndpoint: String
) : Serializable
