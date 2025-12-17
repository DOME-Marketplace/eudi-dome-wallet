package com.inetum.eudi_dome_wallet.common.exception

class HttpErrorException(
    statusCode: Int,
    statusText: String,
    message: String? = "HTTP server error $statusCode $statusText"
) : RuntimeException(message)

class HttpRedirectException(
    statusCode: Int,
    val redirectUrl: String,
    message: String? = "HTTP server status $statusCode, redirectUrl: $redirectUrl"
) : RuntimeException(message)

class HttpClientErrorException(
    statusCode: Int,
    statusText: String,
    message: String? = "HTTP client error $statusCode $statusText"
) : RuntimeException(message)

class HttpServerErrorException(
    statusCode: Int,
    statusText: String,
    message: String? = "HTTP server error $statusCode $statusText"
) : RuntimeException(message)