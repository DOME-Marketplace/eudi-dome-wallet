package com.inetum.eudi_dome_wallet.ui.custom

import android.view.Gravity
import com.google.android.material.snackbar.Snackbar
import com.inetum.eudi_dome_wallet.ui.custom.CustomSnackBar.AlertType

data class SnackBarDTO(
    var message: String,
    var alertType: AlertType = AlertType.ALERT,
    var gravity: Int = Gravity.CENTER_HORIZONTAL or Gravity.BOTTOM,
    var length: Int = Snackbar.LENGTH_LONG,
    var title: String? = null,
    var icon: Int = -1
)
