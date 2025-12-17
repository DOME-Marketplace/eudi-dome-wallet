package com.inetum.eudi_dome_wallet.infrastructure.adapters.inputs

import com.inetum.eudi_dome_wallet.core.models.eudi.credentials.EudiCredential
import com.inetum.eudi_dome_wallet.core.models.eudi.presentations.PresentationEudi
import com.inetum.eudi_dome_wallet.core.models.eudi.presentations.PresentationTokenRequestEudi
import com.inetum.eudi_dome_wallet.core.ports.inputs.EudiNetworkUseCase

class EudiNetworkInputAdapter(private val eudiNetworkUseCase: EudiNetworkUseCase) {
    suspend fun getCredentialOffer(fullUrl: String): Map<String, *> {
        return eudiNetworkUseCase.getCredentialOffer(fullUrl)
    }
    suspend fun getOpenIDCredentialIssuer(baseUrl: String): Map<String, *> {
        return eudiNetworkUseCase.getOpenIDCredentialIssuer(baseUrl)
    }
    suspend fun getOpenIDConfiguration(baseUrl: String): Map<String, *> {
        return eudiNetworkUseCase.getOpenIDConfiguration(baseUrl)
    }
    suspend fun getCredentialRequest(
        credentialOfferMap: Map<String, *>,
        discovery1Map: Map<String, *>,
        preAuthorizedCodeUserPin: String
    ): List<EudiCredential> {
        return eudiNetworkUseCase.getCredentialRequest(
            credentialOfferMap,
            discovery1Map,
            preAuthorizedCodeUserPin
        )
    }
    suspend fun getVPAuthorizationRequest(baseUrl: String): String {
        return eudiNetworkUseCase.getVPAuthorizationRequest(baseUrl)
    }
    suspend fun getVPAuthorizationResponse(
        vpAuthorizationRequest: Map<*, *>,
        presentationTokenRequest: PresentationTokenRequestEudi
    ): PresentationEudi {
        return eudiNetworkUseCase.getVPAuthorizationResponse(
            vpAuthorizationRequest,
            presentationTokenRequest
        )
    }
}