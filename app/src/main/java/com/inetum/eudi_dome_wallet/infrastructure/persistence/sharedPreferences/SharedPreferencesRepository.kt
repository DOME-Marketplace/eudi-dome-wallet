package com.inetum.eudi_dome_wallet.infrastructure.persistence.sharedPreferences

import android.content.SharedPreferences

class SharedPreferencesRepository(private val sharedPreferences: SharedPreferences)  {
    enum class PreferenceType {
        STRING,
        BOOLEAN,
        INT
    }
    fun storePreference(key: String, value: Any, type: PreferenceType): Boolean {
        var success = true
        try {
            val myEditor = sharedPreferences.edit()
            when (type) {
                PreferenceType.STRING -> myEditor.putString(key, value as String)
                PreferenceType.BOOLEAN -> myEditor.putBoolean(key, value as Boolean)
                PreferenceType.INT -> myEditor.putInt(key, value as Int)
            }
            myEditor.apply()
        } catch (e: Exception) {
            e.printStackTrace()
            success = false
        }
        return success
    }

    fun readPreference(key: String, type: PreferenceType): Any? {
        try {
            return when (type) {
                PreferenceType.STRING -> sharedPreferences.getString(key, "")
                PreferenceType.BOOLEAN -> sharedPreferences.getBoolean(key, false)
                PreferenceType.INT -> sharedPreferences.getInt(key, -1)
            }
        } catch (e: java.lang.Exception) {
            e.printStackTrace()
            return null
        }
    }

    fun deleteAllSharedPreferences() {
        val editor: SharedPreferences.Editor = sharedPreferences.edit()
        editor.clear()
        editor.apply()
    }
    fun getSharedPreferences(): SharedPreferences {
        return sharedPreferences
    }
}