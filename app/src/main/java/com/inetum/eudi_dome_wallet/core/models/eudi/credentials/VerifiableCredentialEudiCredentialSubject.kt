package com.inetum.eudi_dome_wallet.core.models.eudi.credentials

import java.io.Serializable

data class VerifiableCredentialEudiCredentialSubject(
    var id: String,
    var credentialObjectKey: String,
    var credentialObjectPrettyKey: String,
    var credentialObjectPrettyKeyList: List<CredentialEudiString>,
    var credentialObject: Map<*, *>
) : Serializable {

    fun populateCredentialSubjectFromCredentialJwtDecodedPayloadMap(credentialJwtDecodedMap: Map<*, *>) {
        populateCredentialObjectFieldFromCredentialJwtDecodedMap(credentialJwtDecodedMap)
    }

    private fun populateCredentialObjectFieldFromCredentialJwtDecodedMap(credentialJwtDecodedMap: Map<*, *>) {
        val vc: Any? = credentialJwtDecodedMap["vc"]
        if (vc is Map<*, *>) {
            val cs: Any? = vc["credentialSubject"]
            if (cs is Map<*, *>) {
                credentialObject = cs
            } else {
                throw RuntimeException("Key 'credentialSubject' not exist into a Map")
            }
        } else {
            throw RuntimeException("Key 'vc' not exist into a Map")
        }
    }

}
