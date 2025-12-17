package com.inetum.utils

import kotlinx.coroutines.*

/**
 * Executes a given function, logs the execution time, and returns the function's result.
 *
 * Example:
 * ```
 * PerformanceTestingUtils.executeWithTiming {
 *     IoCManager.getEudiDeferredCredentialDBInputAdapter().saveDeferredCredentialIntoDB(deferredCredentialCore)
 * }
 * ```
 *
 * @param T The return type of the function.
 * @param block The function to be executed.
 * @return The result of the function.
 */
fun <T> executeWithTiming(block: () -> T): T {
    val startTime = System.currentTimeMillis()
    val result: T = block()
    val endTime = System.currentTimeMillis()
    val elapsedTime = endTime - startTime

    println("[GeneralUtilities]\t${(object{}.javaClass.enclosingMethod?.name ?: "Unknown function")}() Execution took $elapsedTime ms")
    return result
}

/**
 * Executes a given suspend function, logs the execution time, and returns the function's result.
 *
 * Example:
 * ```
 * PerformanceTestingUtils.executeWithTimingSuspend {
 *     IoCManager.getEudiDeferredCredentialDBInputAdapter().saveDeferredCredentialIntoDB(deferredCredentialCore)
 * }
 * ```
 *
 * @param T The return type of the suspend function.
 * @param block The suspend function to be executed.
 * @return The result of the suspend function.
 */
suspend fun <T> executeWithTimingSuspend(block: suspend () -> T): T {
    val startTime = System.currentTimeMillis()
    val result: T = block()
    val endTime = System.currentTimeMillis()
    val elapsedTime = endTime - startTime

    withContext(Dispatchers.IO) {
        println("[GeneralUtilities]\t${(object{}.javaClass.enclosingMethod?.name ?: "Unknown function")}() Execution took $elapsedTime ms")
    }
    return result
}

/*

*/
/**
 * Recursively creates an object of type T from a map. This function handles dynamic type resolution,
 * nested objects, and lists, as well as different naming conventions (camelCase, snake_case, kebab-case, PascalCase).
 *
 * It uses a provided `typesMapping` to determine the target class dynamically based on the map's fields.
 * It uses a `keysMapping` to map JSON keys to the corresponding parameter names of the class.
 * Multiple formats for JSON keys (like snake_case, camelCase, etc.) are handled automatically.
 *
 * @param T The type of the object to be created.
 * @param clazz The class of type T.
 * @param data The map containing the data to be mapped to the object.
 * @param typesMapping A map of type predicates for dynamic type resolution based on the map fields (default is empty).
 * @param keysMapping A map for resolving the correspondence between map keys and object parameter names (default is empty).
 * @return The object of type T created from the map data.
 * @throws IllegalArgumentException if the constructor for the class is not found, or if type mapping fails.
 *//*


fun <T : Any> createObjectFromMapRecursivelyHelper(
    clazz: KClass<T>,
    data: Map<*, *>,
    typesMapping: Map<KClass<*>, (Map<*, *>) -> Boolean> = emptyMap(),
    keysMapping: Map<String, String> = emptyMap()
): T {
    // Dynamically resolve the type based on map fields
    val resolvedClass = typesMapping.entries.firstOrNull { (_, predicate) ->
        predicate(data as Map<*, *>)
    }?.key ?: clazz

    // Get the primary constructor of the resolved class
    val constructor = resolvedClass.primaryConstructor
        ?: throw IllegalArgumentException("No primary constructor found for class ${resolvedClass.simpleName}")

    // Map constructor parameters to values in the data map
    val params = constructor.parameters.associateWith { param ->
        val paramName = param.name!!
        val jsonKey = keysMapping[paramName] ?: paramName

        // Resolve multiple key formats (snake_case, camelCase, kebab-case, etc.)
        val value = data[jsonKey]
            ?: data[jsonKey.toSnakeCase()]
            ?: data[jsonKey.toCamelCase()]
            ?: data[jsonKey.toKebabCase()]
            ?: data[jsonKey.toPascalCase()]

        when {
            value is Map<*, *> && param.type.classifier == Map::class -> {
                // Directly use the map if the parameter type is Map
                value
            }
            value is Map<*, *> && param.type.classifier is KClass<*> -> {
                // Recursively process nested objects
                createObjectFromMapRecursivelyHelper(
                    param.type.classifier as KClass<*>,
                    value as Map<*, *>,
                    typesMapping,
                    keysMapping
                )
            }
            value is List<*> && param.type.classifier == List::class -> {
                // Recursively process lists
                val listType = param.type.arguments.first().type?.classifier as? KClass<*>
                    ?: throw IllegalArgumentException("No type information for list elements")

                value.map {
                    if (it is Map<*, *>) createObjectFromMapRecursivelyHelper(
                        listType,
                        it as Map<*, *>,
                        typesMapping,
                        keysMapping
                    )
                    else it
                }
            }
            else -> value
        }
    }

    return constructor.callBy(params) as T
}


*/
/**
 * Creates an object of type T from a map using recursion. This function resolves dynamic types, handles
 * nested objects, lists, and multiple key formats, as well as dynamic type resolution via `typesMapping`.
 *
 * @param T The type of the object to be created.
 * @param data The map containing the data to be mapped to the object.
 * @param typesMapping A map of type predicates for dynamic type resolution based on the map fields (default is empty).
 * @param keysMapping A map for resolving the correspondence between map keys and object parameter names (default is empty).
 * @return The object of type T created from the map data.
 * @throws IllegalArgumentException if type mapping or object creation fails.
 *//*


inline fun <reified T : Any> createObjectFromMap(
    data: Map<*, *>,
    typesMapping: Map<KClass<*>, (Map<*, *>) -> Boolean> = emptyMap(),
    keysMapping: Map<String, String> = emptyMap()
): T {
    return createObjectFromMapRecursivelyHelper(T::class, data, typesMapping = typesMapping, keysMapping = keysMapping)
}

*/
