package com.inetum.eudi_dome_wallet.core.ports.inputs

import com.inetum.eudi_dome_wallet.core.models.eudi.credentials.EudiCredential
import com.inetum.eudi_dome_wallet.core.models.eudi.presentations.PresentationEudi
import com.inetum.eudi_dome_wallet.core.models.eudi.presentations.PresentationTokenRequestEudi

interface EudiNetworkUseCase {
    suspend fun getCredentialOffer(fullUrl: String): Map<String, *>
    suspend fun getOpenIDCredentialIssuer(baseUrl: String): Map<String, *>
    suspend fun getOpenIDConfiguration(baseUrl: String): Map<String, *>
    suspend fun getCredentialRequest(credentialOfferMap: Map<String, *>, discovery1Map: Map<String, *>, preAuthorizedCodeUserPin: String): List<EudiCredential>
    suspend fun getVPAuthorizationRequest(baseUrl: String): String
    suspend fun getVPAuthorizationResponse(vpAuthorizationRequest: Map<*, *>, presentationTokenRequest: PresentationTokenRequestEudi) : PresentationEudi
}