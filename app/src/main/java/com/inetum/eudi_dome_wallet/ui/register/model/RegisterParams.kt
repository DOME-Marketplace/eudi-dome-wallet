package com.inetum.eudi_dome_wallet.ui.register.model

import java.io.Serializable

data class RegisterParams(
    var pwd: String,
    var usesBiometric: Boolean
): Serializable {

}
