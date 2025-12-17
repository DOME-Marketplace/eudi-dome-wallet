package com.inetum.eudi_dome_wallet.infrastructure.adapters.outputs

import android.util.Log
import com.inetum.eudi_dome_wallet.common.classes.LogLevel
import com.inetum.eudi_dome_wallet.core.ports.outputs.LogPort

class LogOutputAdapter: LogPort {
    override fun log(logLevel: LogLevel, tag: String, msg: String, t: Throwable?) {
        when (logLevel) {
            LogLevel.ERROR -> if (t != null) Log.e(tag, msg, t) else Log.e(tag, msg)
            LogLevel.WARM -> if (t != null) Log.w(tag, msg, t) else Log.w(tag, msg)
            LogLevel.INFO -> if (t != null) Log.i(tag, msg, t) else Log.i(tag, msg)
            LogLevel.DEBUG -> if (t != null) Log.d(tag, msg, t) else Log.d(tag, msg)
            LogLevel.VERBOSE-> if (t != null) Log.v(tag, msg, t) else Log.v(tag, msg)
        }
    }
}