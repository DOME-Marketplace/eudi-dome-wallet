package com.inetum.eudi_dome_wallet.ui.register

import android.os.Bundle
import android.util.Log
import androidx.lifecycle.MutableLiveData
import com.inetum.eudi_dome_wallet.App
import com.inetum.eudi_dome_wallet.R
import com.inetum.eudi_dome_wallet.common.utils.AppUtils
import com.inetum.eudi_dome_wallet.common.utils.ValidationUtilsK
import com.inetum.eudi_dome_wallet.ui.base.BaseViewModel
import com.inetum.eudi_dome_wallet.ui.register.model.RegisterParams

class RegisterStep1ViewModel: BaseViewModel() {

    // region Declarations ---------------------------------------------------------------------------------------------

    // region Constants
    // endregion

    // region Attributes

    // endregion

    // region LivesData
    var unlockPin = MutableLiveData<String>()
    var unlockPinConfirm = MutableLiveData<String>()
    var errorPwd = MutableLiveData("")
    var errorPwdCheck = MutableLiveData("")
    // endregion
    // endregion

    // region ViewModel's Lifecycle ------------------------------------------------------------------------------------

    // endregion

    // region ViewModel Initialization & Finalization ------------------------------------------------------------------

    override fun startUpViewModel(extras: Bundle?) {
        super.startUpViewModel(extras)
    }

    override fun populateLivesData(extras: Bundle?) {
        super.populateLivesData(extras)
    }

    // endregion

    // region Actions Methods ------------------------------------------------------------------------------------------

    // region Private Methods ------------------------------------------------------------------------------------------

    // endregion

    // region Public Methods -------------------------------------------------------------------------------------------

    // endregion
    // endregion

    // region Control Event Handlers -----------------------------------------------------------------------------------

    // region Listeners ------------------------------------------------------------------------------------------------
    fun onClickNextStep() {
        if (!validateForm()) {
            Log.d(TAG, "${AppUtils.getFunctionName()} Form not validated.")
        } else {
            gatherParamsForNextStep()
        }
    }
    // endregion

    // region Callbacks ------------------------------------------------------------------------------------------------

    // endregion
    // endregion

    // region Other Methods --------------------------------------------------------------------------------------------

    private fun validateForm(): Boolean {
        val pin = unlockPin.value ?: throw NullPointerException("unlockPin.value null")
        val pinConfirm = unlockPinConfirm.value

        return when {
            // Empty fields
            pin.isEmpty() || pinConfirm.isNullOrEmpty() -> {
                populateErrors(R.string.register_error_empty_field)
                false
            }
            // Validation of pin length and composition
            !checkPinLength() || !ValidationUtilsK.isPwdValid(pin) -> {
                populateErrors(R.string.register_pwd_composition, R.string.register_error_validation)
                false
            }
            // Validation passwords do not match
            pin != pinConfirm -> {
                populateErrors(R.string.register_pwd_notconfirmed)
                false
            }
            // Not error
            else -> {
                clearErrors()
                true
            }
        }
    }

    private fun populateErrors(errorResId: Int, toastResId: Int = errorResId) {
        errorPwd.value = App.getStringResource(errorResId)
        errorPwdCheck.value = ""
        updateSnackBarInfoMessage(App.getStringResource(toastResId))
    }

    private fun clearErrors() {
        errorPwd.value = ""
        errorPwdCheck.value = ""
    }

    private fun checkPinLength(): Boolean {
        return (unlockPin.value?.length ?: 0) >= App.MIN_PWD_LENGTH
    }

    private fun gatherParamsForNextStep() {
        val key = RegisterParams::class.java.name
        val registerParams = RegisterParams(unlockPin.value!!, false)
        addToExtraBundle(key, registerParams)
        destination.value = RegisterStep2Activity::class.java
    }

    // endregion

}
