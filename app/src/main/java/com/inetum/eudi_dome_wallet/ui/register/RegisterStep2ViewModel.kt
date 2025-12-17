package com.inetum.eudi_dome_wallet.ui.register

import android.os.Bundle
import android.util.Log
import androidx.lifecycle.MutableLiveData
import androidx.lifecycle.viewModelScope
import com.inetum.eudi_dome_wallet.App
import com.inetum.eudi_dome_wallet.R
import com.inetum.eudi_dome_wallet.common.exception.CustomException
import com.inetum.eudi_dome_wallet.common.utils.AppUtils
import com.inetum.eudi_dome_wallet.core.controllers.uxController.BiometricController
import com.inetum.eudi_dome_wallet.core.controllers.uxController.BiometricController.BiometricStatus
import com.inetum.eudi_dome_wallet.manager.IoCManager
import com.inetum.eudi_dome_wallet.ui.base.BaseViewModel
import com.inetum.eudi_dome_wallet.ui.home.MainActivity
import com.inetum.eudi_dome_wallet.ui.legalTerms.LegalTermsActivity
import com.inetum.eudi_dome_wallet.ui.register.model.RegisterParams
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.launch
import kotlinx.coroutines.withContext

class RegisterStep2ViewModel : BaseViewModel() {

    // region Declarations ---------------------------------------------------------------------------------------------

    // region Constants
    // endregion

    // region Attributes
    var biometricStatus: BiometricStatus? = null
        private set

    private var nickname: String? = null
    private var registerParams: RegisterParams? = null

    // endregion

    // region LivesData
    var nick = MutableLiveData<String>()
    var errorUser = MutableLiveData("")
    var walletKeyPairCreated = MutableLiveData(false)
    var useBiometric = MutableLiveData<Boolean?>()
    var hasBiometric = MutableLiveData<Boolean>()
    var termsAccepted = MutableLiveData(false)
    var enableTerms = MutableLiveData(false)
    // endregion
    // endregion

    // region ViewModel's Lifecycle ------------------------------------------------------------------------------------

    // endregion

    // region ViewModel Initialization & Finalization ------------------------------------------------------------------

    override fun startUpViewModel(extras: Bundle?) {
        super.startUpViewModel(extras)
    }

    override fun populateAttributes(extras: Bundle?) {
        super.populateAttributes(extras)

        populateBiometricStatus()

        val key = RegisterParams::class.java.name
        registerParams = getFromExtraBundle(key, RegisterParams::class.java)
        extras?.remove(key)
    }

    private fun populateBiometricStatus() {
        biometricStatus = BiometricController.isBiometricUsable(App.context)
        hasBiometric.value = biometricStatus == BiometricStatus.Enabled
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
    fun onClickToLegal() {
        destination.postValue(LegalTermsActivity::class.java)
    }

    fun onClickFinish() {
        if (!validateForm()) {
            Log.d(TAG, "${AppUtils.getFunctionName()} Form not validated.")
            //toastMessage.setValue(App.getStringResource(R.string.register_error_form));
            updateSnackBarInfoMessage(App.getStringResource(R.string.register_error_form))
        } else {
            completeRegistration()
        }
    }
    // endregion

    // region Callbacks ------------------------------------------------------------------------------------------------

    // endregion
    // endregion

    // region Other Methods --------------------------------------------------------------------------------------------

    private fun validateForm(): Boolean {
        var validation = true
        nickname = nick.value
        if (nickname.isNullOrEmpty()) {
            errorUser.value = App.getStringResource(R.string.register_error_empty_name_field)
            validation = false
        } else if (termsAccepted.value == false) {
            toastMessage.value = App.getStringResource(R.string.register_error_terms)
            validation = false
        } else {
            errorUser.value = ""
        }

        nickname = nickname?.trimEnd()

        return validation
    }

    private fun completeRegistration() {
        if (!getIsLoading()) {
            Log.d(TAG, "${AppUtils.getFunctionName()} Starting wallet creation...")

            viewModelScope.launch {
                try {
                    isLoading.postValue(true)

                    storeDataToSharedPreferences()
                    Log.i(
                        TAG,
                        "${AppUtils.getFunctionName()} storeDataToSharedPreferences Successfully"
                    )
                    Log.d(TAG, "${AppUtils.getFunctionName()} Initialize Eudi Registration")
                    try {
                        completeEudiRegistration()

                    } catch (e: CustomException) {
                        Log.w(
                            TAG,
                            "${AppUtils.getFunctionName()} Custom exception: ${e.message}",
                            e
                        )
                        throw e

                    } catch (e: Exception) {
                        Log.e(
                            TAG,
                            "${AppUtils.getFunctionName()} Error Complete Eudi Registration.",
                            e
                        )
                        throw e
                    }
                    Log.i(
                        TAG,
                        "${AppUtils.getFunctionName()} Initialize Eudi Registration Successfully"
                    )

                    // endregion


                    walletKeyPairCreated.postValue(true)
                    Log.d(
                        TAG,
                        "${AppUtils.getFunctionName()} Starting main menu (Register completed)"
                    )
                    clearBackStack.postValue(true)
                    destination.postValue(MainActivity::class.java)
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
    }

    private suspend fun completeEudiRegistration() {

        val eudiClass = withContext(Dispatchers.IO) {
            try {
                Log.d(
                    TAG,
                    "${AppUtils.getFunctionName()} create new Eudi Class (KeyStore and Did) for the first time"
                )
                IoCManager.getEudiDidInputAdapter().createNewEudiClass()
            } catch (e: CustomException) {
                Log.w(TAG, "${AppUtils.getFunctionName()} Custom exception: ${e.message}", e)
                throw e

            } catch (e: Exception) {
                Log.e(
                    TAG,
                    "${AppUtils.getFunctionName()} Error create new Eudi Class (KeyStore and Did)",
                    e
                )
                throw e
            }
        }

        val did = eudiClass.did

        try {
            Log.d(TAG, "${AppUtils.getFunctionName()} create Eudi DataBase for the first time")
            App.initializeDBEudi(did)
        } catch (e: CustomException) {
            Log.w(TAG, "${AppUtils.getFunctionName()} Custom exception: ${e.message}", e)
            throw e

        } catch (e: Exception) {
            Log.e(TAG, "${AppUtils.getFunctionName()} Error create Eudi DataBase", e)
            throw e
        }

    }

    private fun storeDataToSharedPreferences() {
        Log.d(TAG, "${AppUtils.getFunctionName()} Initialize storeDataToSharedPreferences")
        IoCManager.getInternalMemoryInputAdapter().setUserUnlockPin(registerParams!!.pwd)
        IoCManager.getInternalMemoryInputAdapter()
            .setUserWantsToUseBiometricAuthentication((if (useBiometric.value != null) useBiometric.value else false)!!)
        IoCManager.getInternalMemoryInputAdapter().saveUsername(nickname!!)

        IoCManager.getInternalMemoryInputAdapter().saveRegistrationCompletedToStorage(true)
    }
}