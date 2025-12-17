package com.inetum.eudi_dome_wallet.ui.register

import android.app.Activity
import android.content.Intent
import android.os.Build
import android.os.Bundle
import android.util.Log
import android.view.View
import androidx.activity.result.ActivityResult
import androidx.activity.result.ActivityResultLauncher
import androidx.activity.result.contract.ActivityResultContracts
import androidx.lifecycle.ViewModelProvider
import com.inetum.eudi_dome_wallet.BuildConfig
import com.inetum.eudi_dome_wallet.R
import com.inetum.eudi_dome_wallet.common.classes.LogLevel
import com.inetum.eudi_dome_wallet.common.utils.AppUtils
import com.inetum.eudi_dome_wallet.core.controllers.uxController.BiometricController
import com.inetum.eudi_dome_wallet.core.controllers.uxController.DataHolder
import com.inetum.eudi_dome_wallet.databinding.ActivityRegisterStep2Binding
import com.inetum.eudi_dome_wallet.manager.IoCManager
import com.inetum.eudi_dome_wallet.ui.base.BaseActivityK
import com.inetum.eudi_dome_wallet.ui.base.BaseViewModel.Companion.lastInteractionTime
import com.inetum.eudi_dome_wallet.ui.base.BaseViewModel.Companion.previouslyLoggedIn
import com.inetum.eudi_dome_wallet.ui.base.BaseViewsUtils

class RegisterStep2Activity: BaseActivityK<ActivityRegisterStep2Binding, RegisterStep2ViewModel>() {

    // region Declarations ---------------------------------------------------------------------------------------------

    // region Constants
    // endregion

    // region Attributes

    private lateinit var biometricEnrolledLauncher: ActivityResultLauncher<Intent>

    // endregion
    // endregion

    // region View's Lifecycle -----------------------------------------------------------------------------------------
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)

        super.fixSoftKeyboard()

    }

    override fun onResume() {
        super.onResume()
        if (DataHolder.hasAcceptedLegalTerms) {
            viewModel.enableTerms.postValue(true)
            viewModel.termsAccepted.postValue(true)
        }
    }
    // endregion

    // region Initialization & Finalization ----------------------------------------------------------------------------

    // region View Initialization & Finalization -----------------------------------------------------------------------

    override fun getAssociatedLayoutResource(): Int {
        return R.layout.activity_register_step_2
    }

    override fun attachViewListeners() {
        super.attachViewListeners()

        biometricEnrolledLauncher = this.registerForActivityResult(ActivityResultContracts.StartActivityForResult(), ::onBiometricEnrolledResult)

        binding.etRegisterNick.onFocusChangeListener = BaseViewsUtils.createFocusChangeListener(
            binding.etRegisterNick,
            binding.tilRegisterNick
        )
    }

    // endregion

    // region ViewModel Initialization & Finalization ------------------------------------------------------------------

    override fun getAssociatedViewModel(): RegisterStep2ViewModel {
        return ViewModelProvider(this)[RegisterStep2ViewModel::class.java]
    }

    override fun attachViewModelListeners() {
        super.attachViewModelListeners()

        viewModel.errorUser.observe(this, ::onErrorPwdChanged)

        viewModel.walletKeyPairCreated.observe(this, ::onWalletCreatedChanged)
    }

    override fun setViewModelToBinding(binding: ActivityRegisterStep2Binding, viewModel: RegisterStep2ViewModel) {
        binding.viewModel = viewModel
    }

    // endregion

    // endregion

    // region Data Management Methods ----------------------------------------------------------------------------------

    // endregion

    // region Control Event Handlers -----------------------------------------------------------------------------------

    // region Observers ------------------------------------------------------------------------------------------------

    private fun onErrorPwdChanged(errorUser: String) {
        binding.tilRegisterNick.error = errorUser.ifEmpty { null }
    }

    private fun onWalletCreatedChanged(walletCreated: Boolean) {
        if (walletCreated) {
            previouslyLoggedIn = true
            IoCManager.getLogInputAdapter().log(LogLevel.INFO, TAG, "${AppUtils.getFunctionName()} previouslyLoggedIn change value: ${previouslyLoggedIn}")
            lastInteractionTime = System.currentTimeMillis()
        }
    }

    // endregion

    // region Listeners ------------------------------------------------------------------------------------------------

    fun onClickBack(view: View) {
        super.onBackExecute()
    }

    fun onClickToLegal(view: View) {
        viewModel.onClickToLegal()
    }

    fun onClickFinish(view: View) {
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.R) {
            if (viewModel.useBiometric.value == true && viewModel.biometricStatus == BiometricController.BiometricStatus.NonEnrolled) {
                biometricEnrolledLauncher.launch(BiometricController.enrollBiometric())
            }
        }
        viewModel.onClickFinish()
    }

    // endregion

    // region Callbacks ------------------------------------------------------------------------------------------------
    private fun onBiometricEnrolledResult(result: ActivityResult) {
        Log.d(TAG, "${AppUtils.getFunctionName()} execute; result: $result")
        if (result.resultCode == Activity.RESULT_OK) {
            Log.d(TAG, "${AppUtils.getFunctionName()} resultCode: OK")
        }
    }
    // endregion

    // endregion

    // region Other Methods --------------------------------------------------------------------------------------------

    // endregion

}