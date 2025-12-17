package com.inetum.eudi_dome_wallet.ui.common.models

import androidx.lifecycle.LiveData
import androidx.lifecycle.MutableLiveData
import com.inetum.eudi_dome_wallet.core.models.eudi.credentials.EudiCredential
import com.inetum.eudi_dome_wallet.ui.common.EnumsItemsViewHolders
import com.inetum.utils.toDateIso8601String
import com.inetum.utils.toEpochDateTimeLong

class EudiCredentialItem(credential: EudiCredential): AssociatedViewLayout {
    override val layoutId: Int

    val rawJwt: String
    val key: String
    val prettyKey: String
    val issueDate: Long
    val expirationDate: Long
    var favorite: Boolean = false
    val issueDateText: String
    private var _credential: MutableLiveData<EudiCredential> = MutableLiveData()
    val credential: LiveData<EudiCredential> get() = _credential

    init {
        layoutId = EnumsItemsViewHolders.ItemLayoutCredentialAssociated.TYPE_EUDI_CREDENTIAL.layoutId

        this._credential.value = credential

        rawJwt = credential.rawJwt
        key = credential.vc.credentialSubject.credentialObjectKey
        prettyKey = credential.vc.credentialSubject.credentialObjectPrettyKey
        issueDate = credential.vc.validFrom.toEpochDateTimeLong()
        expirationDate = credential.vc.validUntil.toEpochDateTimeLong()
        favorite = credential.favorite
        val emissionDatePretty = "Issued on: ${issueDate.toDateIso8601String(true)}"

        issueDateText = emissionDatePretty
    }
    fun getCredentialValue(): EudiCredential {
        return credential.value ?: throw NullPointerException("credential LiveData is null")
    }
}