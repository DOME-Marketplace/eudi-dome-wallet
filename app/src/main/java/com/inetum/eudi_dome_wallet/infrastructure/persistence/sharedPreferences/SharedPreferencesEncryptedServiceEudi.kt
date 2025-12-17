package com.inetum.eudi_dome_wallet.infrastructure.persistence.sharedPreferences

import android.content.Context
import android.content.SharedPreferences
import android.content.pm.PackageManager
import android.os.Build
import android.security.keystore.KeyGenParameterSpec
import android.security.keystore.KeyProperties
import android.util.Log
import androidx.security.crypto.EncryptedSharedPreferences
import androidx.security.crypto.MasterKey
import java.io.IOException
import java.security.GeneralSecurityException

class SharedPreferencesEncryptedServiceEudi {
    private val TAG : String = this::class.java.simpleName

    private val PREFERENCES = "wallet_prefs_eudi"

    private val sharedPreferencesRepository: SharedPreferencesRepository

    constructor(context: Context) {
        val sharedPreferences = getSharedPreferences(context) ?: throw RuntimeException("Error getting Shared Preferences")
        sharedPreferencesRepository = SharedPreferencesRepository(sharedPreferences)
    }

    fun storePreference(key: String, value: Any, type: SharedPreferencesRepository.PreferenceType): Boolean {
        return sharedPreferencesRepository.storePreference(key, value, type)
    }

    fun readPreference(key: String, type: SharedPreferencesRepository.PreferenceType): Any? {
        return sharedPreferencesRepository.readPreference(key, type)
    }

    fun deleteAllSharedPreferences() {
        return sharedPreferencesRepository.deleteAllSharedPreferences()
    }

    fun getCompleteSharedPreferences(): SharedPreferences {
        return sharedPreferencesRepository.getSharedPreferences()
    }

    private fun getSharedPreferences(context: Context): SharedPreferences? {
        val sharedPreferences: SharedPreferences = try {
            val masterKey = getMasterKey(context)
            EncryptedSharedPreferences.create(
                context,
                PREFERENCES,
                masterKey,
                EncryptedSharedPreferences.PrefKeyEncryptionScheme.AES256_SIV,
                EncryptedSharedPreferences.PrefValueEncryptionScheme.AES256_GCM
            )
        } catch (e: GeneralSecurityException) {
            e.printStackTrace()
            return null
        } catch (e: IOException) {
            e.printStackTrace()
            return null
        }
        return sharedPreferences
    }

    @Throws(GeneralSecurityException::class, IOException::class)
    private fun getMasterKey(context: Context): MasterKey {
        var usedStrongBox = false
        var spec: KeyGenParameterSpec
        var masterKey: MasterKey? = null
        val specBuild = KeyGenParameterSpec.Builder(
            MasterKey.DEFAULT_MASTER_KEY_ALIAS,
            KeyProperties.PURPOSE_ENCRYPT or KeyProperties.PURPOSE_DECRYPT
        )
            .setBlockModes(KeyProperties.BLOCK_MODE_GCM)
            .setEncryptionPaddings(KeyProperties.ENCRYPTION_PADDING_NONE)
            .setKeySize(MasterKey.DEFAULT_AES_GCM_MASTER_KEY_SIZE)
        if (context.packageManager.hasSystemFeature(PackageManager.FEATURE_STRONGBOX_KEYSTORE) &&
            Build.VERSION.SDK_INT >= Build.VERSION_CODES.P
        ) {
            try {
                specBuild.setIsStrongBoxBacked(true)
                spec = specBuild.build()
                masterKey = MasterKey.Builder(context)
                    .setKeyGenParameterSpec(spec)
                    .setRequestStrongBoxBacked(true)
                    .build()
                usedStrongBox = true
            } catch (ex: java.lang.Exception) {
                Log.d(
                    TAG,
                    "[StorageController.SharedPreferences] Error when trying to use StrongBox!$ex"
                )
                usedStrongBox = false
            }
        }
        if (!usedStrongBox) {
            spec = specBuild.build()
            masterKey = MasterKey.Builder(context)
                .setKeyGenParameterSpec(spec)
                .build()
        }
        return masterKey!!
    }
}