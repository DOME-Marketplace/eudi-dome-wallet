package com.inetum.eudi_dome_wallet.core.models.eudi.presentations

import com.inetum.eudi_dome_wallet.core.models.eudi.credentials.EudiCredential
import java.io.Serializable

data class VerifiablePresentationEudi(
    val context: List<String>,
    val id: String,
    val type: List<String>,
    val holder: String,

    var verifiableCredential: List<EudiCredential>
) : Serializable
