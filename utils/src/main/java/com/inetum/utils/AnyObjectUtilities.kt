package com.inetum.utils

import com.google.gson.Gson
import com.google.gson.GsonBuilder
import com.google.gson.JsonElement
import java.text.ParseException
import kotlin.reflect.full.memberProperties

// region Any Object Extension Functions ---------------------------------------------------------------------------


/**
 * Converts an object to a map of key-value pairs. The function iterates over all properties of the object,
 * and for each property, it checks if any mapping exists based on its name in various formats (e.g., camelCase, snake_case).
 * If a mapping exists in the `keysMapping` parameter, it uses the provided mapping function to convert the key and value.
 * If no mapping exists, it adds the property as-is to the map. Additionally, nested objects can also be recursively converted
 * to maps using the `convertToMap` helper function.
 *
 * @param keysMapping A map of key mappings where the key is the attribute name (in various formats), and the value is a function
 *                    that accepts the original attribute name and value, and returns a new key-value pair (Pair<String, Any?>).
 *                    The function can also modify the value if needed.
 *                    For example:
 *                    - `"userName"` to { key, value -> Pair("name", value) }
 *                    - `"userId"` to { key, value -> Pair("user_id", value.toString()) }
 *
 * @return A map where the keys are the property names (or mapped names), and the values are the corresponding property values (or converted values).
 *
 * @throws IllegalArgumentException if the property value cannot be converted to a map, or if there's an issue with property reflection.
 *
 * ### Example Usage:
 *
 * ```kotlin
 * val person = Person(name = "John", age = 30)
 * val keysMapping = mapOf(
 *     "name" to { _, value -> "fullName" to value },
 *     "age" to { key, value -> "$partial_{key}" to "${(value as Long).toDouble()}" }
 * )
 * val result = person.toMap(keysMapping)
 *
 * ```
 *
 * ### Example Output:
 * ```
 * Result: {"fullName" to "John", "partial_age" to 30.0}
 * ```
 */
fun Any.toMap(
    keysMapping: Map<String, (String, Any?) -> Pair<String, Any?>> = emptyMap()
): Map<String, Any?> {
    return this::class.memberProperties.associate { prop ->
        val attributeName = prop.name
        val attributeValue = prop.getter.call(this)

        // All possible variants of the key are added
        val possibleKeys = listOf(
            attributeName,
            attributeName.toSnakeCase(),
            attributeName.toCamelCase(),
            attributeName.toKebabCase(),
            attributeName.toPascalCase()
        )

        // Find the first matching key in the keysMapping
        val mappingFunction = possibleKeys.firstNotNullOfOrNull { keysMapping[it] }

        mappingFunction?.invoke(attributeName, attributeValue)
            ?: (attributeName to attributeValue.convertToMapRecursivelyHelper(keysMapping)) // Use helper function for safe conversion

    }
}

/**
 * Helper function to recursively convert an object (or its properties) to a map of key-value pairs.
 * This function handles:
 * - Data classes: Converts data class properties to a map using `toMap()`.
 * - Lists: Recursively converts each element in the list to a map, if applicable.
 * - Maps: Recursively converts each value in the map to a map, if applicable.
 * - Primitives and simple types: Leaves them unchanged.
 *
 * This is a recursive utility designed to handle complex objects, nested lists, and maps,
 * and transform them into a nested map structure.
 */
fun Any?.convertToMapRecursivelyHelper(keysMapping: Map<String, (String, Any?) -> Pair<String, Any?>> = emptyMap()): Any? {
    return when (this) {
        null -> null
        is List<*> -> map { it.convertToMapRecursivelyHelper(keysMapping) } // Process list by recursively converting each element
        is Map<*, *> -> mapValues { it.value.convertToMapRecursivelyHelper(keysMapping) } // Process map by recursively converting each value
        else -> if (this::class.isData)
            this.toMap(keysMapping) // Convert data class to map using `toMap`
        else
            this // Return primitive or simple type unchanged
    }
}

/**
 * Converts an object to its JSON representation.
 * If `prettyPrint` is true, the JSON string will be formatted for readability.
 *
 * @param prettyPrint whether the JSON output should be pretty-printed
 * @return the JSON string representation of the object
 */
fun Any.toJsonString(prettyPrint: Boolean = false): String {
    val gson: Gson = if (prettyPrint) {
        GsonBuilder().setPrettyPrinting().create()
    } else {
        Gson()
//            GsonBuilder()
//                .excludeFieldsWithoutExposeAnnotation()
//                .create()
    }
    val jsonElement = gson.fromJson(gson.toJson(this), com.google.gson.JsonElement::class.java)
    return when (jsonElement) {
        is com.google.gson.JsonObject -> gson.toJson(jsonElement)
        is com.google.gson.JsonArray -> gson.toJson(jsonElement)
        is com.google.gson.JsonPrimitive -> gson.toJson(jsonElement)
        is com.google.gson.JsonNull -> gson.toJson(jsonElement)
        else -> throw ParseException("Unknown object type", 0)
    }
}

/**
 * Converts any object to a JsonElement using Gson.
 *
 * @return the corresponding JsonElement representation of the object.
 */
fun Any.toJsonElement(): JsonElement {
    val gson = Gson()
    return gson.toJsonTree(this)
}

/**
 * Converts any object to a json elements mutable map representation.
 *
 * @return A mutable map where keys are field names and values are field values of the object.
 */
fun Any.toJsonElementMap(): MutableMap<String, Any?> {
    val gson = Gson()
    val json = gson.toJsonTree(this).asJsonObject
    val map = mutableMapOf<String, Any?>()
    for ((key, value) in json.entrySet()) {
        map[key] = value
    }
    return map
}

/**
 * Converts any object to a mutable map representation.
 *
 * @return A mutable map where keys are field names and values are field values of the object.
 */
fun Any.toMap(): MutableMap<*, *> {
    val gson = Gson()
    val json = gson.toJson(this)
    return gson.fromJson(json, MutableMap::class.java) as MutableMap<*, *>
}

// endregion