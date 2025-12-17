package com.inetum.eudi_dome_wallet.ui.eudi.keys

import com.inetum.eudi_dome_wallet.ui.eudi.models.EnumClass
import com.nimbusds.jose.jwk.Curve
import com.nimbusds.jose.jwk.ECKey
import com.nimbusds.jose.jwk.JWKSet
import com.nimbusds.jose.shaded.gson.Gson
import com.nimbusds.jose.shaded.gson.JsonArray
import com.nimbusds.jose.shaded.gson.JsonElement
import com.nimbusds.jose.shaded.gson.JsonObject
import org.bouncycastle.jce.provider.BouncyCastleProvider
import java.security.KeyPair
import java.security.KeyPairGenerator
import java.security.SecureRandom
import java.security.Security
import java.security.interfaces.ECPrivateKey
import java.security.interfaces.ECPublicKey

object KeyService {

    init {
        Security.removeProvider(BouncyCastleProvider.PROVIDER_NAME)
        Security.insertProviderAt(BouncyCastleProvider(), 1)
    }

    fun generateKeypair(algorithmType: EnumClass.AlgorithmType): KeyPair {
        val provider = BouncyCastleProvider.PROVIDER_NAME
        val keyPairGenerator = KeyPairGenerator.getInstance(algorithmType.algorithm, provider)

        val curve = Curve.parse(algorithmType.curveNameNimbusds)
        keyPairGenerator.initialize(curve.toECParameterSpec(), SecureRandom())
        val keyPair = keyPairGenerator.generateKeyPair()
            ?: throw NullPointerException("Error generate KeyPair")

        return keyPair
    }

    fun generateKeyPairFromJWKJsonString(jwkPrivateKeyJsonString: String): KeyPair {
        val jwkSet = getValidJwkSet(jwkPrivateKeyJsonString)
        val privateJWK = jwkSet.keys[0]
        val ecKey = privateJWK as ECKey
        val publicKey = ecKey.toECPublicKey()
        val privateKey = ecKey.toECPrivateKey()

        val keyPair = KeyPair(publicKey, privateKey)
        return keyPair
    }

    fun generateKeypairAndReturnJWKSetJsonString(algorithmType: EnumClass.AlgorithmType): String {

        val provider = "BC"
        val keyPairGenerator = KeyPairGenerator.getInstance(algorithmType.algorithm, provider)
        val curve = Curve.parse(algorithmType.curveNameNimbusds)
        keyPairGenerator.initialize(curve.toECParameterSpec(), SecureRandom())
        val keyPair = keyPairGenerator.generateKeyPair()
            ?: throw NullPointerException("Error generate KeyPair")

        val privateKeyJwk = getPrivateKeyFromKeyPair(algorithmType, keyPair)
        val publicKeyJwk = getPublicKeyFromKeyPair(algorithmType, keyPair)

        val jwkSet = JWKSet(listOf(privateKeyJwk, publicKeyJwk))

        val jwkSetString: String = Gson().toJson(jwkSet.toJSONObject(false))
        return jwkSetString
    }

    fun getPrivateKeyJsonStringFromKeyPair(
        algorithmType: EnumClass.AlgorithmType,
        keyPair: KeyPair
    ): String {

        val privateKeyJwk = getPrivateKeyFromKeyPair(algorithmType, keyPair)
        val jwtString: String = Gson().toJson(privateKeyJwk.toJSONObject())

        return jwtString

        val jwkSet = JWKSet(privateKeyJwk)

        val jwtSetString: String = Gson().toJson(jwkSet.toJSONObject(false))
        return jwtSetString
    }

    fun getPublicKeyJsonStringFromKeyPair(
        algorithmType: EnumClass.AlgorithmType,
        keyPair: KeyPair
    ): String {

        val publicKeyJwk = getPublicKeyFromKeyPair(algorithmType, keyPair)
        val jwtString: String = Gson().toJson(publicKeyJwk.toJSONObject())

        return jwtString

        val jwkSet = JWKSet(publicKeyJwk)

        val jwtSetString: String = Gson().toJson(jwkSet.toJSONObject(false))
        return jwtSetString
    }

    private fun getPrivateKeyFromKeyPair(
        algorithmType: EnumClass.AlgorithmType,
        keyPair: KeyPair
    ): ECKey {
        val curve = Curve.parse(algorithmType.curveNameNimbusds)
        return ECKey.Builder(curve, keyPair.public as ECPublicKey)
            .privateKey(keyPair.private as ECPrivateKey)
            .build()
    }

    private fun getPublicKeyFromKeyPair(
        algorithmType: EnumClass.AlgorithmType,
        keyPair: KeyPair
    ): ECKey {

        val curve = Curve.parse(algorithmType.curveNameNimbusds)
        return ECKey.Builder(curve, keyPair.public as ECPublicKey)
            .build()
    }

    /**
     * Parses a JWK (JSON Web Key) Set from a JSON string.
     *
     * This function attempts to convert the provided `jwkSetString` into a `JWKSet` object,
     * handling cases where the structure of the JSON is not in the expected format.
     * If the JSON does not have a "keys" array, it wraps the single key object in an array
     * and constructs a new JSON structure that conforms to the required format for `JWKSet.parse`.
     *
     * @param jwkSetString A JSON string representing the JWK Set. The string must follow the
     *                     general format:
     *                     `{"keys":[{"kty":"key_type","..."}]}`
     *                     If the "keys" field is missing, it will be added dynamically.
     *
     * @return A `JWKSet` object parsed from the input string. If parsing fails, the function
     *         throws a `RuntimeException` with the relevant error.
     *
     * @throws RuntimeException If the input string cannot be parsed as a valid JSON object
     *                          or if the JSON structure is invalid.
     */
    private fun getValidJwkSet(jwkSetString: String): JWKSet {
        val json = try {
            val gson = Gson()
            gson.fromJson(jwkSetString, JsonElement::class.java).asJsonObject
        } catch (e: Exception) {
            throw RuntimeException("jwkSetString json error", e)
        }

        val set = json.get("keys")
        val jwkSet = if (set == null) {
            val jsonArray = JsonArray().apply {
                add(json)
            }

            val newSet = JsonObject().apply {
                add("keys", jsonArray)
            }
            JWKSet.parse(newSet.toString())
        } else {
            JWKSet.parse(set.toString())
        }

        return jwkSet
    }
}