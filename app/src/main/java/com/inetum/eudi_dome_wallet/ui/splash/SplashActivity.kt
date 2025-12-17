package com.inetum.eudi_dome_wallet.ui.splash

import android.annotation.SuppressLint
import android.os.Bundle
import android.os.CountDownTimer
import android.util.Log
import androidx.lifecycle.ViewModelProvider
import com.inetum.eudi_dome_wallet.App
import com.inetum.eudi_dome_wallet.R
import com.inetum.eudi_dome_wallet.common.utils.AppUtils
import com.inetum.eudi_dome_wallet.databinding.ActivitySplashBinding
import com.inetum.eudi_dome_wallet.ui.base.BaseActivityK
import com.inetum.eudi_dome_wallet.ui.custom.CustomAlertDialog

@SuppressLint("CustomSplashScreen")
class SplashActivity: BaseActivityK<ActivitySplashBinding, SplashViewModel>() {
    // region Declarations ---------------------------------------------------------------------------------------------

    // region Constants
    // endregion

    // region Attributes
    private var cTimer: CountDownTimer? = null
    // endregion
    // endregion

    // region View's Lifecycle -----------------------------------------------------------------------------------------

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
    }

    override fun onResume() {
        super.onResume()
        startTimer()
    }

    override fun onDestroy() {
        super.onDestroy()
        cancelTimer() // To avoid memory leaks just in case
    }

    // endregion

    // region Initialization & Finalization ----------------------------------------------------------------------------

    // region View Initialization & Finalization -----------------------------------------------------------------------

    override fun getAssociatedLayoutResource(): Int {
        return R.layout.activity_splash
    }

    override fun populateView() {
        super.populateView()
    }

    // endregion

    // region ViewModel Initialization & Finalization ------------------------------------------------------------------

    override fun getAssociatedViewModel(): SplashViewModel {
        return ViewModelProvider(this)[SplashViewModel::class.java]
    }

    override fun attachViewModelListeners() {
        super.attachViewModelListeners()
        viewModel.alertDialogDeviceHasBeenRooted.observe(this, ::onDeviceHasBeenRootedChanged)

    }

    override fun setViewModelToBinding(binding: ActivitySplashBinding, viewModel: SplashViewModel) {
        binding.viewModel = viewModel
    }

    private fun onDeviceHasBeenRootedChanged(deviceHasBeenRooted: Boolean) {
        if (deviceHasBeenRooted) {
            val alertDialog = CustomAlertDialog(
                context = this,
                title = App.getStringResource(R.string.splash_root_error_title),
                message = App.getStringResource(R.string.splash_root_error_content),
                subTitle = "",
                positiveButtonTitle = App.getStringResource(R.string.generic_exit_button),
                negativeButtonTitle = null,
                App.getDrawableResource(R.drawable.icon_popup_ko)
            )

            showAlertDialogOneButton(
                alertDialog = alertDialog,
                kFunctionPositive = {
                    Log.d(TAG, "${AppUtils.getFunctionName()} User press button")
                    viewModel.finishActivity.postValue(true)
                }
            )
        }
    }

    private fun onDeviceHasBeenRootedChanged2(finishActivity: Boolean) {
        if (finishActivity) {
            val alertDialog = CustomAlertDialog(
                context = this,
                title = App.getStringResource(R.string.splash_root_error_title),
                message = App.getStringResource(R.string.splash_root_error_content),
                subTitle = "",
                positiveButtonTitle = App.getStringResource(R.string.generic_exit_button),
                negativeButtonTitle = App.getStringResource(R.string.generic_exit_button),
                icon = App.getDrawableResource(R.drawable.icon_popup_ko)
            )

            showAlertDialogTwoButton(
                alertDialog = alertDialog,
                kFunctionPositive = {
                    Log.d(TAG, "${AppUtils.getFunctionName()} User press POSITIVE button")
                    viewModel.finishActivity.postValue(true)
                },
                kFunctionNegative = {
                    Log.d(TAG, "${AppUtils.getFunctionName()} User press NEGATIVE button")
                    viewModel.finishActivity.postValue(true)
                }
            )
        }
    }

    // endregion

    // region Listeners ------------------------------------------------------------------------------------------------

    // endregion

    // region Callbacks ------------------------------------------------------------------------------------------------

    // endregion

    // endregion

    // region Other Methods --------------------------------------------------------------------------------------------
    private fun startTimer() {
        cTimer = object : CountDownTimer(App.SPLASH_TIMER.toLong(), App.SPLASH_COUNTDOWN.toLong()) {
            override fun onTick(millisUntilFinished: Long) {}
            override fun onFinish() {
                viewModel.startUpViewModel(intent)
            }
        }
        (cTimer as CountDownTimer).start()
    }

    private fun cancelTimer() {
        cTimer?.cancel()
    }
    // endregion
}