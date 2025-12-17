package com.inetum.eudi_dome_wallet.core.servicies

import com.inetum.eudi_dome_wallet.common.classes.LogLevel
import com.inetum.eudi_dome_wallet.core.ports.inputs.LogUseCase
import com.inetum.eudi_dome_wallet.core.ports.outputs.LogPort

class LogServiceCore(private val logPort: LogPort): LogUseCase {
    override fun log(logLevel: LogLevel, tag: String, msg: String, t: Throwable?) {
        logPort.log(logLevel, tag, msg, t)
    }
}