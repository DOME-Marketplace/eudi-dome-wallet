package com.inetum.eudi_dome_wallet.ui.qrcapture

import android.content.Intent
import com.google.zxing.integration.android.IntentIntegrator
import com.inetum.eudi_dome_wallet.App
import com.inetum.eudi_dome_wallet.R
import com.inetum.eudi_dome_wallet.ui.base.BaseViewModel

class QrCaptureActivityViewModel : BaseViewModel() {
    fun onCreate(intentIntegrator: IntentIntegrator) {
        intentIntegrator.setPrompt("Scan a barcode or QR Code")
        intentIntegrator.setOrientationLocked(true)
        intentIntegrator.setCaptureActivity(CaptureActivityPortrait::class.java)
        intentIntegrator.initiateScan()
    }

    fun onActivityResult(requestCode: Int, resultCode: Int, data: Intent?): Boolean {
        val intentResult = IntentIntegrator.parseActivityResult(requestCode, resultCode, data)
        // if the intentResult is null then
        // toast a message as "cancelled"
        return if (intentResult != null) {
            if (intentResult.contents == null) {
                toastMessage.setValue(App.getStringResource(R.string.qr_cancelled))
            } else {
                // if the intentResult is not null we'll set
                // the content and format of scan message
                val content = intentResult.contents
                val name = intentResult.formatName
            }
            true
        } else {
            false
        }
    }
}
