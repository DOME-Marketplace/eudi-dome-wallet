package com.inetum.utils

import com.google.gson.Gson
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.withContext
import org.apache.commons.net.ntp.NTPUDPClient
import java.net.HttpURLConnection
import java.net.InetAddress
import java.net.URI
import java.time.Duration
import java.time.Instant
import java.time.ZoneId
import java.time.format.DateTimeFormatter


/**
 * Generates the current time from internal system in milliseconds as epoch time represented.
 *
 * @return A current epoch time in milliseconds.
 */
fun getCurrentEpochTimeInMillis(): Long {
    return System.currentTimeMillis()
}

/**
 * Retrieves the current epoch time in milliseconds using the best available network source.
 *
 * First attempts to fetch time using the NTP protocol. If that fails (e.g., due to firewall restrictions),
 * it falls back to an HTTP-based time service.
 *
 * @return [Long] The current epoch time in milliseconds (UTC). Returns -1L if both attempts fail.
 */
suspend fun getNetworkEpochTimeInMillis(): Long = withContext(Dispatchers.IO) {
    val ntpTime = runCatching { getNTPEpochTimeInMillis() }
        .onFailure { println("NTP request failed: ${it.message}") }
        .getOrDefault(-1L)

    if (ntpTime != -1L) return@withContext ntpTime

    runCatching { getHTTPEpochTimeInMillis() }
        .onFailure { println("HTTP time service request failed: ${it.message}") }
        .getOrDefault(-1L)
}

/**
 * Retrieves the current time from an NTP server and returns it in epoch format (milliseconds since 1970).
 *
 * @return Long - The current time in milliseconds since January 1, 1970 (UTC).
 *         Returns -1L if an error occurs while fetching the time.
 */
suspend fun getNTPEpochTimeInMillis(): Long = withContext(Dispatchers.IO) {
    return@withContext try {
//        val client = NTPUDPClient().apply { defaultTimeout = 5000 } // Set a 5s timeout @Deprecado
        val client = NTPUDPClient().apply { setDefaultTimeout(Duration.ofMillis(5000)) } // Set a 5s timeout
        client.open()

        val inetAddress = InetAddress.getByName("time.google.com") // Use a reliable NTP server
        val timeInfo = client.getTime(inetAddress) // Get response from the server
        client.close()

        timeInfo.message.transmitTimeStamp.time // Return time in epoch format (ms)
    } catch (e: Exception) {
        e.printStackTrace()
        -1L // Return -1L if an error occurs
    }
}

/**
 * Retrieves the current time from an HTTP time-server and returns it in epoch format (milliseconds since 1970).
 *
 * @return Long - The current time in milliseconds since January 1, 1970 (UTC).
 *         Returns -1L if an error occurs while fetching the time.
 */
suspend fun getHTTPEpochTimeInMillis(): Long = withContext(Dispatchers.IO) {
    return@withContext try {
//        val uri = URI("https://worldtimeapi.org/api/timezone/Etc/UTC")
        val uri = URI("https://timeapi.io/api/Time/current/zone?timeZone=UTC")
//        val uri = URI("http://worldclockapi.com/api/json/utc/now")
        val url = uri.toURL()
        val conn = url.openConnection() as HttpURLConnection
        conn.requestMethod = "GET"
        conn.connectTimeout = 5000
        conn.readTimeout = 5000

        if (conn.responseCode == HttpURLConnection.HTTP_OK) {
            val response = conn.inputStream.bufferedReader().readText()
            val map = Gson().fromJson(response, Map::class.java) as Map<String, Any>
            val datetime = map["dateTime"] as String

            // Trim precision to 3 decimal places to avoid problems with Instant Object
            val safe = datetime.replace(Regex("(\\.\\d{3})\\d*"), "$1") + "Z"

            Instant.parse(safe).toEpochMilli()
        } else {
            -1L
        }
    } catch (e: Exception) {
        e.printStackTrace()
        -1L
    }
}

// region Extension Functions --------------------------------------------------------------------------------------

/**
 * Converts an epoch time represented as a [Long] to milliseconds.
 * If the value is in seconds (10 digits), it is multiplied by 1000 to convert to milliseconds.
 * If the value is already in milliseconds (13 digits), it is returned as is.
 *
 * @return The epoch time in milliseconds.
 */
fun Long.toMillis(): Long {
    return if (this < 1_000_000_000_000) this * 1000 else this
}

/**
 * Converts an epoch time represented as a [Long] to seconds.
 * If the value is in milliseconds (13 digits), it is divided by 1000 to convert to seconds.
 * If the value is already in seconds (10 digits), it is returned as is.
 *
 * @return The epoch time in seconds.
 */
fun Long.toSeconds(): Long {
    return if (this >= 1_000_000_000_000) this / 1000 else this
}

/**
 * Converts a Long representing epoch milliseconds to a formatted ISO 8601 string.
 *
 * @param pretty If true, formats the date in "dd/MM/yyyy" pattern, otherwise formats in ISO 8601 pattern "yyyy-MM-dd'T'HH:mm:ss'Z'".
 * @return The formatted date string.
 */
fun Long.toDateIso8601String(pretty: Boolean = false): String {
    val instant = Instant.ofEpochMilli(this.toMillis())
    val formatter = if (!pretty)
        DateTimeFormatter.ofPattern("yyyy-MM-dd'T'HH:mm:ss'Z'").withZone(ZoneId.of("UTC"))
    else
        DateTimeFormatter.ofPattern("dd/MM/yyyy").withZone(ZoneId.of("UTC"))
    return formatter.format(instant)
}

/**
 * Converts a Long representing epoch milliseconds to a formatted ISO 8601 string.
 *
 * @param pretty If true, formats the date in "dd/MM/yyyy HH.mm" pattern, otherwise formats in ISO 8601 pattern "yyyy-MM-dd'T'HH:mm:ss'Z'".
 * @return The formatted date string.
 */
fun Long.toDateAndHourIso8601String(pretty: Boolean = false): String {
    val instant = Instant.ofEpochMilli(this.toMillis())
    val formatter = if (!pretty)
        DateTimeFormatter.ofPattern("yyyy-MM-dd'T'HH:mm:ss'Z'").withZone(ZoneId.of("UTC"))
    else
        DateTimeFormatter.ofPattern("dd/MM/yyyy HH:mm").withZone(ZoneId.of("UTC"))
    return formatter.format(instant)
}

/**
 * Converts a Long representing epoch milliseconds to a formatted ISO 8601 string.
 *
 * @return The formatted date string in "MMMM yyy" pattern".
 */
fun Long.toSimpleDateMonthYearString(): String {
    val instant = Instant.ofEpochMilli(this)
    val formatter = DateTimeFormatter.ofPattern("MMMM yyy").withZone(ZoneId.of("UTC"))
    return formatter.format(instant)
}

// endregion