package com.inetum.eudi_dome_wallet.ui.login

import android.os.Bundle
import android.util.Log
import androidx.lifecycle.MutableLiveData
import androidx.lifecycle.viewModelScope
import com.inetum.eudi_dome_wallet.App
import com.inetum.eudi_dome_wallet.R
import com.inetum.eudi_dome_wallet.common.constants.IntentKeys
import com.inetum.eudi_dome_wallet.common.exception.CustomException
import com.inetum.eudi_dome_wallet.common.utils.AppUtils
import com.inetum.eudi_dome_wallet.core.controllers.uxController.BiometricController
import com.inetum.eudi_dome_wallet.core.controllers.uxController.BiometricController.BiometricStatus
import com.inetum.eudi_dome_wallet.core.controllers.uxController.DataHolder
import com.inetum.eudi_dome_wallet.core.models.eudi.presentations.VerificationOffer
import com.inetum.eudi_dome_wallet.manager.IoCManager
import com.inetum.eudi_dome_wallet.ui.base.BaseViewModel
import com.inetum.eudi_dome_wallet.ui.dataExchange.DataExchangeActivity
import com.inetum.eudi_dome_wallet.ui.home.MainActivity
import kotlinx.coroutines.launch

class LoginViewModel : BaseViewModel() {
    var unlockPin = MutableLiveData<String>()
    var hasBiometric = MutableLiveData<Boolean>()
    var welcome = MutableLiveData<String>()
    var errorPwd = MutableLiveData("")

    var credentialsValid = false

    var hasUnlockedWallet = MutableLiveData(false)
    override fun startUpViewModel(extras: Bundle?) {
        super.startUpViewModel(extras)
        checkBiometricStatus()
        populateWelcome()
    }

    private fun checkBiometricStatus() {
        val biometricStatus = BiometricController.isBiometricUsable(App.context)

        val userWantsBiometric =
            IoCManager.getInternalMemoryInputAdapter().getUserWantsToUseBiometricAuthentication()

        Log.d(TAG, "${AppUtils.getFunctionName()} userWantsBiometric: $userWantsBiometric")
        hasBiometric.value = biometricStatus == BiometricStatus.Enabled && userWantsBiometric
    }

    private fun populateWelcome() {
        val userNickname = DataHolder.userNickname
        welcome.postValue(
            String.format(
                App.getStringResource(R.string.login_welcome_title), userNickname
            )
        )
    }

    fun checkLogin(isFromBiometricsOrPreLogged: Boolean) {
        if (isFromBiometricsOrPreLogged) {
            doLogin()
            return
        }

        val pin = unlockPin.value ?: ""
        if (IoCManager.getInternalMemoryInputAdapter().checkPassword(pin)) {
            doLogin()
        } else {
            errorPwd.value = App.getStringResource(R.string.login_form_wrong_password)
            updateSnackBarInfoMessage(App.getStringResource(R.string.login_toast_wrong_password))
        }
    }

    private fun doLogin() {
        viewModelScope.launch {
            try {
                isLoading.value = true
                credentialsValid = true
                hasUnlockedWallet.postValue(true)
                nextActionAfterWalletOpened()

            } catch (e: CustomException) {
                Log.w(TAG, "${AppUtils.getFunctionName()} Custom exception: ${e.message}", e)
                updateSnackBarInfoMessage(e.userMessage)

            } catch (e: Exception) {
                Log.e(TAG, "${AppUtils.getFunctionName()} General exception: ${e.message}", e)
                updateSnackBarInfoMessage(App.getStringResource(R.string.generic_error))

            } finally {
                isLoading.postValue(false)
            }
        }

    }

    private fun nextActionAfterWalletOpened() {
        val credentialOfferingJsonString =
            getFromExtraBundle(IntentKeys.Eudi.CREDENTIAL_OFFERING, String::class.java)

        val verificationOffer =
            getFromExtraBundle(IntentKeys.Eudi.PRESENTATION_REQUEST, VerificationOffer::class.java)

        if (credentialOfferingJsonString == null && verificationOffer == null && credentialsValid) { // Not DEEPLINK Action

            clearBackStack.postValue(true)
            destination.postValue(MainActivity::class.java)

        }
    }

}