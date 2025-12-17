package com.inetum.eudi_dome_wallet.core.models.eudi.did

import com.google.gson.annotations.SerializedName
import java.io.Serializable

data class EudiEntityDidDocument(
    @SerializedName("@context")
    val context: List<String>,
    val id: String,
    val controller: List<String>,
    val verificationMethod: List<EudiDidDocumentVerificationMethod>,
    val authentication: List<String>,
    val assertionMethod: List<String>,
    val capabilityInvocation: List<String>
) : Serializable
