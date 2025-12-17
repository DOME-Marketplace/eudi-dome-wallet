package com.inetum.eudi_dome_wallet.core.ports.inputs

import com.inetum.eudi_dome_wallet.common.classes.LogLevel

interface LogUseCase {
    fun log(logLevel: LogLevel, tag: String, msg: String, t: Throwable? = null)
}