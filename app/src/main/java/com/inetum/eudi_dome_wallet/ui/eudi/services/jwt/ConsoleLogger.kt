package com.inetum.eudi_dome_wallet.ui.eudi.services.jwt

import android.util.Log
import androidx.javascriptengine.JavaScriptConsoleCallback

class ConsoleLogger : JavaScriptConsoleCallback {
    private val TAG : String = "DW:${(this::class.java.simpleName ?: "Unknown class")}"

    override fun onConsoleClear() {
    }

    override fun onConsoleMessage(message: JavaScriptConsoleCallback.ConsoleMessage) {
        Log.d(TAG, "console.log: ${message.message}")
    }
}