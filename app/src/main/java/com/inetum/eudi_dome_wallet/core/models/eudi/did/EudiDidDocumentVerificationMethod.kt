package com.inetum.eudi_dome_wallet.core.models.eudi.did

import java.io.Serializable

class EudiDidDocumentVerificationMethod(
    val id: String,
    val type: String,
    val controller: String,
    val publicKeyJwk: String
) : Serializable