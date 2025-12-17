package com.inetum.eudi_dome_wallet.core.controllers.uxController

import android.content.Context
import android.content.Intent
import android.os.Build
import android.provider.Settings
import android.util.Log
import androidx.annotation.RequiresApi
import androidx.biometric.BiometricManager
import com.inetum.eudi_dome_wallet.common.utils.AppUtils

object BiometricController {
    val TAG: String = "DW:${BiometricController::class.java.simpleName}"

    enum class BiometricStatus(val tag: String) {
        Enabled("Enabled"),
        NonEnrolled("NonEnrolled"),
        NotBiometric("NotBiometric")
    }

    @RequiresApi(api = Build.VERSION_CODES.R)
    fun enrollBiometric(): Intent {
        val enrollIntent = Intent(Settings.ACTION_BIOMETRIC_ENROLL)
        enrollIntent.putExtra(
            Settings.EXTRA_BIOMETRIC_AUTHENTICATORS_ALLOWED,
            BiometricManager.Authenticators.BIOMETRIC_STRONG
        )
        return enrollIntent
    }


    fun isBiometricUsable(context: Context): BiometricStatus {
        var isBiometricUsable = BiometricStatus.NotBiometric
        val biometricManager = BiometricManager.from(context)

        when (biometricManager.canAuthenticate(BiometricManager.Authenticators.BIOMETRIC_STRONG)) {

            BiometricManager.BIOMETRIC_SUCCESS -> {
                Log.d(TAG, "${AppUtils.getFunctionName()} App can authenticate using biometrics.")
                isBiometricUsable = BiometricStatus.Enabled
            }

            BiometricManager.BIOMETRIC_ERROR_NO_HARDWARE -> {
                Log.i(
                    TAG,
                    "${AppUtils.getFunctionName()} No biometric features available on this device."
                )
            }

            BiometricManager.BIOMETRIC_ERROR_HW_UNAVAILABLE -> {
                Log.i(
                    TAG,
                    "${AppUtils.getFunctionName()} Biometric features are currently unavailable."
                )
            }

            BiometricManager.BIOMETRIC_ERROR_NONE_ENROLLED -> {
                Log.i(
                    TAG,
                    "${AppUtils.getFunctionName()} Biometric features are currently not activated."
                )
                isBiometricUsable = BiometricStatus.NonEnrolled
            }

            BiometricManager.BIOMETRIC_ERROR_SECURITY_UPDATE_REQUIRED -> {
                Log.i(
                    TAG,
                    "${AppUtils.getFunctionName()} Biometric features security update required."
                )
            }

            BiometricManager.BIOMETRIC_ERROR_UNSUPPORTED -> {
                Log.i(TAG, "${AppUtils.getFunctionName()} Biometric features unsupported.")
            }

            BiometricManager.BIOMETRIC_STATUS_UNKNOWN -> {
                Log.i(TAG, "${AppUtils.getFunctionName()} Biometric features status unknown.")
            }
        }
        return isBiometricUsable
    }
}