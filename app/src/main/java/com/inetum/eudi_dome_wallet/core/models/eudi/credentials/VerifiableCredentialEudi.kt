package com.inetum.eudi_dome_wallet.core.models.eudi.credentials

import com.inetum.eudi_dome_wallet.core.models.eudi.presentations.PresentationEudi
import java.io.Serializable

data class VerifiableCredentialEudi(
    var context: List<String>,
    var id: String,
    var type: List<String>,
    var description: String,
    var credentialSubject: VerifiableCredentialEudiCredentialSubject,
    var issuer: IssuerEntityInfoEudi,
    var validFrom: String,
    var validUntil: String,

    var presentationsList: List<PresentationEudi>
) : Serializable
