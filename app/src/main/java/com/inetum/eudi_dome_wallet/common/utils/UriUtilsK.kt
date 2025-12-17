package com.inetum.eudi_dome_wallet.common.utils

import android.net.Uri

object UriUtilsK {

    /**
     * Returns all query parameters as a Map where the keys are parameter names and the values are parameter values.
     *
     * @return A Map containing all query parameters.
     */
    fun Uri.getAllQueryParameters(): Map<String, String> {
        val queryParamsMap = this.queryParameterNames.associateWith { paramName ->
            this.getQueryParameter(paramName)
        } as? Map<String, String> ?: emptyMap()
        return queryParamsMap
    }

}