package com.inetum.eudi_dome_wallet

import android.annotation.SuppressLint
import android.app.Application
import android.content.Context
import android.graphics.drawable.Drawable
import android.util.Log
import androidx.appcompat.app.AppCompatDelegate
import androidx.core.content.ContextCompat
import androidx.room.Room
import androidx.room.RoomDatabase
import com.inetum.eudi_dome_wallet.common.utils.AppUtils
import com.inetum.eudi_dome_wallet.infrastructure.persistence.localDB.eudiRoomDB.AppDatabaseEudi
import com.inetum.eudi_dome_wallet.manager.IoCManager
import net.sqlcipher.database.SQLiteDatabase
import net.sqlcipher.database.SupportFactory

class App : Application() {

    private val TAG : String = "DW:${(this::class.java.simpleName ?: "Unknown class")}"

    companion object {
        @SuppressLint("StaticFieldLeak")
        lateinit var context: Context
        var dbEudi: AppDatabaseEudi? = null
            private set

        @SuppressLint("StaticFieldLeak")
        private var builderEudi: RoomDatabase.Builder<AppDatabaseEudi>? = null
        const val DB_NAME_EUDI = "db-eudi"
        const val SPLASH_TIMER = 1000 // milisec
        const val SPLASH_COUNTDOWN = 1000 // 1 sec en milisec
        const val LOGOUT_MILISECS = 360000 // 6 minutos en milisec
        const val MIN_PWD_LENGTH = 8
        var language: String = BuildConfig.DEFAULT_LANGUAGE
            private set

        fun getStringResource(stringResource: Int): String = context.getString(stringResource)

        fun getStringResource(stringResource: Int, vararg formatArgs: Any): String =
            context.getString(stringResource, *formatArgs)


        fun getDrawableResource(drawableResource: Int): Drawable? =
            ContextCompat.getDrawable(context, drawableResource)

        fun getDBKey(did: String): String? {
            return if (did.isNotEmpty()) "$did${
                IoCManager.getInternalMemoryInputAdapter().getUserUnlockPin()
            }"
            else null
        }

        fun initializeDBEudi(didEudi: String) {
            val keyCompound = getDBKey(didEudi) ?: return
            val factory = SupportFactory(SQLiteDatabase.getBytes(keyCompound.toCharArray()))
            builderEudi?.openHelperFactory(factory)?.let {
                dbEudi = it.fallbackToDestructiveMigration().build()
            }
            if (dbEudi == null) throw NullPointerException("dbEudi is null")
        }
    }

    override fun onCreate() {
        super.onCreate()

        context = this
        AppCompatDelegate.setDefaultNightMode(AppCompatDelegate.MODE_NIGHT_NO)
        builderEudi =
            Room.databaseBuilder(applicationContext, AppDatabaseEudi::class.java, DB_NAME_EUDI)
        val didEudi = IoCManager.getInternalMemoryInputAdapter().getEudiDIDFromStorage()
        didEudi?.let {
            try {
                initializeDBEudi(it)
                Log.i(TAG, "${AppUtils.getFunctionName()} initialize EUDI DataBase correctly")
            } catch (e: Exception) {
                Log.e(TAG, "${AppUtils.getFunctionName()} ERROR initialize EUDI DataBase. ${e.message}", e)
            }
        }
        language = findLanguage()
    }

    private fun findLanguage(): String {
        return BuildConfig.DEFAULT_LANGUAGE
    }
}