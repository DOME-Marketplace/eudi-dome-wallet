package com.inetum.eudi_dome_wallet.core.models.eudi.credentials

import java.io.Serializable

data class EudiCredential(
    var iat: Long,
    var nbf: Long,
    var exp: Long,
    var iss: String,
    var sub: String,

    var vc: VerifiableCredentialEudi,
    var multivalued: Boolean,
    var rawJwt: String,

    var favorite: Boolean,

    ) : Serializable {

    /**
     * Initializes the object, setting the necessary field values.
     *
     * This function ensures that the object is properly initialized from the provided data,
     * setting the state and default values. If the object has already been initialized,
     * an [IllegalStateException] will be thrown to prevent incorrect re-initialization.
     *
     * The following values are set during initialization:
     * - `status`: Assigned the value `CredentialStatus.DOES_NOT_EXIST` if not already defined.
     * - `nbf`: If it is zero, it will be assigned the value of `iat`.
     * - `levelOfAssurance`: Obtained and converted via the `getLevelOfAssurance()` method and assigned to the corresponding field.
     * - `dataMap`: Created from the `credentialSubject` field of `vc`, removing the `levelOfAssurance` key.
     *
     * If the size of the `dataMap` is not 1 or if the values are not of the expected type,
     * appropriate exceptions will be thrown.
     *
     * @throws IllegalStateException If the object has already been initialized.
     * @throws IllegalArgumentException If the size of `dataMap` is not 1.
     * @throws NullPointerException If an error occurs when parsing `dataMap`.
     */
    fun initialize() {
        if (nbf == 0L)
            nbf = iat

        val dataMap = vc.credentialSubject.credentialObject.toMutableMap()
        if (dataMap.size != 1)
            throw IllegalArgumentException("DataMap has more than one field")
        multivalued = true
    }
}
