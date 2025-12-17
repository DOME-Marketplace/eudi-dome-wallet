package com.inetum.eudi_dome_wallet.core.models.eudi

import com.inetum.eudi_dome_wallet.core.models.enums.AlgorithmType
import java.io.Serializable
import java.security.KeyPair

data class EudiClass(
    val algorithmType: AlgorithmType = AlgorithmType.ES_256,
    val keyPair: KeyPair,
    val privateKeyJsonString: String,
    val publicKeyJsonString: String,
    val did: String,
) : Serializable