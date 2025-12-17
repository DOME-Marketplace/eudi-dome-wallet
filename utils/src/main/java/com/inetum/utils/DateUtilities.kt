package com.inetum.utils

import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.withContext
import org.apache.commons.net.ntp.NTPUDPClient
import java.net.InetAddress
import java.time.Duration
import java.util.Date

/**
 * Retrieves the current time from an NTP server and returns it as a `Date` object.
 *
 * @return Date? - A `Date` object representing the current network time.
 *         Returns `null` if an error occurs while fetching the time.
 */
suspend fun getNetworkTime(): Date? = withContext(Dispatchers.IO) {
    try {
        val client = NTPUDPClient()
//        client.defaultTimeout = 5000 // 5 segundos de timeout @Deprecado
        client.setDefaultTimeout(Duration.ofMillis(5000)) // 5 segundos de timeout
        client.open()

        val inetAddress = InetAddress.getByName("time.google.com") // servidor NTP elegido
        val timeInfo = client.getTime(inetAddress)
        client.close()

        val ntpTime = timeInfo.message.transmitTimeStamp.time
        return@withContext Date(ntpTime)
    } catch (e: Exception) {
        e.printStackTrace()
        null
    }
}