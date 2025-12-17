package com.inetum.eudi_dome_wallet.core.controllers.uxController

import android.content.Intent
import android.net.Uri
import android.util.Log
import androidx.appcompat.app.AppCompatActivity
import com.inetum.eudi_dome_wallet.common.utils.AppUtils
import com.inetum.eudi_dome_wallet.core.controllers.commonsController.DeepLinksController
import com.inetum.eudi_dome_wallet.ui.base.BaseViewModel
import com.inetum.eudi_dome_wallet.ui.splash.SplashActivity

object NavigationController {

    val TAG: String = "DW:${(this::class.java.simpleName ?: "Unknown class")}"

    private val defaultClass = SplashActivity::class.java

    fun navigate(
        activity: AppCompatActivity, mViewModel: BaseViewModel, clearNavigationStack: Boolean
    ) {
        val selectedNavigationClass =
            mViewModel.destination.value ?: defaultClass

        val intent = Intent(activity, selectedNavigationClass)

        if (mViewModel.extras != null) intent.putExtras(mViewModel.extras!!)


        if (!mViewModel.stringExtra.value.isNullOrEmpty()) {
            intent.putExtra(BaseViewModel.HAS_STRING_EXTRA, mViewModel.stringExtra.value)
        }
        if (clearNavigationStack) intent.flags =
            Intent.FLAG_ACTIVITY_NEW_TASK or Intent.FLAG_ACTIVITY_CLEAR_TASK

        activity.startActivity(intent)

        mViewModel.extras = null

        mViewModel.stringExtra.value = null
        mViewModel.destination.value = null
        mViewModel.isLoading.value = false
    }

    fun logoutNavigation(activity: AppCompatActivity, data: Uri?) {
        Log.d(
            TAG,
            "${AppUtils.getFunctionName()} Called with data --> (" + (data ?: "DATA IS NULL") + ")"
        )
        val intent = Intent(activity, SplashActivity::class.java)
        intent.flags = Intent.FLAG_ACTIVITY_NEW_TASK or Intent.FLAG_ACTIVITY_CLEAR_TASK
        if (DeepLinksController.checkDeeplink(data) != null) {
            Log.d(TAG, "${AppUtils.getFunctionName()} Intent contained deeplink ($data)")
            Log.d(TAG, "${AppUtils.getFunctionName()} Added URI to new intent")
            intent.data = data
        }
        activity.startActivity(intent)
    }
}