package com.inetum.eudi_dome_wallet.infrastructure.adapters.inputs

import com.inetum.eudi_dome_wallet.core.ports.inputs.JwtUseCase

class JwtInputAdapter(private val jwtUseCase: JwtUseCase) {
    suspend fun getSignedJWT(
        headerParams: Map<String, Any>,
        payloadParams: Map<String, Any>,
        algorithmType: String,
        jwkPrivateKeyJsonString: String
    ): String {
        return jwtUseCase.getSignedJWT(
            headerParams,
            payloadParams,
            algorithmType,
            jwkPrivateKeyJsonString
        )
    }

    /**
     * Decodes a signed JSON Web Token (JWT) and extracts its header, payload, and signature.
     *
     * @param jwt The JWT string to decode. It must be a valid JWT in its serialized compact form.
     *
     * @return A map containing the decoded JWT components:
     * - `"header"`: A `Map<String, Any>` representation of the JWT header.
     * - `"payload"`: A `Map<String, Any>` representation of the JWT payload.
     * - `"signature"`: The JWT signature as a `Base64URL` object.
     *
     * @throws java.text.ParseException If the JWT string is not in a valid format or cannot be parsed.
     */
    suspend fun getDecodeJWT(jwt: String): Map<String, Any> {
        return jwtUseCase.getDecodeJWT(jwt)
    }
}