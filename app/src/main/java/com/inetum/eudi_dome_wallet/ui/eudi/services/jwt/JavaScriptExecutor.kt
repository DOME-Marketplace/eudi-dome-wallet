package com.inetum.eudi_dome_wallet.ui.eudi.services.jwt

import android.content.Context
import android.util.Log
import androidx.concurrent.futures.await
import androidx.javascriptengine.JavaScriptIsolate
import androidx.javascriptengine.JavaScriptSandbox
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.withContext
import java.io.BufferedReader
import java.io.InputStreamReader
import java.util.concurrent.TimeUnit

class JavaScriptExecutor(private val context: Context) {
    private val TAG: String = "DW:${(this::class.java.simpleName ?: "Unknown class")}"
    private val JAVASCRIPT_MAX_TIME_EXECUTE = 10L

    private lateinit var jsSandbox: JavaScriptSandbox
    private var jsIsolate: JavaScriptIsolate? = null

    suspend fun init() {
        if (JavaScriptSandbox.isSupported()) {
            jsSandbox = JavaScriptSandbox.createConnectedInstanceAsync(context).await()
            jsIsolate = jsSandbox.createIsolate()
            val consoleLogger = ConsoleLogger()
            jsIsolate?.setConsoleCallback(consoleLogger)
        } else {
            throw UnsupportedOperationException("JavaScriptSandbox is not supported on this device.")
        }
    }

    suspend fun executeJavaScript(script: String, libraryFileName: String): String? {
        val isolate = jsIsolate ?: throw IllegalStateException("Isolate is not initialized")
        val fileContent = loadScriptFromAssets(libraryFileName)
        val environmentSimulation = """
        var window = {}; // Simulación básica de `window`
            
        var navigator = {
            language: "en-US"
        };

        var env = {
            PATH: "/usr/bin",
            LANG: "en-US.UTF-8",
            PWD: "/",
            HOME: "/home",
            TMP: "/tmp"
        };
        
        class TextEncoder {
            encode(str) {
                 // Implementación simplificada para simular TextEncoder
                 return new Uint8Array([...str].map(c => c.charCodeAt(0)));
            }
        }
                
        class TextDecoder {
            constructor() {}
            decode(arr) {
                 // Implementación simplificada para simular TextDecoder
                 return String.fromCharCode(...arr);
            }
        }
        
    """.trimIndent()
        val fullScript = "$environmentSimulation\n$fileContent\n$script"

        return withContext(Dispatchers.IO) {
            try {
                val resultFuture = isolate.evaluateJavaScriptAsync(fullScript)
                resultFuture.get(JAVASCRIPT_MAX_TIME_EXECUTE, TimeUnit.SECONDS)
            } catch (e: Exception) {
                Log.e(
                    TAG,
                    "${(object {}.javaClass.enclosingMethod?.name ?: "Unknown function")}() ${e.message}",
                    e
                )
                null
            }
        }
    }

    private fun loadScriptFromAssets(fileName: String): String {
        val assetManager = context.assets
        val inputStream = assetManager.open(fileName)
        val bufferedReader = BufferedReader(InputStreamReader(inputStream))
        return bufferedReader.use { it.readText() }
    }

    fun close() {
        jsIsolate?.close()
        jsSandbox.close()
    }
}