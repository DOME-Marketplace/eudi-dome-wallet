package com.inetum.eudi_dome_wallet.ui.login

import android.os.Bundle
import android.util.Log
import android.view.KeyEvent
import android.view.View
import androidx.biometric.BiometricPrompt
import androidx.biometric.BiometricPrompt.PromptInfo
import androidx.core.content.ContextCompat
import androidx.lifecycle.ViewModelProvider
import com.inetum.eudi_dome_wallet.App
import com.inetum.eudi_dome_wallet.BuildConfig
import com.inetum.eudi_dome_wallet.R
import com.inetum.eudi_dome_wallet.common.classes.LogLevel
import com.inetum.eudi_dome_wallet.common.utils.AppUtils
import com.inetum.eudi_dome_wallet.databinding.ActivityLoginBinding
import com.inetum.eudi_dome_wallet.manager.IoCManager
import com.inetum.eudi_dome_wallet.ui.base.BaseActivityK
import com.inetum.eudi_dome_wallet.ui.base.BaseViewModel.Companion.lastInteractionTime
import com.inetum.eudi_dome_wallet.ui.base.BaseViewModel.Companion.previouslyLoggedIn
import com.inetum.eudi_dome_wallet.ui.base.BaseViewsUtils

class LoginActivity: BaseActivityK<ActivityLoginBinding, LoginViewModel>() {
    private lateinit var biometricPrompt: BiometricPrompt
    private lateinit var promptInfo: PromptInfo
    override fun onCreate(savedInstanceState: Bundle?) {
        IoCManager.getLogInputAdapter().log(LogLevel.DEBUG, TAG, "${AppUtils.getFunctionName()} execute")
        super.onCreate(savedInstanceState)

    }

    override fun onResume() {
        super.onResume()
        if (viewModel.hasBiometric.value == true &&
            viewModel.hasUnlockedWallet.value != true) {
            biometricPrompt.authenticate(promptInfo)
        }
    }
    override fun getAssociatedLayoutResource(): Int {
        return R.layout.activity_login
    }

    override fun initializeView(mBinding: ActivityLoginBinding) {
        super.initializeView(mBinding)
    }

    override fun attachViewListeners() {
        super.attachViewListeners()
        binding.etLoginPwd.onFocusChangeListener = BaseViewsUtils.createFocusChangeListener(binding.etLoginPwd, binding.tilLoginPwd)
        binding.etLoginPwd.setOnKeyListener(::onEtLoginPwdKey)
        binding.ibFingerButton.setOnClickListener(::onFingerButtonClick)

        prepareBiometric()
        setBiometric()
    }

    private fun prepareBiometric() {
        val executor = ContextCompat.getMainExecutor(this)
        biometricPrompt = BiometricPrompt(
            this,
            executor,
            BiometricCallback()
        )
    }

    private fun setBiometric() {
        promptInfo = PromptInfo.Builder()
            .setTitle(App.getStringResource(R.string.login_biometric_title))
            .setSubtitle(App.getStringResource(R.string.login_biometric_subtitle))
            .setNegativeButtonText(App.getStringResource(R.string.login_biometric_negative_button))
            .build()
    }
    override fun getAssociatedViewModel(): LoginViewModel {
        return ViewModelProvider(this)[LoginViewModel::class.java]
    }

    override fun setViewModelToBinding(binding: ActivityLoginBinding, viewModel: LoginViewModel) {
        binding.viewModel = viewModel
    }

    override fun attachViewModelListeners() {
        super.attachViewModelListeners()
        viewModel.errorPwd.observe(this, ::onErrorPwdChanged)

        /** Actualizamos el tiempo si acabamos de abrir el wallet. Para evitar que si el timer ha expirado
         * al ir a la home el OnResume capture el tiempo de expiración y vuelva a cerrar la pantalla  */
        viewModel.hasUnlockedWallet.observe(this, ::onHasUnlockWalletChanged)
    }
    private fun onErrorPwdChanged(errorPwd: String) {
        binding.tilLoginPwd.error = if (errorPwd == "") null else errorPwd
        binding.etLoginPwd.background =
            if (errorPwd == "")
                if (binding.tilLoginPwd.isFocused)
                    App.getDrawableResource(R.drawable.text_input_back_focused)
                else
                    App.getDrawableResource(R.drawable.text_input_shape)
            else
                App.getDrawableResource(R.drawable.text_input_back_error)
    }

    private fun onHasUnlockWalletChanged(hasUnlockedWallet: Boolean) {
        if (hasUnlockedWallet) {
            lastInteractionTime = System.currentTimeMillis() // NECESARIO Para actualizar logoutTimer
            previouslyLoggedIn = true // NECESARIO Para controlar si ya se ha hecho login previamente sin tener un last time previo

            IoCManager.getLogInputAdapter().log(LogLevel.INFO, TAG, "${AppUtils.getFunctionName()} previouslyLoggedIn change value: ${previouslyLoggedIn}")

        }
    }
    fun onClickLogin(view: View) {
        viewModel.checkLogin(false)
    }


    private fun onEtLoginPwdKey(view: View, keyCode: Int, event: KeyEvent): Boolean {
        if (event.action == KeyEvent.ACTION_DOWN && keyCode == KeyEvent.KEYCODE_ENTER) {
            viewModel.checkLogin(false)
            return true
        }
        return false
    }

    private fun onFingerButtonClick(view: View) {
        biometricPrompt.authenticate(
            promptInfo
        )
    }

    inner class BiometricCallback : BiometricPrompt.AuthenticationCallback() {
        override fun onAuthenticationError(errorCode: Int, errString: CharSequence) {
            super.onAuthenticationError(errorCode, errString)
            handleAuthenticationError(errorCode, errString)
        }

        override fun onAuthenticationSucceeded(result: BiometricPrompt.AuthenticationResult) {
            super.onAuthenticationSucceeded(result)
            handleAuthenticationSuccess()
        }

        override fun onAuthenticationFailed() {
            super.onAuthenticationFailed()
            handleAuthenticationFailed()
        }
    }

    private fun handleAuthenticationError(errorCode: Int, errString: CharSequence) {
        Log.d(TAG, "${AppUtils.getFunctionName()} Biometric error ($errorCode-$errString)")
        if (errorCode != BiometricPrompt.ERROR_USER_CANCELED && errorCode != BiometricPrompt.ERROR_NEGATIVE_BUTTON) {
            showToast(App.getStringResource(R.string.login_biometric_error), true)
        }
    }

    private fun handleAuthenticationSuccess() {
        Log.d(TAG, "${AppUtils.getFunctionName()} Biometric success")
        viewModel.checkLogin(true)
    }

    private fun handleAuthenticationFailed() {
        Log.d(TAG, "${AppUtils.getFunctionName()} Biometric failed")
        showToast(App.getStringResource(R.string.login_biometric_failed), true)
    }

}