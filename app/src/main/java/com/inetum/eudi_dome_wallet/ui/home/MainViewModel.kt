package com.inetum.eudi_dome_wallet.ui.home

import android.os.Bundle
import android.util.Log
import androidx.lifecycle.viewModelScope
import com.inetum.eudi_dome_wallet.App
import com.inetum.eudi_dome_wallet.R
import com.inetum.eudi_dome_wallet.common.classes.LogLevel
import com.inetum.eudi_dome_wallet.common.constants.IntentKeys
import com.inetum.eudi_dome_wallet.common.exception.CustomException
import com.inetum.eudi_dome_wallet.common.utils.AppUtils
import com.inetum.eudi_dome_wallet.manager.IoCManager
import com.inetum.eudi_dome_wallet.ui.base.BaseViewModel
import com.inetum.eudi_dome_wallet.ui.dataExchange.DataExchangeActivity
import com.inetum.utils.toJsonString
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.launch
import kotlinx.coroutines.withContext

class MainViewModel : BaseViewModel() {
    override fun startUpViewModel(extras: Bundle?) {
        Log.d(TAG, "${AppUtils.getFunctionName()} initialize")
        super.startUpViewModel(extras)
    }
    fun startFlowCredentialOfferEudi(credentialOfferUri: String) {
        Log.d(TAG, "${AppUtils.getFunctionName()} initialize")

        viewModelScope.launch {
            try {
                isLoading.postValue(true)

                val credentialOfferMap = withContext(Dispatchers.IO) {
                    try {
                        IoCManager.getEudiNetworkInputAdapter()
                            .getCredentialOffer(credentialOfferUri)
                    } catch (e: CustomException) {
                        IoCManager.getLogInputAdapter().log(
                            LogLevel.ERROR,
                            TAG,
                            "${AppUtils.getFunctionName()} ${e.message}. ${e.userMessage}",
                            e
                        )
                        throw e
                    } catch (e: Exception) {
                        IoCManager.getLogInputAdapter().log(
                            LogLevel.ERROR,
                            TAG,
                            "${AppUtils.getFunctionName()} ${e.message}",
                            e
                        )
                        throw e
                    }
                }

                IoCManager.getLogInputAdapter().log(
                    LogLevel.DEBUG,
                    TAG,
                    "${AppUtils.getFunctionName()} credentialOfferMap: ${credentialOfferMap}"
                )

                addToExtraBundle(
                    IntentKeys.Eudi.CREDENTIAL_OFFERING,
                    credentialOfferMap.toJsonString()
                )
                destination.postValue(DataExchangeActivity::class.java)

            } catch (e: CustomException) {
                Log.e(TAG, "${AppUtils.getFunctionName()} ${e.message}. ${e.userMessage}", e)
                updateSnackBarErrorMessage(e.userMessage)

            } catch (e: Exception) {
                Log.e(TAG, "${AppUtils.getFunctionName()} Error", e)
                updateSnackBarErrorMessage(App.getStringResource(R.string.generic_error))

            } finally {
                isLoading.postValue(false)
            }

        }
    }
}