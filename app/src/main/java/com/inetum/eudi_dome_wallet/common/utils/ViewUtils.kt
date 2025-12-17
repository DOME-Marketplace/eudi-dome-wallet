package com.inetum.eudi_dome_wallet.common.utils

import android.view.View

object ViewUtils {
    /**
     * Toggle visibility of the View between VISIBLE and GONE.
     */
    fun View.toggleVisibility() {
        visibility = if (visibility == View.VISIBLE) {
            View.GONE
        } else {
            View.VISIBLE
        }
    }
}