package com.inetum.eudi_dome_wallet.ui.eudi

import android.content.Context
import android.util.Log
import com.inetum.eudi_dome_wallet.ui.eudi.services.jwt.JavaScriptExecutor
import com.nimbusds.jose.shaded.gson.Gson
import com.nimbusds.jose.shaded.gson.JsonElement
import io.ipfs.multibase.Multibase
import org.bouncycastle.jce.ECNamedCurveTable
import org.bouncycastle.math.ec.ECPoint
import org.json.JSONException
import org.json.JSONObject
import java.math.BigInteger
import java.security.KeyPair
import java.security.interfaces.ECPrivateKey

class EudiDidService(private val context: Context) {

    private val TAG: String = "DW:${(this::class.java.simpleName ?: "Unknown class")}"

    private val JAVASCRIPT_LIBRARY_NAME = "inetum-cef-eudi-bundle-1.0.0.js"

    suspend fun didCreation(keyPair: KeyPair): String {
        val privateKey = keyPair.private as ECPrivateKey

        val s = privateKey.s
        val privateKeyBytes = s.toByteArray().let {
            if (it.size == 33 && it[0] == 0.toByte()) {
                it.copyOfRange(1, it.size)
            } else if (it.size < 32) {
                ByteArray(32 - it.size) + it
            } else {
                it
            }
        }

        val params = ECNamedCurveTable.getParameterSpec("secp256r1")
        val G = params.g
        val d = BigInteger(1, privateKeyBytes)
        val q: ECPoint = G.multiply(d).normalize()
        val publicKeyCompressed = q.getEncoded(true) // true = formato comprimido
        val multicodecPrefix = byteArrayOf(0x80.toByte(), 0x24)
        val prefixedKey = multicodecPrefix + publicKeyCompressed
        val multibase = Multibase.encode(Multibase.Base.Base58BTC, prefixedKey)
        val did = "did:key:$multibase"

        return did
    }

    suspend fun getDidDocumentStringByDid(did: String): String {
        val didDocument = executeScriptGetDidDocument(did).asJsonObject
        val didDocumentString = didDocument.get("didDocument")
        return didDocumentString.toString().replace("\\/", "/")
    }

    private suspend fun executeScriptGetDidDocument(param: String): JsonElement {

        val result = executeScriptFromParam("getDidDocument", param)

        val json = try {
            val gson = Gson()
            gson.fromJson(result, JsonElement::class.java)
        } catch (e: Exception) {
            throw RuntimeException("didDocument json error", e)
        }

        return json
    }

    suspend fun executeScriptFromParam(jsFunctionName: String, param: String): String {
        Log.d(
            TAG,
            "${(object {}.javaClass.enclosingMethod?.name ?: "Unknown function")}() Invoke js function '$jsFunctionName', with param: $param"
        )

        val jsExecutor = JavaScriptExecutor(context)

        try {

            jsExecutor.init()
            val escapedParam = JSONObject.quote(param)

            val script = """
              $jsFunctionName($escapedParam)
    """.trimIndent()
            val result = jsExecutor.executeJavaScript(script, JAVASCRIPT_LIBRARY_NAME)
                ?: throw NullPointerException("result null")

            Log.d(
                TAG,
                "${(object {}.javaClass.enclosingMethod?.name ?: "Unknown function")}() result: ${result}"
            )
            val json = try {
                JSONObject(result)
            } catch (e: JSONException) {
                Log.e(
                    TAG,
                    "${(object {}.javaClass.enclosingMethod?.name ?: "Unknown function")}() Error parsing json",
                    e
                )
                throw RuntimeException("Error parsing json", e)
            }

            val success = json.getBoolean("success")

            if (!success) {
                Log.e(
                    TAG,
                    "${(object {}.javaClass.enclosingMethod?.name ?: "Unknown function")}() Error received js function '${jsFunctionName}', success ${success}"
                )
                throw RuntimeException(
                    "Error received js function '${jsFunctionName}', success ${success}. Error: ${
                        json.getString(
                            "error"
                        )
                    }"
                )
            }

            return json.getString("content")

        } catch (e: Exception) {
            Log.e(
                TAG,
                "${(object {}.javaClass.enclosingMethod?.name ?: "Unknown function")}() Error invoke js function '$jsFunctionName'",
                e
            )
            throw e
        } finally {
            jsExecutor.close()
        }
    }
}