package com.inetum.utils

import com.google.gson.*
import com.google.gson.reflect.TypeToken
import com.google.gson.stream.JsonReader
import com.google.gson.stream.JsonWriter
import java.net.URLDecoder
import java.net.URLEncoder
import java.nio.charset.StandardCharsets
import java.security.MessageDigest
import java.security.SecureRandom
import java.text.Normalizer
import java.text.SimpleDateFormat
import java.time.Instant
import java.util.*
import kotlin.reflect.full.memberProperties

/**
 * Generates the current date in string format.
 *
 * @return A date string representation with the pattern 'dd-MM-yyyy HH-mm-ss'.
 */
fun getCurrentDateTime(): String {
    val dateFormat = SimpleDateFormat("dd-MM-yyyy HH-mm-ss", Locale.getDefault())
    return dateFormat.format(Date())
}

/**
 * Generates a random UUID string.
 *
 * @return A randomly generated UUID string in standard format.
 */
fun generateUUIDString(): String {
    return UUID.randomUUID().toString()
}

/**
 * Generates a random string with a length between the specified minimum and maximum values.
 * The string is composed of alphanumeric characters and a few special characters (-, ., _, ~).
 *
 * @param minLength The minimum length of the generated string.
 * @param maxLength The maximum length of the generated string.
 * @return A randomly generated string.
 */
fun generateRandomString(minLength: Int, maxLength: Int): String {
    val allowedChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~"
    val random = SecureRandom()
    val length = random.nextInt(maxLength - minLength + 1) + minLength
    return (1..length)
        .map { allowedChars[random.nextInt(allowedChars.length)] }
        .joinToString("")
}

/**
 * Generates a random code verifier as specified by RFC 7636 (PKCE - Proof Key for Code Exchange).
 * The verifier is a URL-safe base64-encoded string, created from 32 random bytes.
 *
 * @return A randomly generated code verifier in URL-safe base64 encoding.
 */
fun generateCodeVerifier(): String {
    val random = SecureRandom()
    val verifierBytes = ByteArray(32)
    random.nextBytes(verifierBytes)
    return Base64.getUrlEncoder().withoutPadding().encodeToString(verifierBytes)
}

/**
 * Generates a code challenge based on a given code verifier using the SHA-256 hashing algorithm,
 * as specified by RFC 7636 (PKCE - Proof Key for Code Exchange).
 * The challenge is the base64-encoded SHA-256 hash of the verifier.
 *
 * @param verifier The code verifier string to hash.
 * @return The generated code challenge as a URL-safe base64 string.
 */
fun generateCodeChallenge(verifier: String): String {
    val bytes = verifier.toByteArray(Charsets.US_ASCII)
    val md = MessageDigest.getInstance("SHA-256")
    md.update(bytes, 0, bytes.size)
    val digest = md.digest()
    return Base64.getUrlEncoder().withoutPadding().encodeToString(digest)
}

// region String Extension Functions -------------------------------------------------------------------------------

/**
 * Converts the string to camelCase format.
 *
 * Converts the string from snake_case, kebab-case, or other similar formats to camelCase.
 *
 * Example:
 * ```
 * "hello_world".toCamelCase() // Returns "helloWorld"
 * ```
 *
 * @return The string converted to camelCase.
 */
fun String.toCamelCase(): String {
//    val parts = this.split('_', '-', ' ')
//    return parts.first() + parts.drop(1).joinToString("") { it.capitalize() }

//    val parts = this.split(Regex("[-_\\s]")) // Divide por guiones, underscores y espacios
//        .filter { it.isNotEmpty() } // Elimina elementos vacíos si hay dobles separadores
//
//    return if (parts.isNotEmpty()) {
//        parts.first().replaceFirstChar { it.lowercase() } + // Primera palabra en minúsculas
//                parts.drop(1).joinToString("") { it.replaceFirstChar { char -> char.uppercase() } } // Capitaliza las siguientes
//    } else {
//        this // Retorna la cadena original si está vacía
//    }

    return this
        .replace(Regex("([a-z])([A-Z])"), "$1 $2") // Inserts a space between a lowercase letter followed by an uppercase letter (handles PascalCase)
        .split(Regex("[-_\\s]+")) // Splits the string by hyphens, underscores, or spaces
        .mapIndexed { index, word -> // Capitalizes the first letter of each word (except the first word)
            if (index == 0) word.lowercase() else word.replaceFirstChar { it.uppercase() }
        }.joinToString("") // Joins all the words into a single string
}

/**
 * Converts the string to snake_case format.
 *
 * Converts the string from camelCase, PascalCase, or other formats to snake_case.
 *
 * Example:
 * ```
 * "helloWorld".toSnakeCase() // Returns "hello_world"
 * ```
 *
 * @return The string converted to snake_case.
 */
fun String.toSnakeCase(): String {
//    return this.fold("") { acc, c ->
//        if (c.isUpperCase()) acc + "_" + c.lowercaseChar() else acc + c
//    }.removePrefix("_")

    return this
        .replace(Regex("([a-z])([A-Z])"), "$1_$2") // Converts camelCase to snake_case by adding an underscore between lowercase and uppercase letters
        .replace(Regex("[-\\s]"), "_") // Replaces hyphens and spaces with underscores
        .lowercase() // Converts all characters to lowercase
}

/**
 * Converts the string to kebab-case format.
 *
 * Converts the string from camelCase, PascalCase, or other formats to kebab-case.
 *
 * Example:
 * ```
 * "helloWorld".toKebabCase() // Returns "hello-world"
 * ```
 *
 * @return The string converted to kebab-case.
 */
fun String.toKebabCase(): String {
//    return this.fold("") { acc, c ->
//        if (c.isUpperCase()) acc + "-" + c.lowercaseChar() else acc + c
//    }.removePrefix("-")

    return this
        .replace(Regex("([a-z])([A-Z])"), "$1-$2") // Converts camelCase to kebab-case by adding a hyphen between lowercase and uppercase letters
        .replace(Regex("[_\\s]"), "-") // Replaces underscores and spaces with hyphens
        .lowercase() // Converts all characters to lowercase
}

/**
 * Converts the string to PascalCase format.
 *
 * Converts the string from snake_case, kebab-case, or other formats to PascalCase.
 *
 * Example:
 * ```
 * "hello_world".toPascalCase() // Returns "HelloWorld"
 * ```
 *
 * @return The string converted to PascalCase.
 */
fun String.toPascalCase(): String {
    return this
        .split(Regex("[-_\\s]")) // Splits the string by hyphens, underscores, or spaces
        .joinToString("") { it.replaceFirstChar { char -> char.uppercase() } } // Joins the parts into a single string, capitalizing the first character of each part

//    val parts = this.split(Regex("[-_\\s]")) // Divide por guiones, underscores y espacios
//        .filter { it.isNotEmpty() } // Elimina elementos vacíos si hay dobles separadores
//
//    return if (parts.isNotEmpty()) {
//        parts.drop(1).joinToString("") { it.replaceFirstChar { char -> char.uppercase() } } // Capitaliza las siguientes
//    } else {
//        this // Retorna la cadena original si está vacía
//    }
}

/**
 * Converts the string to its SHA-256 hash representation.
 *
 * This function computes the SHA-256 hash of the string using UTF-8 encoding and returns the result
 * as a hexadecimal string.
 *
 * @return The SHA-256 hash of the string as a hexadecimal string.
 */
fun String.toSha256(): String {
    val bytes = this.toByteArray(Charsets.UTF_8)
    val md = MessageDigest.getInstance("SHA-256")
    val digest = md.digest(bytes)
    return digest.fold("") { str, it -> str + "%02x".format(it) }
}

/**
 * Encodes the string using URL encoding format with UTF-8 charset.
 *
 * This function transforms the string into a format suitable for transmission in a URL.
 * It replaces spaces with `+` and other non-ASCII characters with `%` followed by hexadecimal digits.
 *
 * Example usage:
 * ```
 * val text = "Hello, World!"
 * val encodedText = text.toUrlEncoder()
 * println(encodedText) // Prints: "Hello%2C+World%21"
 * ```
 *
 * @return A new string that is URL encoded using UTF-8 charset.
 */
fun String.toUrlEncoder(): String {
    return URLEncoder.encode(this, StandardCharsets.UTF_8.toString())
}

/**
 * Decodes the URL encoded string using UTF-8 charset.
 *
 * This function reverses the URL encoding applied to a string. It converts percent-encoded characters
 * (e.g., `%20` for spaces) back to their original form. Additionally, it replaces `+` characters with spaces.
 *
 * Example usage:
 * ```
 * val encodedText = "Hello%2C+World%21"
 * val decodedText = encodedText.toUrlDecoder()
 * println(decodedText) // Prints: "Hello, World!"
 * ```
 *
 * @return A new string that is URL decoded using UTF-8 charset.
 */
fun String.toUrlDecoder(): String {
    return URLDecoder.decode(this, StandardCharsets.UTF_8.toString())
}

/**
 * Removes all whitespace characters (spaces, tabs, and newlines) from the string.
 *
 * Example usage:
 * ```
 * val text = "Hello, World!\nThis is an example."
 * val compactedText = text.compact()
 * println(compactedText) // Prints: "Hello,World!Thisisanexample."
 * ```
 *
 * @return A new string with all whitespace characters removed.
 */
fun String.removeWhiteSpaces(): String {
    return this.replace("\\s".toRegex(), "")
}

/**
 * Extension function to convert a string representing a date and time in ISO 8601 format
 * to a long representing the number of milliseconds since the epoch (1970-01-01T00:00:00Z).
 *
 * @return The number of milliseconds since the epoch as a Long.
 * @throws DateTimeParseException if the text cannot be parsed to an Instant.
 */
fun String.toEpochDateTimeLong(): Long {
    val instant = Instant.parse(this)
    return instant.toEpochMilli()
}

/**
 * Extension function to convert a JSON string to an object of the specified type [T].
 *
 * This function uses Gson to deserialize the JSON string into an object of type [T].
 * The deserialization process ensures that non-nullable fields are respected by applying a custom
 * [NonNullTypeAdapterFactory] that validates that non-null fields are not null during the process.
 *
 * The function handles potential errors that may occur during deserialization, including syntax errors
 * in the JSON string. If the JSON is not valid for the object, a [JsonSyntaxException] is thrown. Other
 * exceptions are caught and re-thrown after logging the stack trace for debugging purposes.
 *
 * Example usage:
 * ```
 * val jsonString = """{"id": 123, "name": "John Doe", "isActive": true}"""
 * val user: User = jsonString.toObject()
 * ```
 *
 * @return The deserialized object of type [T] if the JSON string is valid.
 * @throws JsonSyntaxException if the JSON string is not a valid representation of the object.
 * @throws Exception if any other error occurs during the deserialization process.
 */
inline fun <reified T> String.toObject(): T {
    return try {
        val gson = GsonBuilder()
            .registerTypeAdapterFactory(NonNullTypeAdapterFactory())
            .create()
        gson.fromJson(this, T::class.java)
    } catch (e1: JsonSyntaxException) {
        e1.printStackTrace()
        throw e1
    } catch (e: Exception) {
        e.printStackTrace()
        throw e
    }
}

/**
 * Custom TypeAdapterFactory for Gson to ensure Kotlin non-nullable fields are respected during deserialization.
 *
 * This factory intercepts the deserialization process and checks all non-nullable fields in a Kotlin class.
 * If any non-nullable field is found to be null during deserialization, it throws an `IllegalArgumentException`.
 * This prevents any Kotlin non-nullable fields from being accidentally set to null, which would violate the
 * guarantees of Kotlin's type system.
 *
 * It uses Kotlin reflection to inspect the fields of the class and ensure that all non-nullable fields are populated.
 *
 * Example usage:
 * ```
 * val gson = GsonBuilder()
 *     .registerTypeAdapterFactory(NonNullTypeAdapterFactory())
 *     .create()
 * val credential = gson.fromJson(json, DeferredCredential::class.java)
 * ```
 *
 * @see Gson
 * @see TypeAdapterFactory
 * @see TypeAdapter
 */
class NonNullTypeAdapterFactory : TypeAdapterFactory {
    override fun <T> create(gson: Gson, type: TypeToken<T>): TypeAdapter<T>? {
        val delegate = gson.getDelegateAdapter(this, type)
        val rawType = type.rawType

        // Check if the class is a Kotlin class
        if (!rawType.kotlin.isData && !rawType.kotlin.isCompanion) {
            return null // Only process Kotlin classes
        }

        return object : TypeAdapter<T>() {
            override fun write(out: JsonWriter, value: T) {
                delegate.write(out, value)
            }

            override fun read(input: JsonReader): T {
                val instance = delegate.read(input)

                // Validate non-nullable fields
                rawType.kotlin.memberProperties.forEach { property ->
                    if (!property.returnType.isMarkedNullable) { // Check if the property is non-nullable
                        val value = property.get(instance)
                        if (value == null) {
                            throw IllegalArgumentException("Field '${property.name}' in ${rawType.simpleName} cannot be null")
                        }
                    }
                }

                return instance
            }
        }
    }
}

/**
 * Checks if the compound name (the string) contains the search query, ignoring case and accents.
 *
 * @param searchQuery The search query to check within the compound name.
 * @return `true` if any part of the compound name contains the search query, `false` otherwise.
 */
fun String.containedInThePattern(searchQuery: String): Boolean {
    // 'Normalizer.Form.NFD' separates diacritical accents
    // '\p{InCombiningDiacriticalMarks}+' removing diacritical marks
    val normalize = { input: String ->
        Normalizer.normalize(input, Normalizer.Form.NFD).replace(Regex("\\p{InCombiningDiacriticalMarks}+"), "")
    }

    val normalizedParts = this.split(Regex("\\s+|[:,;]")).map(normalize)
    val normalizedSearchQuery = normalize(searchQuery)
    val pattern = normalizedSearchQuery.toRegex(RegexOption.IGNORE_CASE)

    return normalizedParts.any { part -> pattern.containsMatchIn(part) }
}

/**
 * Converts string json object to a map representation.
 *
 * @return A mutable map where keys are field names and values are field values of the string json object.
 */
fun String.toMap(): Map<*, *> {
    val gson = Gson()
    return gson.fromJson(this, Map::class.java) as Map<*, *>
}

/**
 * Converts string json object to a JsonElement using Gson.
 *
 * @return the corresponding JsonElement representation of the string json object.
 */
fun String.toJsonElement(): JsonElement {
    val gson = Gson()
    return gson.fromJson(this, JsonElement::class.java)
}


// endregion