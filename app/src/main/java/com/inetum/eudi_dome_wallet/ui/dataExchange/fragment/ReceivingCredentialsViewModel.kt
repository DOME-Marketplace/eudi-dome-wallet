package com.inetum.eudi_dome_wallet.ui.dataExchange.fragment

import android.os.Bundle
import android.util.Log
import androidx.lifecycle.LiveData
import androidx.lifecycle.MutableLiveData
import androidx.lifecycle.viewModelScope
import com.inetum.eudi_dome_wallet.App
import com.inetum.eudi_dome_wallet.R
import com.inetum.eudi_dome_wallet.common.classes.LogLevel
import com.inetum.eudi_dome_wallet.common.exception.CustomException
import com.inetum.eudi_dome_wallet.common.utils.AppUtils
import com.inetum.eudi_dome_wallet.common.utils.LiveDataUtilsK.getNonNullValue
import com.inetum.eudi_dome_wallet.core.models.eudi.credentials.EudiCredential
import com.inetum.eudi_dome_wallet.manager.IoCManager
import com.inetum.eudi_dome_wallet.ui.base.BaseFragmentViewModel
import com.inetum.eudi_dome_wallet.ui.common.models.EudiCredentialStringSelectionItem
import com.inetum.eudi_dome_wallet.ui.custom.AlertDialogDTO
import com.inetum.utils.getValueAs
import com.inetum.utils.toJsonString
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.launch
import kotlinx.coroutines.withContext

class ReceivingCredentialsViewModel: BaseFragmentViewModel() {

    // region Eudi

    private val _discoveryEndpoints = MutableLiveData<Map<String, *>>()
    val discoveryEndpoints: LiveData<Map<String, *>> get() = _discoveryEndpoints

    private val _eudiCredentialList = MutableLiveData<List<EudiCredential>>()
    private val _alertDialogDTOAddedCredentials = MutableLiveData<AlertDialogDTO>()
    val alertDialogDTOAddedCredentials: LiveData<AlertDialogDTO> get() = _alertDialogDTOAddedCredentials

    // endregion

    // endregion

    // endregion

    // region ViewModel's Lifecycle ------------------------------------------------------------------------------------

    // endregion

    // region View Initialization & Finalization -----------------------------------------------------------------------
    override fun startUpViewModel(extras: Bundle?) {
        super.startUpViewModel(extras)

    }

    // endregion

    fun startFlowEudiDiscoveryEndpoints(credentialOffering: Map<String, *>) {
        IoCManager.getLogInputAdapter().log(LogLevel.DEBUG, TAG, "${AppUtils.getFunctionName()} initialize")

        viewModelScope.launch {
            try {

                isLoading.postValue(true)

                val credentialIssuer = credentialOffering.getValueAs<String>("credential_issuer")

                val discovery1Map = withContext(Dispatchers.IO) {
                    try {
                        IoCManager.getEudiNetworkInputAdapter().getOpenIDCredentialIssuer(credentialIssuer)
                    } catch (e: Exception) {
                        throw e
                    }
                }
                _discoveryEndpoints.postValue(discovery1Map)
            } catch (e: CustomException) {
                Log.e(TAG, "${AppUtils.getFunctionName()} ${e.message}. ${e.userMessage}", e)
                updateSnackBarErrorMessage(e.userMessage)
            } catch (e: Exception) {
                Log.e(TAG, "${AppUtils.getFunctionName()} Error", e)
                startPopupFailedAddedCredential(App.getStringResource(R.string.generic_error))

            } finally {
                isLoading.postValue(false)
            }
        }
    }


    fun startFlowEudiSendCredentials(credentialOffering: Map<String, *>, selectedCredentialList: MutableList<EudiCredentialStringSelectionItem>, codeUserPin: String) {
        IoCManager.getLogInputAdapter().log(LogLevel.DEBUG, TAG, "${AppUtils.getFunctionName()} initialize")

        viewModelScope.launch {

            try {
                if (selectedCredentialList.size != 1) {
                    throw IllegalArgumentException ("selectedCredentialList mayor a 1")
                }
                isLoading.postValue(true)

                val discovery1Endpoints = discoveryEndpoints.getNonNullValue()

                selectedCredentialList.mapIndexedNotNull { _, credential ->
                    if (credential.isSelected.value == true) {
                        val credentialsSupported = discovery1Endpoints.getValueAs<Map<String, *>>("credential_configurations_supported")
                        credentialsSupported
                    }else {
                        null
                    }
                }
                IoCManager.getLogInputAdapter().log(LogLevel.DEBUG, TAG, "${AppUtils.getFunctionName()} $discovery1Endpoints")


                val credentialList = withContext(Dispatchers.IO) {
                    try {
                        IoCManager.getEudiNetworkInputAdapter().getCredentialRequest(
                            credentialOffering,
                            discovery1Endpoints,
                            codeUserPin
                        )
                    } catch (e: Exception) {
                        throw e
                    }
                }

                IoCManager.getLogInputAdapter().log(LogLevel.DEBUG, TAG, AppUtils.getFunctionName() +
                        " tokenResponseMap: ${credentialList.toJsonString(true)}")


                withContext(Dispatchers.IO) {
                    try {
                        IoCManager.getEudiCredentialDBInputAdapter().saveCredentialListIntoDB(credentialList)
                    } catch (e: Exception) {
                        Log.e(TAG, "${AppUtils.getFunctionName()} ${e.message}", e)
                        throw e
                    }
                }

                IoCManager.getLogInputAdapter().log(LogLevel.DEBUG, TAG, "${AppUtils.getFunctionName()} All Credentials and DeferredCredentials save in DataBase correctly")

                _eudiCredentialList.value = credentialList
                val messagePopup = App.context.resources.getQuantityString(
                            R.plurals.receive_cred_success_msg_eudi,
                            credentialList.size,
                            credentialList.size
                        )
                startPopupSuccessAddedCredentials(messagePopup)

            } catch (e: CustomException) {
                Log.e(TAG, "${AppUtils.getFunctionName()} ${e.message}. ${e.userMessage}", e)
                updateSnackBarErrorMessage(e.userMessage)
            } catch (e: Exception) {
                Log.e(TAG, "${AppUtils.getFunctionName()} Error", e)
                startPopupFailedAddedCredential(App.getStringResource(R.string.generic_error))

            } finally {
                isLoading.postValue(false)
            }
        }
    }
    private fun startPopupSuccessAddedCredentials(message: String) {
        val dto = AlertDialogDTO(
            title = App.getStringResource(R.string.generic_success_title),
            message = message,
            secondMessage = "",
            positiveButtonTitle = App.getStringResource(R.string.generic_accept_button),
            negativeButtonTitle = null,
            icon = R.drawable.icon_popup_ok
        )

        _alertDialogDTOAddedCredentials.postValue(dto)

    }
    private fun startPopupFailedAddedCredential(message: String) {

        val dto = AlertDialogDTO(
            title = App.getStringResource(R.string.generic_error_popup_title),
            message = message,
            secondMessage = "",
            positiveButtonTitle = App.getStringResource(R.string.generic_close_button),
            negativeButtonTitle = null,
            icon = R.drawable.icon_popup_ko
        )
        _alertDialogDTOAddedCredentials.postValue(dto)
    }
}