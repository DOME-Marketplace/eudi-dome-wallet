package com.inetum.eudi_dome_wallet.ui.dataExchange.fragment

import android.util.Log
import androidx.lifecycle.LiveData
import androidx.lifecycle.MutableLiveData
import androidx.lifecycle.viewModelScope
import com.inetum.eudi_dome_wallet.App
import com.inetum.eudi_dome_wallet.R
import com.inetum.eudi_dome_wallet.common.exception.CustomException
import com.inetum.eudi_dome_wallet.common.utils.AppUtils
import com.inetum.eudi_dome_wallet.common.utils.LiveDataUtilsK.getNonNullValue
import com.inetum.eudi_dome_wallet.core.models.eudi.presentations.PresentationTokenRequestEudi
import com.inetum.eudi_dome_wallet.core.models.eudi.presentations.VerificationOfferEudi
import com.inetum.eudi_dome_wallet.manager.IoCManager
import com.inetum.eudi_dome_wallet.ui.base.BaseFragmentViewModel
import com.inetum.eudi_dome_wallet.ui.common.models.EudiPresentationRequestHeaderItem
import com.inetum.eudi_dome_wallet.ui.custom.AlertDialogDTO
import com.inetum.utils.getValueAs
import com.inetum.utils.toJsonString
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.launch
import kotlinx.coroutines.withContext

class SendRequestedPresentationViewModel : BaseFragmentViewModel() {

    var descriptionText = MutableLiveData("")

    var presentationPurposeTxt = MutableLiveData("")
    private val _presentationTokenRequest = MutableLiveData<PresentationTokenRequestEudi>()
    val presentationTokenRequest: LiveData<PresentationTokenRequestEudi> get() = _presentationTokenRequest

    private var vpTokenResponseState = ""
    private var vpTokenResponseUri = ""
    private lateinit var presentation: Map<*, *>
    private val _eudiPresentationRequestHeaderItemList =
        MutableLiveData<List<EudiPresentationRequestHeaderItem>>()
    val eudiPresentationRequestHeaderItemList: LiveData<List<EudiPresentationRequestHeaderItem>> get() = _eudiPresentationRequestHeaderItemList


    private val _alertDialogDTOAddedPresentation = MutableLiveData<AlertDialogDTO>()
    val alertDialogDTOAddedPresentation: LiveData<AlertDialogDTO> get() = _alertDialogDTOAddedPresentation

    fun startFlowEudiVPTokenRequest(verificationOffer: VerificationOfferEudi) {
        Log.d(TAG, "${AppUtils.getFunctionName()} initialize")
        viewModelScope.launch {
            try {

                isLoading.postValue(true)
                val presentationEudi = withContext(Dispatchers.IO) {
                    try {
                        IoCManager.getEudiNetworkInputAdapter()
                            .getVPAuthorizationRequest(verificationOffer.verificationEndpoint)
                    } catch (e: Exception) {
                        Log.e(TAG, "${AppUtils.getFunctionName()} ${e.message}", e)
                        throw e
                    }
                }
                Log.d(
                    TAG, "${AppUtils.getFunctionName()} presentationTokenRequest:\n ${
                        presentationTokenRequest.toJsonString(true)
                    }"
                )

                val jwtDecoded = IoCManager.getJwtInputAdapter().getDecodeJWT(presentationEudi)
                val jwtPayloadMap = jwtDecoded.getValueAs<Map<*, *>>("payload")
                val presentationTokenRequest = PresentationTokenRequestEudi(
                    rawJwt = presentationEudi,
                    iss = jwtPayloadMap.getValueAs<String>("iss"),
                    aud = jwtPayloadMap.getValueAs<String>("aud"),
                    exp = jwtPayloadMap.getValueAs<Long>("exp"),
                    responseType = jwtPayloadMap.getValueAs<String>("response_type"),
                    responseMode = jwtPayloadMap.getValueAs<String>("response_mode"),
                    clientId = jwtPayloadMap.getValueAs<String>("client_id"),
                    redirectUri = jwtPayloadMap.getValueAs<String>("response_uri"),
                    scope = jwtPayloadMap.getValueAs<String>("scope"),
                    nonce = jwtPayloadMap.getValueAs<String>("nonce"),
                )
                _presentationTokenRequest.postValue(presentationTokenRequest)

                vpTokenResponseState = jwtPayloadMap.getValueAs<String>("state")

                vpTokenResponseUri = jwtPayloadMap.getValueAs<String>("response_uri")

                presentation = jwtPayloadMap

                Log.d(
                    TAG, "${AppUtils.getFunctionName()} presentationTokenRequest:\n ${
                        vpTokenResponseState.toJsonString(true)
                    }"
                )

                val credentialList = withContext(Dispatchers.IO) {
                    try {
                        IoCManager.getEudiCredentialDBInputAdapter().getAllCredentialFromDB()
                    } catch (e: CustomException) {
                        Log.e(
                            TAG, "${AppUtils.getFunctionName()} ${e.message}. ${e.userMessage}", e
                        )
                        throw e
                    } catch (e: Exception) {
                        Log.e(TAG, "${AppUtils.getFunctionName()} ${e.message}", e)
                        throw e
                    }
                }

                Log.d(
                    TAG,
                    "${AppUtils.getFunctionName()} Retrieved ${credentialList.size} total credentials from DB"
                )

                val learCredentials = credentialList.filter { credential ->
                    credential.vc.type.contains("LEARCredentialEmployee")
                }

                Log.d(
                    TAG,
                    "${AppUtils.getFunctionName()} Filtered to ${learCredentials.size} LEAR credentials"
                )

                if (learCredentials.isEmpty()) {
                    Log.w(TAG, "${AppUtils.getFunctionName()} No LEAR credentials found!")
                    _eudiPresentationRequestHeaderItemList.postValue(mutableListOf())
                } else {
                    val appLocale = App.language

                    val prettyName =
                        learCredentials.firstOrNull()?.vc?.credentialSubject?.credentialObjectPrettyKeyList?.firstOrNull {
                            it.locale.contains(
                                appLocale, true
                            )
                        }?.keyPretty ?: "LEARCredentialEmployee"

                    Log.d(
                        TAG,
                        "${AppUtils.getFunctionName()} Creating header for LEAR credentials (pretty: $prettyName)"
                    )

                    val learHeaderItem = EudiPresentationRequestHeaderItem(
                        presentationRequested = presentationTokenRequest,
                        itemPosition = 0,
                        eudiCredentialList = learCredentials.toMutableList()
                    ).apply {
                        credentialDataRequestedShowName.postValue(prettyName)
                        requiredOrOptionalTitle.postValue(App.getStringResource(R.string.presentation_request_cred_header_required))
                    }
                    _eudiPresentationRequestHeaderItemList.postValue(mutableListOf(learHeaderItem))
                    Log.d(
                        TAG,
                        "${AppUtils.getFunctionName()} Posted LEAR header with ${learCredentials.size} credentials"
                    )
                }

            } catch (e: CustomException) {
                Log.e(TAG, "${AppUtils.getFunctionName()} ${e.message}. ${e.userMessage}", e)
                updateSnackBarErrorMessage(e.userMessage)
            } catch (e: Exception) {
                Log.e(TAG, "${AppUtils.getFunctionName()} Error", e)
                startPopupFailedAddedPresentation(App.getStringResource(R.string.generic_error))

            } finally {
                isLoading.postValue(false)
            }
        }

    }


    fun startFlowEudiVerifiablePresentation(
        eudiPresentationRequestHeaderItem: List<EudiPresentationRequestHeaderItem>,
        presentationTokenRequest: PresentationTokenRequestEudi?
    ) {
        Log.d(TAG, "${AppUtils.getFunctionName()} initialize")
        viewModelScope.launch {
            try {
                isLoading.postValue(true)
                val credentialEudiList = eudiPresentationRequestHeaderItem.map {
                    it.prefOrDefaultItem.getNonNullValue().getCredentialValue()
                }

                Log.d(
                    TAG, "${AppUtils.getFunctionName()} Eudi credential selected list:\n ${
                        credentialEudiList.toJsonString(true)
                    }"
                )

                Log.d(
                    TAG, "${AppUtils.getFunctionName()} presentation before last call :\n ${
                        presentation.toJsonString(true)
                    }"
                )

                val presentationEntity = withContext(Dispatchers.IO) {
                    try {
                        IoCManager.getEudiNetworkInputAdapter()
                            .getVPAuthorizationResponse(presentation, presentationTokenRequest!!)
                    } catch (e: Exception) {
                        Log.e(TAG, "${AppUtils.getFunctionName()} ${e.message}", e)
                        throw e
                    }
                }

                Log.d(
                    TAG, "${AppUtils.getFunctionName()} presentation after last call :\n ${
                        presentation.toJsonString(true)
                    }"
                )

                withContext(Dispatchers.IO) {
                    try {
                        IoCManager.getEudiPresentationDBInputAdapter()
                            .savePresentationIntoDB(presentationEntity)
                    } catch (e: Exception) {
                        Log.e(TAG, "${AppUtils.getFunctionName()} ${e.message}", e)
                        throw e
                    }
                }

                Log.d(
                    TAG,
                    "${AppUtils.getFunctionName()} Eudi presentation saved correctly in dataBase"
                )

                val messagePopup = App.getStringResource(R.string.presentation_success)
                startPopupSuccessAddedPresentation(messagePopup)
            } catch (e: CustomException) {
                Log.e(TAG, "${AppUtils.getFunctionName()} ${e.message}. ${e.userMessage}", e)
                updateSnackBarErrorMessage(e.userMessage)
            } catch (e: Exception) {
                Log.e(TAG, "${AppUtils.getFunctionName()} Error", e)
                startPopupFailedAddedPresentation(App.getStringResource(R.string.generic_error))

            } finally {
                isLoading.postValue(false)
            }
        }
    }

    private fun startPopupSuccessAddedPresentation(message: String) {

        val dto = AlertDialogDTO(
            title = App.getStringResource(R.string.generic_success_title),
            message = message,
            secondMessage = "",
            positiveButtonTitle = App.getStringResource(R.string.generic_accept_button),
            negativeButtonTitle = null,
            icon = R.drawable.icon_popup_ok
        )

        _alertDialogDTOAddedPresentation.postValue(dto)
    }

    private fun startPopupFailedAddedPresentation(message: String) {

        val dto = AlertDialogDTO(
            title = App.getStringResource(R.string.generic_error_popup_title),
            message = message,
            secondMessage = "",
            positiveButtonTitle = App.getStringResource(R.string.generic_close_button),
            negativeButtonTitle = null,
            icon = R.drawable.icon_popup_ko
        )

        _alertDialogDTOAddedPresentation.postValue(dto)
    }
}