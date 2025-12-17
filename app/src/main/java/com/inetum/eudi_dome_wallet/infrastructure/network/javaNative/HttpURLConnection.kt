package com.inetum.eudi_dome_wallet.infrastructure.network.javaNative

import com.google.gson.Gson
import com.google.gson.JsonSyntaxException
import com.inetum.eudi_dome_wallet.common.classes.LogLevel
import com.inetum.eudi_dome_wallet.common.exception.HttpClientErrorException
import com.inetum.eudi_dome_wallet.common.exception.HttpErrorException
import com.inetum.eudi_dome_wallet.common.exception.HttpRedirectException
import com.inetum.eudi_dome_wallet.common.exception.HttpServerErrorException
import com.inetum.eudi_dome_wallet.common.utils.AppUtils
import com.inetum.eudi_dome_wallet.manager.IoCManager
import com.inetum.utils.toObject
import com.inetum.utils.toUrlEncoder
import java.net.HttpURLConnection
import java.net.URI

object HttpURLConnection {
    val TAG : String = "DW:${(this::class.java.simpleName ?: "Unknown class")}"

    const val BEARER_TOKEN_NAME: String = "Bearer"

    /**
     * Sends an HTTP GET request to the specified URL with optional query parameters and bearer token.
     * This function handles various HTTP response codes and performs automatic JSON parsing of the response body.
     *
     * @param baseUrl The base URL to which the GET request is sent.
     * @param params Optional query parameters to append to the base URL.
     * @param bearerToken Optional bearer token for authorization.
     * @return The response parsed as an instance of the specified type [T]. The type of the response is [T].
     * @throws HttpRedirectException If the response indicates a redirect and the "Location" header is missing.
     * @throws HttpClientErrorException If the response indicates a client error (4xx status code).
     * @throws HttpServerErrorException If the response indicates a server error (5xx status code).
     * @throws HttpErrorException For any other HTTP error codes.
     * @throws JsonSyntaxException If the response body cannot be parsed into the specified type [T].
     *
     * @param T The type of the response body.
     */
    inline fun <reified T> getRequest(baseUrl: String, params: Map<String, Any>?, bearerToken: String? = null): T {
        val urlString = if (params != null) {
            val queryParams = params.entries.joinToString("&") { "${it.key}=${it.value}" }
            "$baseUrl?$queryParams"
        } else {
            baseUrl
        }

        IoCManager.getLogInputAdapter().log(LogLevel.DEBUG, TAG, "${AppUtils.getFunctionName()} execute with url: $urlString")
        val uri = URI(urlString)
        val url = uri.toURL()
        val connection = url.openConnection() as HttpURLConnection
        connection.instanceFollowRedirects = false
        try {
            connection.requestMethod = "GET"
            if (bearerToken != null)
                connection.setRequestProperty("Authorization", "$BEARER_TOKEN_NAME $bearerToken")

            connection.connect()

            when (val responseCode = connection.responseCode) {
                in 200..299 -> {
                    val response = connection.inputStream.bufferedReader().use { it.readText() }
                    IoCManager.getLogInputAdapter().log(
                        LogLevel.DEBUG,
                        TAG,
                        "${AppUtils.getFunctionName()} response: code ${responseCode}, $response"
                    )
                    try {
                        if (response.isEmpty())
                            throw IllegalStateException("response is null or empty")

                        return Gson().fromJson(response, T::class.java)
                    } catch (e: JsonSyntaxException) {
                        IoCManager.getLogInputAdapter().log(LogLevel.DEBUG, TAG, "${AppUtils.getFunctionName()} error parsing response: ${e.message}")
                        throw e
                    }
                }

                in 300..399 -> {
                    val location = connection.getHeaderField("Location")
                    if (location != null) {
                        IoCManager.getLogInputAdapter().log(
                            LogLevel.DEBUG,
                            TAG,
                            "${AppUtils.getFunctionName()} response: code ${responseCode}, location: $location"
                        )
                        throw HttpRedirectException(responseCode, location)
                    } else {
                        throw HttpErrorException(responseCode, "Redirection location header is missing")
                    }
                }

                in 400..499 -> {
                    val errorMessage = connection.errorStream?.bufferedReader()?.use { it.readText() } ?: "No error message in response"
                    IoCManager.getLogInputAdapter().log(
                        LogLevel.DEBUG,
                        TAG,
                        "${AppUtils.getFunctionName()} response: code ${responseCode}, error: $errorMessage"
                    )
                    throw HttpClientErrorException(responseCode, errorMessage)
                }

                in 500..599 -> {
                    val errorMessage = connection.errorStream?.bufferedReader()?.use { it.readText() } ?: "No error message in response"
                    IoCManager.getLogInputAdapter().log(
                        LogLevel.DEBUG,
                        TAG,
                        "${AppUtils.getFunctionName()} response: code ${responseCode}, error: $errorMessage"
                    )
                    throw HttpServerErrorException(responseCode, errorMessage)
                }

                else -> {
                    val errorMessage = connection.errorStream?.bufferedReader()?.use { it.readText() } ?: "No error message in response"
                    IoCManager.getLogInputAdapter().log(
                        LogLevel.DEBUG,
                        TAG,
                        "${AppUtils.getFunctionName()} response: code ${responseCode}, error: $errorMessage"
                    )
                    throw HttpErrorException(responseCode, errorMessage)
                }
            }

        } finally {
            connection.disconnect()
        }
    }

    /**
     * Sends an HTTP POST request to the specified URL with optional query parameters, request body, and bearer token.
     * This function handles various HTTP response codes and performs automatic JSON parsing of the response body.
     *
     * @param baseUrl The base URL to which the POST request is sent.
     * @param params Optional query parameters to append to the base URL.
     * @param body Optional request body to send in JSON format. The type of the body is [T].
     * @param bearerToken Optional bearer token for authorization.
     * @return The response parsed as an instance of the specified type [E]. The type of the response is [E].
     * @throws HttpRedirectException If the response indicates a redirect and the "Location" header is missing.
     * @throws HttpClientErrorException If the response indicates a client error (4xx status code).
     * @throws HttpServerErrorException If the response indicates a server error (5xx status code).
     * @throws HttpErrorException For any other HTTP error codes.
     * @throws JsonSyntaxException If the response body cannot be parsed into the specified type [E].
     *
     * @param T The type of the request body.
     * @param E The type of the response body.
     */
    inline fun <reified T, reified E> postRequest(baseUrl: String, params: Map<String, String>?, body: T?, bearerToken: String? = null): E {
        val urlString = if (params != null) {
            val queryParams = params.entries.joinToString("&") { "${it.key}=${it.value}" }
            "$baseUrl?$queryParams"
        } else {
            baseUrl
        }
        IoCManager.getLogInputAdapter().log(LogLevel.DEBUG, TAG, "${AppUtils.getFunctionName()} execute with url: $urlString")
        val uri = URI(urlString)
        val url = uri.toURL()
        val connection = url.openConnection() as HttpURLConnection
        connection.instanceFollowRedirects = false

        try {
            connection.requestMethod = "POST"
            connection.doOutput = true
            connection.setRequestProperty("Content-Type", "application/json")
            connection.setRequestProperty("Accept", "application/json")
            if (bearerToken != null)
                connection.setRequestProperty("Authorization", "$BEARER_TOKEN_NAME $bearerToken")
            if (body != null) {
                val jsonBody = Gson().toJson(body)
                connection.outputStream.use { os ->
                    val input = jsonBody.toByteArray(Charsets.UTF_8)
                    os.write(input, 0, input.size)
                }
            }

            connection.connect()

            when (val responseCode = connection.responseCode) {
                in 200..299 -> {
                    val response = connection.inputStream.bufferedReader().use { it.readText() }
                    IoCManager.getLogInputAdapter().log(
                        LogLevel.DEBUG,
                        TAG,
                        "${AppUtils.getFunctionName()} response: code ${responseCode}, $response"
                    )
                    try {
                        if (response.isEmpty())
                            throw IllegalStateException("response is null or empty")
                        val responseObject = response.toObject<E>()
                        return responseObject
                    } catch (e: JsonSyntaxException) {
                        IoCManager.getLogInputAdapter().log(LogLevel.DEBUG, TAG, "${AppUtils.getFunctionName()} error parsing response: ${e.message}")
                        throw e
                    }
                }

                in 300..399 -> {
                    val location = connection.getHeaderField("Location")
                    if (location != null) {
                        IoCManager.getLogInputAdapter().log(
                            LogLevel.DEBUG,
                            TAG,
                            "${AppUtils.getFunctionName()} response: code ${responseCode}, location: $location"
                        )
                        throw HttpRedirectException(responseCode, location)
                    } else {
                        throw HttpErrorException(responseCode, "Redirection location header is missing")
                    }
                }

                in 400..499 -> {
                    val errorMessage = connection.errorStream?.bufferedReader()?.use { it.readText() } ?: "No error message in response"
                    IoCManager.getLogInputAdapter().log(
                        LogLevel.DEBUG,
                        TAG,
                        "${AppUtils.getFunctionName()} response: code ${responseCode}, error: $errorMessage"
                    )
                    throw HttpClientErrorException(responseCode, errorMessage)
                }

                in 500..599 -> {
                    val errorMessage = connection.errorStream?.bufferedReader()?.use { it.readText() } ?: "No error message in response"
                    IoCManager.getLogInputAdapter().log(
                        LogLevel.DEBUG,
                        TAG,
                        "${AppUtils.getFunctionName()} response: code ${responseCode}, error: $errorMessage"
                    )
                    throw HttpServerErrorException(responseCode, errorMessage)
                }

                else -> {
                    val errorMessage = connection.errorStream?.bufferedReader()?.use { it.readText() } ?: "No error message in response"
                    IoCManager.getLogInputAdapter().log(
                        LogLevel.DEBUG,
                        TAG,
                        "${AppUtils.getFunctionName()} response: code ${responseCode}, error: $errorMessage"
                    )
                    throw HttpErrorException(responseCode, errorMessage)
                }
            }
        } finally {
            connection.disconnect()
        }
    }

    /**
     * Executes an HTTP POST request with URL-encoded form parameters and an optional JSON body.
     *
     * This function builds a URL from the given [baseUrl] and optional query parameters [params].
     * It then sends a POST request with the provided form parameters [xFormParams] and body [body].
     * The body is serialized to JSON if provided, and the form parameters are URL-encoded before being added to the request.
     * It also optionally adds a bearer token to the request header if [bearerToken] is provided.
     *
     * Depending on the response code, the function handles different HTTP status codes:
     * - 2xx: Returns the parsed response of type [E].
     * - 3xx: Throws a [HttpRedirectException] for manual redirection if a "Location" header is found.
     * - 4xx: Throws a [HttpClientErrorException] with the error message for client-side errors.
     * - 5xx: Throws a [HttpServerErrorException] with the error message for server-side errors.
     * - Other: Throws a [HttpErrorException] for any other error.
     *
     * Example usage:
     * ```
     * val response: MyResponseType = postRequestXWwwFormUrlEncoded(
     *     baseUrl = "https://api.example.com/endpoint",
     *     params = mapOf("query" to "test"),
     *     body = myRequestBody,
     *     xFormParams = mapOf("key" to "value"),
     *     bearerToken = "yourBearerToken"
     * )
     * ```
     *
     * @param baseUrl The base URL for the POST request.
     * @param params Optional query parameters to be added to the URL.
     * @param body Optional request body that will be serialized to JSON.
     * @param xFormParams Optional form parameters that will be URL-encoded and sent as form data.
     * @param bearerToken Optional Bearer token for authorization.
     * @return The response of type [E] after deserialization.
     * @throws HttpRedirectException if the response status code indicates a redirection.
     * @throws HttpClientErrorException if the response status code indicates a client error (4xx).
     * @throws HttpServerErrorException if the response status code indicates a server error (5xx).
     * @throws HttpErrorException for any other HTTP error.
     */
    inline fun <reified T, reified E> postRequestXWwwFormUrlEncoded(
        baseUrl: String,
        params: Map<String, String>?,
        body: T?,
        xFormParams: Map<String, String>?,
        bearerToken: String? = null
    ): E {
        val urlString = if (params != null) {
            val queryParams = params.entries.joinToString("&") { "${it.key}=${it.value}" }
            "$baseUrl?$queryParams"
        } else {
            baseUrl
        }

        val encodedXFormParams = xFormParams?.map { (key, value) ->
            "${key.toUrlEncoder()}=${value.toUrlEncoder()}"
        }?.joinToString("&")

        IoCManager.getLogInputAdapter().log(LogLevel.DEBUG, TAG, "${AppUtils.getFunctionName()} execute with url: $urlString")
        IoCManager.getLogInputAdapter().log(LogLevel.DEBUG, TAG, "${AppUtils.getFunctionName()} body: $body")

        val uri = URI(urlString)
        val url = uri.toURL()
        val connection = url.openConnection() as HttpURLConnection
        connection.instanceFollowRedirects = false

        try {
            connection.requestMethod = "POST"
            connection.doOutput = true
            if (body != null) {
                connection.setRequestProperty("Content-Type", "application/json")
                connection.setRequestProperty("Accept", "application/json")
            }
            if (encodedXFormParams != null) {
                connection.setRequestProperty("Content-Type", "application/x-www-form-urlencoded")
            }
            if (bearerToken != null)
                connection.setRequestProperty("Authorization", "$BEARER_TOKEN_NAME $bearerToken")
            if (encodedXFormParams != null) {
                connection.outputStream.use { os ->
                    val input = encodedXFormParams.toByteArray(Charsets.UTF_8)
                    os.write(input, 0, input.size)
                }
            }
            if (body != null) {
                val jsonBody = Gson().toJson(body)
                connection.outputStream.use { os ->
                    val input = jsonBody.toByteArray(Charsets.UTF_8)
                    os.write(input, 0, input.size)
                }
            }

            connection.connect()

            when (val responseCode = connection.responseCode) {
                in 200..299 -> {
                    val response = connection.inputStream.bufferedReader().use { it.readText() }
                    IoCManager.getLogInputAdapter().log(
                        LogLevel.DEBUG,
                        TAG,
                        "${AppUtils.getFunctionName()} response: code ${responseCode}, $response"
                    )
                    try {
                        return Gson().fromJson(response, E::class.java)
                    } catch (e: JsonSyntaxException) {
                        IoCManager.getLogInputAdapter().log(LogLevel.DEBUG, TAG, "${AppUtils.getFunctionName()} error parsing response: ${e.message}")
                        throw e
                    }
                }

                in 300..399 -> {
                    val location = connection.getHeaderField("Location")
                    if (location != null) {
                        IoCManager.getLogInputAdapter().log(
                            LogLevel.DEBUG,
                            TAG,
                            "${AppUtils.getFunctionName()} response: code ${responseCode}, location: $location"
                        )
                        throw HttpRedirectException(responseCode, location)
                    } else {
                        throw HttpErrorException(responseCode, "Redirection location header is missing")
                    }
                }

                in 400..499 -> {
                    val errorMessage = connection.errorStream?.bufferedReader()?.use { it.readText() } ?: "No error message in response"
                    IoCManager.getLogInputAdapter().log(
                        LogLevel.DEBUG,
                        TAG,
                        "${AppUtils.getFunctionName()} response: code ${responseCode}, error: $errorMessage"
                    )
                    throw HttpClientErrorException(responseCode, errorMessage)
                }

                in 500..599 -> {
                    val errorMessage = connection.errorStream?.bufferedReader()?.use { it.readText() } ?: "No error message in response"
                    IoCManager.getLogInputAdapter().log(
                        LogLevel.DEBUG,
                        TAG,
                        "${AppUtils.getFunctionName()} response: code ${responseCode}, error: $errorMessage"
                    )
                    throw HttpServerErrorException(responseCode, errorMessage)
                }

                else -> {
                    val errorMessage = connection.errorStream?.bufferedReader()?.use { it.readText() } ?: "No error message in response"
                    IoCManager.getLogInputAdapter().log(
                        LogLevel.DEBUG,
                        TAG,
                        "${AppUtils.getFunctionName()} response: code ${responseCode}, error: $errorMessage"
                    )
                    throw HttpErrorException(responseCode, errorMessage)
                }
            }
        } finally {
            connection.disconnect()
        }
    }
}