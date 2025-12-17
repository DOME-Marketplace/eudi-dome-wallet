package com.inetum.eudi_dome_wallet.ui.eudi

import com.inetum.eudi_dome_wallet.ui.eudi.keys.KeyService
import com.inetum.eudi_dome_wallet.ui.eudi.models.EnumClass
import com.inetum.eudi_dome_wallet.ui.eudi.services.jwt.JwtService
import com.nimbusds.jose.shaded.gson.JsonElement
import java.security.KeyPair

class EudiClass {
    private var algorithmType: EnumClass.AlgorithmType = EnumClass.AlgorithmType.ES_256
    private var keyPair: KeyPair

    private var jwkPrivateKeyJsonString: String

    private var jwkPublicKeyJsonString: String
    private lateinit var did: String

    private lateinit var naturalPersonDidDocument: JsonElement


    constructor() {

        keyPair = KeyService.generateKeypair(algorithmType)

        if (keyPair.private == null)
            throw NullPointerException("privateKey is null")
        jwkPrivateKeyJsonString =
            KeyService.getPrivateKeyJsonStringFromKeyPair(algorithmType, keyPair)
        jwkPublicKeyJsonString =
            KeyService.getPublicKeyJsonStringFromKeyPair(algorithmType, keyPair)
    }

    constructor(jwkPrivateKeyJsonString: String, did: String) {

        keyPair = KeyService.generateKeyPairFromJWKJsonString(jwkPrivateKeyJsonString)

        if (keyPair.private == null)
            throw NullPointerException("privateKey is null")

        this.jwkPrivateKeyJsonString =
            KeyService.getPrivateKeyJsonStringFromKeyPair(algorithmType, keyPair)

        jwkPublicKeyJsonString =
            KeyService.getPublicKeyJsonStringFromKeyPair(algorithmType, keyPair)
        this.did = did
    }

    fun getKeyPair(): KeyPair {
        return keyPair
    }

    fun getPrivateKeyJsonStringFromKeyPair(): String {
        return KeyService.getPrivateKeyJsonStringFromKeyPair(algorithmType, keyPair)
    }

    fun getPublicKeyJsonStringFromKeyPair(): String {
        return KeyService.getPublicKeyJsonStringFromKeyPair(algorithmType, keyPair)
    }

    fun getDid(): String {
        return did
    }

    fun setDid(did: String) {
        this.did = did
    }

    fun getDidDocument(): JsonElement {
        return naturalPersonDidDocument
    }

    fun getSignedJWT(headerParams: Map<String, Any>, payloadParams: Map<String, Any>): String {
        val privateKeyJwkJsonString = getPrivateKeyJsonStringFromKeyPair()
        val jwtSigned = JwtService.getSignedJWT(
            headerParams,
            payloadParams,
            algorithmType,
            privateKeyJwkJsonString
        )
        return jwtSigned
    }

    fun getAlgorithmType(): EnumClass.AlgorithmType {
        return algorithmType
    }

}