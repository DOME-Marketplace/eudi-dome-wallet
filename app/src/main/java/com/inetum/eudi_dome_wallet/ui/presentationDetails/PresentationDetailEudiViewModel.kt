package com.inetum.eudi_dome_wallet.ui.presentationDetails

import android.os.Bundle
import android.util.Log
import androidx.lifecycle.MutableLiveData
import androidx.lifecycle.viewModelScope
import com.inetum.eudi_dome_wallet.App
import com.inetum.eudi_dome_wallet.R
import com.inetum.eudi_dome_wallet.common.constants.IntentKeys
import com.inetum.eudi_dome_wallet.common.exception.CustomException
import com.inetum.eudi_dome_wallet.common.utils.AppUtils
import com.inetum.eudi_dome_wallet.core.models.eudi.presentations.PresentationEudi
import com.inetum.utils.toDateIso8601String
import com.inetum.eudi_dome_wallet.manager.IoCManager
import com.inetum.eudi_dome_wallet.ui.base.BaseViewModel
import com.inetum.eudi_dome_wallet.ui.common.models.EudiCredentialItem
import com.inetum.eudi_dome_wallet.ui.common.models.EudiPresentationItem
import com.inetum.utils.toDateAndHourIso8601String
import com.inetum.utils.toJsonString
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.launch
import kotlinx.coroutines.withContext

class PresentationDetailEudiViewModel: BaseViewModel() {
    var presentationEudi = MutableLiveData<PresentationEudi>()
    var eudiCredentialItemList = MutableLiveData<List<EudiCredentialItem>>()

    var presentationActivityPretty = MutableLiveData<String>()
    var presentationIssueDatePretty = MutableLiveData<String>()

    override fun startUpViewModel(extras: Bundle?) {
        super.startUpViewModel(extras)
        val rawEudiPresentation = getFromExtraBundle(IntentKeys.Eudi.EUDI_PRESENTATION_KEY, String::class.java)

        if (!rawEudiPresentation.isNullOrEmpty()) {
            getEudiPresentationFromDB(rawEudiPresentation)
            return
        }
    }

    private fun getEudiPresentationFromDB(rawPresentation: String) {
        viewModelScope.launch {
            try {
                isLoading.postValue(true)


                val eudiPresentation = withContext(Dispatchers.IO) {
                    try {
                        IoCManager.getEudiPresentationDBInputAdapter().getPresentationFromDBbyId(rawPresentation)
                    } catch (e: Exception) {
                        Log.e(TAG, "${AppUtils.getFunctionName()} ${e.message}", e)
                        throw e
                    }
                }

                Log.d(TAG, "${AppUtils.getFunctionName()} eudiPresentation from DB:\t${eudiPresentation.toJsonString(true)}")

                presentationEudi.postValue(eudiPresentation)

                val eudiItemPresentationUX = EudiPresentationItem(eudiPresentation)
                val eudiPresentationItemList = eudiPresentation.vp.verifiableCredential.map { EudiCredentialItem(it) }

                eudiCredentialItemList.postValue(eudiPresentationItemList)

                val prettyDateAndHour = eudiItemPresentationUX.issueDate.toDateAndHourIso8601String(true)
                presentationActivityPretty.postValue("Presentación $prettyDateAndHour")

                val prettyDate = eudiItemPresentationUX.issueDate.toDateIso8601String(true)
                presentationIssueDatePretty.postValue(prettyDate)

            } catch (e: CustomException) {
                Log.w(TAG, "${AppUtils.getFunctionName()} Custom exception: ${e.message}. ${e.userMessage}", e)
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