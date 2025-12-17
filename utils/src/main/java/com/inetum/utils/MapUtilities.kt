package com.inetum.utils

import kotlin.reflect.KClass
import kotlin.reflect.full.primaryConstructor

// region Map Extension Functions -------------------------------------------------------------------------------

/*
*/
/**
 * Converts a Map to its JSON representation.
 * If `prettyPrint` is true, the JSON string will be formatted for readability.
 *
 * @param prettyPrint whether the JSON output should be pretty-printed
 * @return the JSON string representation of the object
 *//*

fun Map<*, *>.toJsonString2(prettyPrint: Boolean = false): String {
    val gson: Gson = if (prettyPrint) {
        GsonBuilder().setPrettyPrinting().create()
    } else {
        Gson()
    }
    return gson.toJson(this)
}
*/



/**
 * Extension function on Map<*, *> to create an object of type T from the map.
 * This function handles dynamic type resolution, nested objects, lists, and multiple key formats
 * (camelCase, snake_case, kebab-case, PascalCase).
 *
 * @param T The type of the object to be created.
 * @param typesMapping A map of type predicates for dynamic type resolution based on the map fields (default is empty).
 * @param keysMapping A map for resolving the correspondence between map keys and object parameter names (default is empty).
 * @return The object of type T created from the map data.
 * @throws IllegalArgumentException if type mapping or object creation fails.
 */
inline fun <reified T : Any> Map<*, *>.toObject(
    typesMapping: Map<KClass<*>, (Map<*, *>) -> Boolean> = emptyMap(),
    keysMapping: Map<String, (Map<*, *>) -> Any?> = emptyMap()
): T {
    return this.createObjectFromMapRecursivelyHelper(T::class, typesMapping, keysMapping)
}

/**
 * Converts a [Map] into an instance of [T] by dynamically mapping its keys to the class properties.
 *
 * ### Features:
 * - **Handles key renaming**: Allows mapping a map key to a different property name.
 * - **Custom value transformations**: Supports type conversions (e.g., Double → Long).
 * - **Recursive object creation**: Supports nested objects and lists.
 *
 * @param T The type of the object to be created.
 * @param clazz The class of type [T].
 * @param typesMapping A map for dynamic type resolution (optional).
 * @param keysMapping A map where:
 *   - The key is the **class property name**.
 *   - The value is a function that retrieves and/or transforms the value from the map.
 * @return An instance of [T] populated with values from the map.
 *
 * ### Example usage:
 * ```kotlin
 * data class Person(val id: Int, val fullName: String, val salary: Long)
 *
 * val data = mapOf("user_id" to 42, "name" to "Alice", "income" to 50000.99)
 *
 * val keysMapping: Map<String, (Map<*, *>) -> Any?> = mapOf(
 *     "id" to { it["user_id"] },            // Map "user_id" → to object attribute "id"
 *     "fullName" to { it["name"] },         // Map "name" → to object attribute "fullName"
 *     "salary" to { (it["income"] as Double).toLong() }  // Map "income" → to object attribute "salary" and Convert Double → Long
 * )
 *
 * val person: Person = data.createObjectFromMapRecursivelyHelper(Person::class, keysMapping = keysMapping)
 * println(person) // Output: Person(id=42, fullName=Alice, salary=50000)
 * ```
 */
fun <T : Any> Map<*, *>.createObjectFromMapRecursivelyHelper(
    clazz: KClass<T>,
    typesMapping: Map<KClass<*>, (Map<*, *>) -> Boolean> = emptyMap(),
    keysMapping: Map<String, (Map<*, *>) -> Any?> = emptyMap()
): T {
    // Dynamically resolve the type based on map fields
    val resolvedClass = typesMapping.entries.firstOrNull { (_, predicate) ->
        predicate(this)
    }?.key ?: clazz

    // Get the primary constructor of the resolved class
    val constructor = resolvedClass.primaryConstructor
        ?: throw IllegalArgumentException("No primary constructor found for class ${resolvedClass.simpleName}")

    // Map constructor parameters to values in the data map
    val objectAttributes = constructor.parameters.associateWith { attribute ->
        val attributeName = attribute.name!!

        // All possible variants of the key are added
        val possibleKeys = listOf(
            attributeName,
            attributeName.toSnakeCase(),
            attributeName.toCamelCase(),
            attributeName.toKebabCase(),
            attributeName.toPascalCase()
        )

        // Search in `keysMapping` for any variant of the key
        val keyMapper = possibleKeys.firstNotNullOfOrNull { keysMapping[it] }

        // If there is a mapping, use it; if not, look for the key in the map.
        val convertedMapValue = keyMapper?.invoke(this)
            ?: possibleKeys.firstNotNullOfOrNull { this[it] } // Find the value in any variant in the map


        when {
            convertedMapValue is Map<*, *> && attribute.type.classifier == Map::class -> {
                // Directly use the map if the parameter type is Map
                convertedMapValue
            }
            convertedMapValue is Map<*, *> && attribute.type.classifier is KClass<*> -> {
                // Recursively process nested objects
                convertedMapValue.createObjectFromMapRecursivelyHelper(attribute.type.classifier as KClass<*>, typesMapping, keysMapping)
            }
            convertedMapValue is List<*> && attribute.type.classifier == List::class -> {
                // Recursively process lists
                val listType = attribute.type.arguments.first().type?.classifier as? KClass<*>
                    ?: throw IllegalArgumentException("No type information for list elements")

                convertedMapValue.map {
                    if (it is Map<*, *>) it.createObjectFromMapRecursivelyHelper(listType, typesMapping, keysMapping) else it
                }
            }
            else -> convertedMapValue
        }
    }

    return constructor.callBy(objectAttributes) as T
}

/**
 * Recursively converts the keys of a Map to snake_case format.
 *
 * This function iterates over all the keys in the map and converts them to snake_case format.
 * If the map contains nested maps or lists, it will recursively convert the keys in them as well.
 *
 * Example:
 * ```
 * val map: Map<String, Any?> = mapOf("firstName" to "John", "lastName" to "Doe")
 * val result = map.convertKeysToSnakeCase()
 * println(result) // Output: {first_name=John, last_name=Doe}
 * ```
 *
 * @return A new map with all keys converted to snake_case, including nested maps and lists.
 */
fun Map<*, *>.convertKeysToSnakeCase(): Map<*, *> {
    return this.mapKeys { (key, _) -> (key as? String)?.toSnakeCase() ?: key }  // Converts keys to snake_case (casts key to String)
        // Recursively applies the key conversion for nested maps
        .mapValues { (_, value) ->
            when (value) {
                // If the value is a Map, recursively convert its keys
                is Map<*, *> -> value.convertKeysToSnakeCase()
                // If the value is a List, convert any Maps inside the list
                is List<*> -> value.map {
                    if (it is Map<*, *>) it.convertKeysToSnakeCase() else it
                }
                // If it's neither a Map nor a List, leave it unchanged
                else -> value
            }
        }
}

/**
 * Retrieves a value from the map by key and casts it to the expected type.
 * Throws an exception if the key is not present or if the value is not of the expected type.
 *
 * Example usage:
 * ```
 * val map: Map<Any, Any> = mapOf(
 *     "name" to "John",
 *     "age" to 30,
 *     "active" to true
 * )
 *
 * val name: String = map.getValueAs("name") // "John"
 * val age: Int = map.getValueAs("age") // 30
 * val active: Boolean = map.getValueAs("active") // true
 *
 * // Throws NoSuchElementException because "height" doesn't exist
 * // val height: Int = map.getValueAs("height")
 *
 * // Throws ClassCastException because "age" is not of type String
 * // val ageString: String = map.getValueAs("age")
 * ```
 *
 * @param key The key of the value to retrieve from the map.
 * @return The value cast to the specified type [T].
 * @throws NoSuchElementException If the key does not exist in the map.
 * @throws ClassCastException If the value is not of the expected type [T].
 */
inline fun <reified T> Map<*, *>.getValueAs(key: Any): T {
    val value = this[key] ?: throw NoSuchElementException("Key '$key' not found in the map.")

    return value as? T ?: throw ClassCastException("Value for key '$key' is not of type ${T::class.java.simpleName}.")
}

/**
 * Retrieves a value from the map by key and casts it to the expected type.
 *
 * - Throws an exception if the key is not present.
 * - Throws an exception if the value is not of the expected type.
 *
 * ### Example usage:
 * ```kotlin
 * val map: Map<String, Any> = mapOf(
 *     "name" to "John",
 *     "age" to 30,
 *     "active" to true
 * )
 *
 * val name: String = map.getValueAs("name") // "John"
 * val age: Int = map.getValueAs("age") // 30
 * val active: Boolean = map.getValueAs("active") // true
 *
 * // Throws NoSuchElementException because "height" doesn't exist
 * // val height: Int = map.getValueAs("height")
 *
 * // Throws ClassCastException because "age" is not of type String
 * // val ageString: String = map.getValueAs("age")
 * ```
 *
 * @param key The key to retrieve from the map.
 * @return The value cast to the expected type [T].
 * @throws NoSuchElementException If the key does not exist in the map.
 * @throws ClassCastException If the value is not of the expected type [T].
 */
//inline fun <K, V, reified T> Map<K, V>.getValueAs(key: K): T {
//    val value = this[key] ?: throw NoSuchElementException("Key '$key' not found in the map.")
//
//    return value as? T ?: throw ClassCastException("Value for key '$key' is not of type ${T::class.java.simpleName}.")
//}

/**
 * Retrieves a value from the map by its key and casts it to the expected type.
 * Returns `null` if the key is not present or if the value is not of the expected type.
 *
 * Example usage:
 * ```
 * val map: Map<Any, Any> = mapOf(
 *     "name" to "John",
 *     "age" to 30,
 *     "active" to true
 * )
 *
 * val name: String? = map.getValueAsOrNull<String>("name") // "John"
 * val age: Int? = map.getValueAsOrNull<Int>("age") // 30
 * val active: Boolean? = map.getValueAsOrNull<Boolean>("active") // true
 *
 * val height: Int? = map.getValueAsOrNull<Int>("height") // null, key does not exist
 * val ageString: String? = map.getValueAsOrNull<String>("age") // null, incorrect type
 * ```
 *
 * @receiver The map from which the value will be retrieved.
 * @param key The key of the value to retrieve from the map.
 * @return The value cast to the specified type [T], or `null` if the key does not exist or the type is incorrect.
 * @throws ClassCastException If the value is not of the expected type [T].
 */
inline fun <reified T> Map<*, *>.getValueAsOrNull(key: Any): T? {
    val value = this[key] ?: return null
    return value as? T ?: throw ClassCastException("Value for key '$key' is not of type ${T::class.java.simpleName}.")
}

/**
 * Retrieves a value from the map by its key and casts it to the expected type [T].
 *
 * - Returns `null` if the key is not present in the map.
 * - Throws a `ClassCastException` if the value exists but is not of the expected type.
 *
 * ### Example usage:
 * ```kotlin
 * val map: Map<String, Any> = mapOf(
 *     "name" to "John",
 *     "age" to 30,
 *     "active" to true
 * )
 *
 * val name: String? = map.getValueAsOrNull<String>("name")  // ✅ "John"
 * val age: Int? = map.getValueAsOrNull<Int>("age")  // ✅ 30
 * val active: Boolean? = map.getValueAsOrNull<Boolean>("active")  // ✅ true
 *
 * val height: Int? = map.getValueAsOrNull<Int>("height")  // ✅ null (key does not exist)
 * val ageString: String? = map.getValueAsOrNull<String>("age")
 * // ❌ Throws ClassCastException (value is an Int, not a String)
 * ```
 *
 * @receiver The map from which the value will be retrieved.
 * @param key The key associated with the value.
 * @return The value cast to the expected type [T], or `null` if the key does not exist.
 * @throws ClassCastException If the key exists but the value is not of type [T].
 */
//inline fun <K, V, reified T> Map<K, V>.getValueAsOrNull(key: K): T? {
//    val value = this[key] ?: return null
//    return value as? T ?: throw ClassCastException("Value for key '$key' is not of type ${T::class.java.simpleName}.")
//}

/**
 * Recursively searches for a value in a map by key.
 *
 * This extension function searches for the provided key in the map. If the value associated
 * with the key is another map, it will recursively search within that nested map.
 *
 * @param key The key to search for.
 * @return The value associated with the key if found, or null if the key doesn't exist.
 */
fun Map<*, *>.findValueRecursively(key: String): Any? {
    // Check if the key exists at the current level
    if (this.containsKey(key)) {
        return this[key]
    }

    // Otherwise, check if any value is another map and search recursively
    for (value in this.values) {
        if (value is Map<*, *>) {
            // Cast the value to a Map<String, Any> and search recursively
            val result = (value as? Map<String, Any>)?.findValueRecursively(key)
            if (result != null) {
                return result
            }
        }
    }

    // Return null if the key wasn't found
    return null
}

/**
 * Checks if the map contains a key in any case format (camelCase, snake_case, kebab-case, PascalCase).
 *
 * This function will check for the provided key and its variants in different formats (camelCase, snake_case, kebab-case, PascalCase).
 * If any of these variants exist as a key in the map, it will return `true`, otherwise `false`.
 *
 * Example:
 * ```
 * val map = mapOf("userName" to "John", "user_name" to "John", "user-name" to "John")
 * map.containsKeyInAnyFormat("userName") // Returns true
 * map.containsKeyInAnyFormat("user_name") // Returns true
 * map.containsKeyInAnyFormat("user-name") // Returns true
 * ```
 *
 * @param key The key to check for in the map, in any of the possible formats.
 * @return `true` if any variant of the key exists in the map, `false` otherwise.
 */
fun Map<*, *>.containsKeyInAnyFormat(key: String): Boolean {
    val formats = listOf(
        key,
        key.toSnakeCase(),
        key.toCamelCase(),
        key.toKebabCase(),
        key.toPascalCase()
    )
    return formats.any { this.containsKey(it) }
}

/**
 * Adds a new key-value pair to the MutableMap only if the key does not already exist.
 * If the key is already present, throws an IllegalArgumentException.
 *
 * @param key The key to be added.
 * @param value The value associated with the key.
 * @throws IllegalArgumentException if the key already exists in the map.
 */
//fun <T : Any> MutableMap<*, *>.addIfNotExist(key: T, value: T) {
//    if (this.containsKey(key)) {
//        throw IllegalArgumentException("Key '$key' already exists in the map")
//    }
//    (this as MutableMap<Any, Any>)[key] = value
//}

/**
 * Adds a new key-value pair to the MutableMap only if the key does not already exist.
 * If the key is already present, throws an IllegalArgumentException.
 *
 * @param key The key to be added.
 * @param value The value associated with the key.
 * @throws IllegalArgumentException if the key already exists in the map.
 */
fun <K, V> MutableMap<K, V>.addIfNotExist(key: K, value: V) {
    if (this.containsKey(key)) {
        throw IllegalArgumentException("Key '$key' already exists in the map")
    }
    this[key] = value
}

// endregion
