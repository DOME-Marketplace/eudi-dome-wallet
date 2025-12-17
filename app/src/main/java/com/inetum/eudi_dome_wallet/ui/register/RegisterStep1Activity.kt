package com.inetum.eudi_dome_wallet.ui.register

import android.content.Intent
import android.os.Bundle
import android.view.View
import androidx.lifecycle.ViewModelProvider
import com.inetum.eudi_dome_wallet.BuildConfig
import com.inetum.eudi_dome_wallet.R
import com.inetum.eudi_dome_wallet.databinding.ActivityRegisterStep1Binding
import com.inetum.eudi_dome_wallet.ui.base.BaseActivityK
import com.inetum.eudi_dome_wallet.ui.base.BaseViewsUtils
import com.inetum.eudi_dome_wallet.ui.register.model.RegisterParams

class RegisterStep1Activity: BaseActivityK<ActivityRegisterStep1Binding, RegisterStep1ViewModel>() {

    // region Declarations ---------------------------------------------------------------------------------------------

    // region Constants
    // endregion

    // region Attributes

    // endregion
    // endregion

    // region View's Lifecycle -----------------------------------------------------------------------------------------

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)

        fixSoftKeyboard()
    }

    // endregion

    // region Initialization & Finalization ----------------------------------------------------------------------------

    // region View Initialization & Finalization -----------------------------------------------------------------------

    override fun getAssociatedLayoutResource(): Int {
        return R.layout.activity_register_step_1
    }

    override fun attachViewListeners() {
        super.attachViewListeners()

        binding.etRegisterPwd.onFocusChangeListener = BaseViewsUtils.createFocusChangeListener(
            binding.etRegisterPwd,
            binding.tilRegisterPwd
        )

        binding.etRegisterPwd2.onFocusChangeListener = BaseViewsUtils.createFocusChangeListener(
            binding.etRegisterPwd2,
            binding.tilRegisterPwd2
        )
    }

    // endregion

    // region ViewModel Initialization & Finalization ------------------------------------------------------------------

    override fun getAssociatedViewModel(): RegisterStep1ViewModel {
        return ViewModelProvider(this)[RegisterStep1ViewModel::class.java]
    }

    override fun attachViewModelListeners() {
        super.attachViewModelListeners()

        viewModel.errorPwd.observe(this, ::onErrorPwdChanged)
        viewModel.errorPwdCheck.observe(this, ::onErrorPwdCheckChanged)

    }

    override fun setViewModelToBinding(binding: ActivityRegisterStep1Binding, viewModel: RegisterStep1ViewModel) {
        binding.viewModel = viewModel
    }

    // endregion

    // endregion

    // region Data Management Methods ----------------------------------------------------------------------------------

    // endregion

    // region Control Event Handlers -----------------------------------------------------------------------------------

    // region Observers ------------------------------------------------------------------------------------------------

    private fun onErrorPwdChanged(errorPwd: String) {
        binding.tilRegisterPwd.error = errorPwd.ifEmpty { null }

    }

    private fun onErrorPwdCheckChanged(errorPwdCheck: String) {
        binding.tilRegisterPwd2.error = errorPwdCheck.ifEmpty { null }
    }

    private fun onRegisterParamsChanged(registerParams: RegisterParams?) {
        if (registerParams != null) {
            val nextStep = Intent(this, RegisterStep2Activity::class.java)
            nextStep.putExtra(RegisterParams::class.java.name, registerParams)
            startActivity(nextStep)
        }
    }

    // endregion

    // region Listeners ------------------------------------------------------------------------------------------------

    fun onClickBack(view: View) {
        super.onBackExecute()
    }

    fun onClickNextStep(view: View) {
        viewModel.onClickNextStep()
    }

    // endregion

    // region Callbacks ------------------------------------------------------------------------------------------------

    // endregion

    // endregion

    // region Other Methods --------------------------------------------------------------------------------------------

    // endregion

}