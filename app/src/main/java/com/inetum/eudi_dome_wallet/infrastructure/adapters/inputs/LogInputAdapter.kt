package com.inetum.eudi_dome_wallet.infrastructure.adapters.inputs

import com.inetum.eudi_dome_wallet.common.classes.LogLevel
import com.inetum.eudi_dome_wallet.core.ports.inputs.LogUseCase

class LogInputAdapter(private val logUseCase: LogUseCase) {
    fun log (logLevel: LogLevel, tag: String, msg: String, t: Throwable? = null) {
        logUseCase.log(logLevel, tag, msg, t)
    }
}