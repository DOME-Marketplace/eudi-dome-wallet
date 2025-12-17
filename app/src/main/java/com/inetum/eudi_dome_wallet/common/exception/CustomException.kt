package com.inetum.eudi_dome_wallet.common.exception

class CustomException(
    cause: Throwable,
    val userMessage: String
) : Exception(cause)