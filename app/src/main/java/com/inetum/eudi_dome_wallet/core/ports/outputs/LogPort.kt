package com.inetum.eudi_dome_wallet.core.ports.outputs

import com.inetum.eudi_dome_wallet.common.classes.LogLevel

interface LogPort {
    fun log (logLevel: LogLevel, tag: String, msg: String, t: Throwable? = null)
}