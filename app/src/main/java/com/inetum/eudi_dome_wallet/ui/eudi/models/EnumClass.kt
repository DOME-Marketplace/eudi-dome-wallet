package com.inetum.eudi_dome_wallet.ui.eudi.models

object EnumClass {
    enum class AlgorithmType(val algorithm: String,
                             val curveNameNimbusds: String, val jwsAlgorithm: String
    ) {
        ES_256("EC", "P-256", "ES256"),
        ES_256_K("EC", "secp256k1", "ES256K");
    }
}