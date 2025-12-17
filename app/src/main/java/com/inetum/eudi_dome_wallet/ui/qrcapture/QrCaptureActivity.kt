package com.inetum.eudi_dome_wallet.ui.qrcapture

import android.content.Intent
import android.os.Bundle
import android.widget.Toast
import androidx.appcompat.app.AppCompatActivity
import androidx.lifecycle.ViewModelProvider
import com.google.zxing.integration.android.IntentIntegrator
import com.inetum.eudi_dome_wallet.R

class QrCaptureActivity : AppCompatActivity() {

    private lateinit var mViewModel: QrCaptureActivityViewModel

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_qr_capture)
        mViewModel = ViewModelProvider(this).get(
            QrCaptureActivityViewModel::class.java
        )
        val intentIntegrator = IntentIntegrator(this)
        mViewModel.onCreate(intentIntegrator)
        mViewModel.toastMessage.observe(this) { toastMessage: String? ->
            Toast.makeText(baseContext, toastMessage, Toast.LENGTH_SHORT).show()
            mViewModel.toastMessage.setValue(null)
        }
    }

    @Deprecated("Deprecated in Java")
    override fun onActivityResult(requestCode: Int, resultCode: Int, data: Intent?) {
        super.onActivityResult(requestCode, resultCode, data)
        val qrCaptured = mViewModel.onActivityResult(requestCode, resultCode, data)
        if (!qrCaptured) {
            super.onActivityResult(requestCode, resultCode, data)
        }
    }
}