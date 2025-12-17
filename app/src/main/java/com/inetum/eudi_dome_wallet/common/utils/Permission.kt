package com.inetum.eudi_dome_wallet.common.utils

import android.app.Activity
import android.content.pm.PackageManager
import androidx.core.app.ActivityCompat
import androidx.core.content.ContextCompat

object Permission {
    const val GRANTED: Int = 0
    const val DENIED: Int = 1
    const val BLOCKED_OR_NEVER_ASKED: Int = 2

    fun getPermissionStatus(activity: Activity?, androidPermissionName: String?): Int {
        return if (ContextCompat.checkSelfPermission(
                activity!!,
                androidPermissionName!!
            ) != PackageManager.PERMISSION_GRANTED
        ) {
            if (!ActivityCompat.shouldShowRequestPermissionRationale(
                    activity,
                    androidPermissionName
                )
            ) {
                BLOCKED_OR_NEVER_ASKED
            } else {
                DENIED
            }
        } else {
            GRANTED
        }
    }
}