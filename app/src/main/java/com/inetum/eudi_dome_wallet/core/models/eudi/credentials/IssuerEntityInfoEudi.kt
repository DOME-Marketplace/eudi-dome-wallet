package com.inetum.eudi_dome_wallet.core.models.eudi.credentials

import java.io.Serializable

data class IssuerEntityInfoEudi(
    val id: String,
    val organizationIdentifier: String,
    val organization: String,
    val country: String,
    val commonName: String,
    val emailAddress: String,
    val serialNumber: String
) : Serializable



