package com.inetum.eudi_dome_wallet.ui.custom

import java.io.Serializable

data class AlertDialogDTO(
    var title: String,
    var message: String,
    var secondMessage: String? = null,
    var positiveButtonTitle: String,
    var negativeButtonTitle: String? = null,
    var icon: Int = -1
): Serializable