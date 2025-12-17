package com.inetum.eudi_dome_wallet.ui.dataExchange

import android.os.Bundle
import androidx.lifecycle.LiveData
import androidx.lifecycle.MutableLiveData
import com.inetum.eudi_dome_wallet.common.constants.IntentKeys
import com.inetum.eudi_dome_wallet.core.models.eudi.presentations.VerificationOfferEudi
import com.inetum.eudi_dome_wallet.ui.base.BaseViewModel
import com.inetum.utils.toMap

class DataExchangeViewModel : BaseViewModel() {
    enum class TECHNOLOGY_TYPE {
        EUDI_FLOW
    }

    enum class DATA_EXCHANGE_CASE {
        RECEIVING_CREDENTIALS,
        PRESENTATION_CREDENTIALS
    }

    private var _credentialOffering: Map<String, *>? = null
    val credentialOffering: Map<String, *>? get() = _credentialOffering
    private var _verificationOffer: VerificationOfferEudi? = null
    val verificationOffer: VerificationOfferEudi? get() = _verificationOffer
    private val _dataExchangeType = MutableLiveData<DATA_EXCHANGE_CASE>()
    val dataExchangeType: LiveData<DATA_EXCHANGE_CASE> get() = _dataExchangeType
    private val _dataTechnologyType = MutableLiveData<TECHNOLOGY_TYPE>()
    val dataTechnologyType: LiveData<TECHNOLOGY_TYPE> get() = _dataTechnologyType

    override fun startUpViewModel(extras: Bundle?) {
        super.startUpViewModel(extras)

        val credentialOfferingJsonString =
            getFromExtraBundle(IntentKeys.Eudi.CREDENTIAL_OFFERING, String::class.java)
        if (credentialOfferingJsonString != null) {
            _credentialOffering = credentialOfferingJsonString.toMap() as? Map<String, *>
                ?: throw IllegalStateException("No se ha podido castear correctamente al mapa")
            _dataTechnologyType.postValue(TECHNOLOGY_TYPE.EUDI_FLOW)
            _dataExchangeType.postValue(DATA_EXCHANGE_CASE.RECEIVING_CREDENTIALS)
            return
        }
        val verificationOfferEudi = getFromExtraBundle(
            IntentKeys.Eudi.PRESENTATION_REQUEST,
            VerificationOfferEudi::class.java
        )
        if (verificationOfferEudi != null) {
            _verificationOffer = verificationOfferEudi
            _dataTechnologyType.postValue(TECHNOLOGY_TYPE.EUDI_FLOW)
            _dataExchangeType.postValue(DATA_EXCHANGE_CASE.PRESENTATION_CREDENTIALS)
            return
        }
    }
}