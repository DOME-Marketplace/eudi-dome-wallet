package com.inetum.utils

import java.net.URI

/**
 * Returns all query parameters as a Map where the keys are parameter names and the values are parameter values.
 *
 * @return A Map containing all query parameters.
 */
fun String.toUri(): URI {
    return URI(this)
}

// region Uri Extension Functions ----------------------------------------------------------------------------------

/**
 * Returns the base URL (scheme, authority, and path) of the Uri without query parameters or fragments.
 *
 * Example usage:
 * ```
 * val uri = Uri.parse("https://example.com/path/to/resource?param1=value1&param2=value2#section")
 * val baseUrl = uri.getBaseUrl()
 * println(baseUrl) // Prints: "https://example.com/path/to/resource"
 * ```
 *
 * @return The base URL as a string.
 */
fun URI.getBaseUrl(): String {
    val urlBase = if (this.port == -1)
        "${this.scheme}://${this.host ?: ""}${this.path ?: ""}"
    else
        "${this.scheme}://${this.host ?: ""}:${this.port ?: ""}${this.path ?: ""}"

    return urlBase
}

/**
 * Returns all query parameters as a Map where the keys are parameter names and the values are parameter values.
 *
 * @return A Map containing all query parameters.
 */
fun URI.getAllQueryParameters(): Map<String, String> {
    val queryParamsMap = mutableMapOf<String, String>()

    if (query != null) {
        val paramList: List<String> = query.split("&")
        for (param in paramList) {
            val keyValue = param.split("=".toRegex()).dropLastWhile { it.isEmpty() }.toTypedArray()
            println("Clave: " + keyValue[0] + ", Valor: " + keyValue[1])
            queryParamsMap[keyValue[0]] = keyValue[1]
        }
    }
    return queryParamsMap
}

// endregion