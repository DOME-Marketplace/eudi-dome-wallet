package com.inetum.eudi_dome_wallet.ui.eudi.services.jwt

import com.inetum.eudi_dome_wallet.ui.eudi.keys.KeyService
import com.inetum.eudi_dome_wallet.ui.eudi.models.EnumClass
import com.inetum.utils.toMap
import com.nimbusds.jose.JWSAlgorithm
import com.nimbusds.jose.JWSHeader
import com.nimbusds.jose.JWSVerifier
import com.nimbusds.jose.crypto.ECDSASigner
import com.nimbusds.jose.crypto.ECDSAVerifier
import com.nimbusds.jose.crypto.bc.BouncyCastleProviderSingleton
import com.nimbusds.jose.util.Base64URL
import com.nimbusds.jwt.JWTClaimsSet
import com.nimbusds.jwt.SignedJWT
import org.bouncycastle.jce.provider.BouncyCastleProvider
import java.nio.charset.StandardCharsets
import java.security.Security
import java.security.interfaces.ECPrivateKey
import java.security.interfaces.ECPublicKey
import java.util.Base64

object JwtService {

    private val TAG: String = "DW:${(this::class.java.simpleName ?: "Unknown class")}"

    init {
        Security.removeProvider(BouncyCastleProvider.PROVIDER_NAME)
        Security.insertProviderAt(BouncyCastleProvider(), 1)
    }

    /**
     * Generates a signed JSON Web Token (JWT) using the provided header and payload parameters, signing algorithm,
     * and a JWK private key in Json String format.
     *
     * ### Steps Performed:
     * 1. Parses the provided JWK JSON string to generate a key pair.
     * 2. Constructs a `JWSHeader` using the provided header parameters and the specified signing algorithm.
     * 3. Constructs a `JWTClaimsSet` using the provided payload parameters.
     * 4. Signs the JWT using the private key and the selected algorithm.
     * 5. Serializes the signed JWT to a string and returns it.
     *
     * @param headerParams A map of custom parameters to include in the JWT header. These are added to the standard header fields.
     * @param payloadParams A map of custom claims to include in the JWT payload. These represent the data or statements of the token.
     * @param algorithmType The algorithm type (e.g., ES256, ES384) specified in the `EnumClass.AlgorithmType`.
     *                      This determines the signing algorithm to use.
     * @param jwkPrivateKeyJsonString A JSON-formatted string representing the JWK private key used for signing the JWT.
     *
     * @return A signed JWT as a serialized string.
     *
     * @throws NullPointerException If the private key extracted from the JWK is null.
     * @throws IllegalArgumentException If the algorithm type is invalid or unsupported by the library.
     */
    fun getSignedJWT(
        headerParams: Map<String, Any>,
        payloadParams: Map<String, Any>,
        algorithmType: EnumClass.AlgorithmType,
        jwkPrivateKeyJsonString: String
    ): String {

        val keyPair = KeyService.generateKeyPairFromJWKJsonString(jwkPrivateKeyJsonString)

        if (keyPair.private == null)
            throw NullPointerException("privateKey is null")
        val jwsAlgorithm = JWSAlgorithm.parse(algorithmType.jwsAlgorithm)

        val header = JWSHeader.Builder(jwsAlgorithm)
            .customParams(headerParams)
            .build()
        val builder = JWTClaimsSet.Builder()

        payloadParams.forEach { (key, value) ->
            builder.claim(key, value)
        }

        val claimsSet = builder.build()

        val signedJWT = SignedJWT(header, claimsSet)
        val signer = ECDSASigner(keyPair.private as ECPrivateKey)
        signer.jcaContext.provider = BouncyCastleProviderSingleton.getInstance()
        signedJWT.sign(signer)

        return signedJWT.serialize()
    }

    /**
     * Decodes a signed JSON Web Token (JWT) and extracts its header, payload, and signature.
     *
     * ### Steps Performed:
     * 1. Parses the provided JWT string into a `SignedJWT` object.
     * 2. Extracts the header and converts it to a JSON object.
     * 3. Extracts the payload and converts it to a JSON object.
     * 4. Retrieves the JWT signature.
     * 5. Constructs a map containing the header, payload, and signature for easy access.
     *
     * @param jwt The JWT string to decode. It must be a valid JWT in its serialized compact form.
     *
     * @return A map containing the decoded JWT components:
     * - `"header"`: A `Map<String, Any>` representation of the JWT header.
     * - `"payload"`: A `Map<String, Any>` representation of the JWT payload.
     * - `"signature"`: The JWT signature as a `Base64URL` object.
     *
     * @throws ParseException If the JWT string is not in a valid format or cannot be parsed.
     */
    fun getDecodeJWT(jwt: String): Map<String, Any> {
        val signedJWT = SignedJWT.parse(jwt)

        val header = signedJWT.header.toJSONObject()
        val payload = signedJWT.payload.toJSONObject()
        val signature = signedJWT.signature

        val decodedJWT = mapOf(
            "header" to header,
            "payload" to payload,
            "signature" to signature
        )

        return decodedJWT
    }

    /**
     * Validates a signed JSON Web Token (JWT) against a public key provided as a JWK JSON string.
     *
     * ### Steps Performed:
     * 1. Parses the JWT string into a `SignedJWT` object.
     * 2. Extracts the public key from the provided JWK JSON string.
     * 3. Creates a `JWSVerifier` using the extracted public key.
     * 4. Verifies the JWT signature using the verifier and public key.
     * 5. Returns `true` if verification succeeds; otherwise, catches exceptions and returns `false`.
     *
     * @param jwt The JWT string to validate. It must be in the serialized compact format.
     * @param jwkPublicKeyJsonString A JSON-formatted string representing the JWK public key used to verify the JWT signature.
     *
     * @return `true` if the JWT signature is valid and matches the provided public key; `false` otherwise.
     *
     * @throws ParseException If the JWT string cannot be parsed into a `SignedJWT`.
     * @throws IllegalArgumentException If the public key provided in the JWK JSON is invalid.
     * @throws JOSEException If the signature verification process encounters an error.
     */
    fun validateJWT(jwt: String, jwkPublicKeyJsonString: String): Boolean {
        return try {
            val signedJWT = SignedJWT.parse(jwt)
            val keyPair = KeyService.generateKeyPairFromJWKJsonString(jwkPublicKeyJsonString)

            val verifier: JWSVerifier = ECDSAVerifier(keyPair.public as ECPublicKey)

            signedJWT.verify(verifier)

        } catch (e: java.lang.Exception) {
            println("[${TAG}]\t${(object {}.javaClass.enclosingMethod?.name ?: "Unknown function")}() ERROR: ${e.message}")
            false
        }
    }

    /**
     * Decodes a signed JSON Web Token (JWT) and extracts its header, payload, and signature.
     *
     * This method does not validate anything. It is necessary if you do not meet any of the fields established
     * in the jwt or internal fields already defined (for example, you use public keys in the jwk field instead
     * of the jwk itself as defined by the protocol).
     */
    fun getDecodeSignedJWTComplete(jwt: String): MutableMap<String, Any> {
        val parts = jwt.split(".")
        if (parts.size != 3) {
            throw IllegalArgumentException("This jwt is not in the proper format")
        }

        val header = String(Base64.getUrlDecoder().decode(parts[0]), StandardCharsets.UTF_8)

        val payload = String(Base64.getUrlDecoder().decode(parts[1]), StandardCharsets.UTF_8)

        val signature = String(Base64.getUrlDecoder().decode(parts[2]), StandardCharsets.UTF_8)

        val decodedJWT = mutableMapOf<String, Any>()
        decodedJWT["header"] = header.toMap()
        decodedJWT["payload"] = payload.toMap()
        decodedJWT["signature"] = signature

        return decodedJWT
    }

    /**
     * Validates a JWT signature without considering the header content.
     *
     * This method verifies the integrity of a JSON Web Token (JWT) by checking its signature using a provided
     * public key. It ensures that the JWT has not been tampered with and was signed using the expected algorithm.
     *
     * ## Implementation Details:
     * - The method extracts the **header**, **payload**, and **signature** from the JWT.
     * - It reconstructs the signed content (`header.payload`) to verify the signature.
     * - Since ECDSA signatures are stored in raw format, they are converted to DER format.
     * - The **JWSVerifier** (`ECDSAVerifier`) is used to validate the signature.
     * - The JWT header is not used in the verification process except for determining the algorithm type.
     *
     * ## References:
     * - Nimbus JOSE+JWT Library: [GitHub Repository](https://github.com/connect2id/nimbus-jose-jwt)
     *
     * @param jwt The JWT string to be validated.
     * @param jwkPublicKeyJsonString The public key used for verifying the signature.
     * @param algorithmType The algorithm type expected for the JWT signature verification.
     *
     * @return `true` if the signature is valid, `false` otherwise.
     *
     * @throws IllegalArgumentException If the JWT format is invalid.
     * @throws JOSEException If there is an issue with the signature verification process.
     */
    fun validateJWTWithoutConsideringHeader(
        jwt: String,
        jwkPublicKeyJsonString: String,
        algorithmType: EnumClass.AlgorithmType
    ): Boolean {
        return try {
            val parts = jwt.split(".")
            if (parts.size != 3) {
                throw IllegalArgumentException("This jwt is not in the proper format")
            }

            val keyPair = KeyService.generateKeyPairFromJWKJsonString(jwkPublicKeyJsonString)

            val publicKey = keyPair.public

            val signedContent = "${parts[0]}.${parts[1]}"
            val signatureBase64URL = Base64URL(parts[2])

            val verifier: JWSVerifier = ECDSAVerifier(publicKey as ECPublicKey)

            val algorithm = JWSAlgorithm.parse(algorithmType.jwsAlgorithm)
            val header = JWSHeader(algorithm)

            verifier.verify(header, signedContent.toByteArray(), signatureBase64URL)

        } catch (e: Exception) {
            println("[${TAG}]\t${(object {}.javaClass.enclosingMethod?.name ?: "Unknown function")}() ERROR: ${e.message}")
            false
        }
    }
}