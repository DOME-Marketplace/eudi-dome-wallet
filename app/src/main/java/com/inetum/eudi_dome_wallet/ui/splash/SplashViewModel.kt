package com.inetum.eudi_dome_wallet.ui.splash

import android.content.Intent
import android.util.Log
import androidx.lifecycle.LiveData
import androidx.lifecycle.MutableLiveData
import androidx.lifecycle.viewModelScope
import com.inetum.eudi_dome_wallet.App
import com.inetum.eudi_dome_wallet.BuildConfig
import com.inetum.eudi_dome_wallet.R
import com.inetum.eudi_dome_wallet.common.classes.LogLevel
import com.inetum.eudi_dome_wallet.common.exception.CustomException
import com.inetum.eudi_dome_wallet.common.utils.AppUtils
import com.inetum.eudi_dome_wallet.manager.IoCManager
import com.inetum.eudi_dome_wallet.ui.base.BaseViewModel
import com.inetum.eudi_dome_wallet.ui.home.MainActivity
import com.inetum.eudi_dome_wallet.ui.login.LoginActivity
import com.inetum.eudi_dome_wallet.ui.onboarding.OnboardingActivity
import com.inetum.eudi_dome_wallet.ui.register.RegisterStep0Activity
import com.scottyab.rootbeer.RootBeer
import kotlinx.coroutines.launch

/**
 * This is the ViewModel that is initially loaded when opening the wallet and is responsible for reading the DEEPLINKS
 * and therefore knowing and navigating, depending on the action, the next class that is needed.
 */
class SplashViewModel : BaseViewModel() {
    private var hasDoneOnboarding = false
    private var registrationCompleted = false

    private val _alertDialogDeviceHasBeenRooted = MutableLiveData<Boolean>()
    val alertDialogDeviceHasBeenRooted: LiveData<Boolean> get() = _alertDialogDeviceHasBeenRooted

    fun startUpViewModel(intent: Intent) {

        if (checkDeviceIsRooted()) {
            _alertDialogDeviceHasBeenRooted.postValue(true)
        } else {
            continueLoadingStartUpViewModel(intent)
        }
    }

    /**
     * Required to be run at least 1 time
     */
    private fun checkDeviceIsRooted(): Boolean {
        if (BuildConfig.ANTI_ROOTKIT_CHECK_ENABLED) {
            val antiRoot = RootBeer(App.context)
            if (BuildConfig.ANTI_ROOTKIT_CHECK_ENABLED && antiRoot.isRooted) {
                return true
            }
        }
        return false
    }

    private fun continueLoadingStartUpViewModel(intent: Intent) {
        viewModelScope.launch {
            try {

                readSharedPreferences()
                Log.i(
                    TAG,
                    "${AppUtils.getFunctionName()} startFlowNoDeeplink naturally, without error"
                )
                startFlowNoDeeplink()
            } catch (e: CustomException) {
                Log.w(
                    TAG,
                    "${AppUtils.getFunctionName()} Custom exception: ${e.message}. ${e.userMessage}",
                    e
                )
                updateSnackBarInfoMessage(e.userMessage)

                Log.e(
                    TAG,
                    "${AppUtils.getFunctionName()} startFlowNoDeeplink due to an error that occurred"
                )
                startFlowNoDeeplink()

            } catch (e: Exception) {
                Log.e(TAG, "${AppUtils.getFunctionName()} General exception: ${e.message}", e)
                updateSnackBarInfoMessage(App.getStringResource(R.string.generic_error))

                Log.e(
                    TAG,
                    "${AppUtils.getFunctionName()} startFlowNoDeeplink due to an error that occurred"
                )
                startFlowNoDeeplink()

            }

        }
    }
    /**
     * This method is responsible for redirecting to the corresponding activity in the case that
     * you enter without a deeplink or with an incorrect deeplink.
     */
    private suspend fun startFlowNoDeeplink() {
        IoCManager.getLogInputAdapter()
            .log(LogLevel.DEBUG, TAG, "${AppUtils.getFunctionName()} execute")
        val hasActiveSession = previouslyLoggedIn
        when {
            !hasDoneOnboarding -> { // If the onboarding has not been done, we go to the onboarding screen (only once).
                IoCManager.getLogInputAdapter().log(
                    LogLevel.DEBUG,
                    TAG,
                    "${AppUtils.getFunctionName()} Navigation to OnboardingActivity { hasDoneOnboarding: $hasDoneOnboarding }"
                )
                destination.postValue(OnboardingActivity::class.java)
            }

            !registrationCompleted -> { // If the registration has not been done, we go to the register screen (only once).
                IoCManager.getLogInputAdapter().log(
                    LogLevel.DEBUG,
                    TAG,
                    "${AppUtils.getFunctionName()} Navigation to LoginActivity RegisterActivity { registrationCompleted: $registrationCompleted }"
                )
                destination.postValue(RegisterStep0Activity::class.java)
            }

            hasActiveSession -> { // If the login has already been done and has not expired, we go to the home screen.
                IoCManager.getLogInputAdapter().log(
                    LogLevel.DEBUG,
                    TAG,
                    "${AppUtils.getFunctionName()} Navigation to LoginActivity MainActivity { hasActiveSession: $hasActiveSession }"
                )
                clearBackStack.postValue(true)
                destination.postValue(MainActivity::class.java)
                finishActivity.postValue(true)
            }

            else -> { // Otherwise we go to the login screen.
                destination.postValue(LoginActivity::class.java)
                finishActivity.postValue(true)
            }
        }

    }
    private fun readSharedPreferences() {

        hasDoneOnboarding = IoCManager.getInternalMemoryInputAdapter().firstTime()
        registrationCompleted =
            IoCManager.getInternalMemoryInputAdapter().getRegistrationCompletedFromStorage()
    }
}