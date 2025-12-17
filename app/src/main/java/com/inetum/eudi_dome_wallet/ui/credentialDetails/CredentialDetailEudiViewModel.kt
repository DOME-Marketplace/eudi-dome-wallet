package com.inetum.eudi_dome_wallet.ui.credentialDetails

import android.os.Bundle
import android.util.Log
import androidx.lifecycle.MutableLiveData
import androidx.lifecycle.viewModelScope
import com.inetum.eudi_dome_wallet.App
import com.inetum.eudi_dome_wallet.R
import com.inetum.eudi_dome_wallet.common.constants.IntentKeys
import com.inetum.eudi_dome_wallet.common.exception.CustomException
import com.inetum.eudi_dome_wallet.common.utils.AppUtils
import com.inetum.eudi_dome_wallet.common.utils.LiveDataUtilsK.getNonNullValue
import com.inetum.eudi_dome_wallet.core.models.eudi.credentials.EudiCredential
import com.inetum.eudi_dome_wallet.manager.IoCManager
import com.inetum.eudi_dome_wallet.ui.base.BaseViewModel
import com.inetum.eudi_dome_wallet.ui.common.models.EudiPresentationItem
import com.inetum.utils.getCurrentEpochTimeInMillis
import com.inetum.utils.toEpochDateTimeLong
import com.inetum.utils.toJsonString
import com.inetum.utils.toMillis
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.launch
import kotlinx.coroutines.withContext

class CredentialDetailEudiViewModel: BaseViewModel() {

    var credential = MutableLiveData<EudiCredential>()
    var canBeFavourite = MutableLiveData<Boolean>()

    var isActiveData = MutableLiveData("Yes")
    var eudiPresentationItemList = MutableLiveData<List<EudiPresentationItem>>()

    var credentialDataType = MutableLiveData("LEAR Credential")

    override fun startUpViewModel(extras: Bundle?) {
        super.startUpViewModel(extras)
        val rawEudiCredential = getFromExtraBundle(IntentKeys.Eudi.EUDI_CREDENTIAL_KEY, String::class.java)

        if (!rawEudiCredential.isNullOrEmpty()) {
            getEudiCredentialFromDB(rawEudiCredential)
            return
        }
    }

    private fun getEudiCredentialFromDB(rawCredential: String) {
        viewModelScope.launch {
            try {
                isLoading.postValue(true)

                val eudiCredential = withContext(Dispatchers.IO) {
                    try {
                        IoCManager.getEudiCredentialDBInputAdapter().getCredentialFromDBbyId(rawCredential)
                    } catch (e: Exception) {
                        Log.e(TAG, "${AppUtils.getFunctionName()} ${e.message}", e)
                        throw e
                    }
                }

                Log.d(TAG, "${AppUtils.getFunctionName()} eudiCredential from DB: ${eudiCredential.toJsonString()}")

                credential.postValue(eudiCredential)
                val eudiItemPresentationUX = eudiCredential.vc.presentationsList.map { EudiPresentationItem(it) }
                eudiPresentationItemList.postValue(eudiItemPresentationUX)

                checkIfCanBeFavorite()

                checkIsActiveData()

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
    fun setFavourite() {
            viewModelScope.launch {
                try {
                    isLoading.postValue(true)
                    val eudiCredential = credential.getNonNullValue()
                    eudiCredential.favorite = !eudiCredential.favorite

                    withContext(Dispatchers.IO) {
                        try {
                            IoCManager.getEudiCredentialDBInputAdapter().updateCredentialIntoDB(eudiCredential)
                        } catch (e: Exception) {
                            Log.e(TAG, "${AppUtils.getFunctionName()} ${e.message}", e)
                            throw e
                        }
                    }

                    Log.d(TAG, "${AppUtils.getFunctionName()} eudiCredential update into DB: ${eudiCredential.toJsonString()}")

                    this@CredentialDetailEudiViewModel.credential.postValue(eudiCredential)


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
    private fun checkIsActiveData() {
        val currentTime = getCurrentEpochTimeInMillis()
        val expirationDateJwt = credential.value?.exp
        val notBeforeDateJwt = credential.value?.nbf

        val expirationDate = credential.value?.vc?.validUntil?.toLongOrNull() ?: credential.value?.vc?.validUntil?.toEpochDateTimeLong()
        val notBeforeDate = credential.value?.vc?.validFrom?.toLongOrNull() ?: credential.value?.vc?.validFrom?.toEpochDateTimeLong()
        if ( (expirationDate != null && currentTime > expirationDate.toMillis()) ||
            (notBeforeDate != null && currentTime < notBeforeDate.toMillis()) ||
            (expirationDateJwt != null && currentTime > expirationDateJwt.toMillis()) ||
            (notBeforeDateJwt != null && currentTime < notBeforeDateJwt.toMillis()) ) {

            isActiveData.value = "No"
        }

    }

    private fun checkIfCanBeFavorite() {
        canBeFavourite.postValue(true)
    }
}