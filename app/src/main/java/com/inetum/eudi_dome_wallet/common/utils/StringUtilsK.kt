package com.inetum.eudi_dome_wallet.common.utils

import com.google.gson.GsonBuilder
import com.google.gson.JsonDeserializer
import com.google.gson.JsonSyntaxException
import com.inetum.eudi_dome_wallet.core.models.eudi.did.EudiEntityDidDocument

object StringUtilsK {
    fun String.toEntityDidDocument(): EudiEntityDidDocument {
        val gson = GsonBuilder()
            .registerTypeAdapter(String::class.java, JsonDeserializer { json, _, _ ->
                if (json != null && json.isJsonObject)
                    json.toString()
                else
                    json?.toString()?.replace("\"", "") ?: ""
            })
            .create()

        return try {
            gson.fromJson(this, EudiEntityDidDocument::class.java)
        } catch (e1: JsonSyntaxException) {
            e1.printStackTrace()
            throw e1
        } catch (e: Exception) {
            e.printStackTrace()
            throw e
        }
    }
}