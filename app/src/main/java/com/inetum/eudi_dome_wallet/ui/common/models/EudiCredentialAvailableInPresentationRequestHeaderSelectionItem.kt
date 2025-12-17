package com.inetum.eudi_dome_wallet.ui.common.models

import androidx.lifecycle.LiveData
import androidx.lifecycle.MutableLiveData
import com.inetum.eudi_dome_wallet.core.models.eudi.credentials.EudiCredential
import com.inetum.eudi_dome_wallet.ui.common.EnumsItemsViewHolders

class EudiCredentialAvailableInPresentationRequestHeaderSelectionItem(credential: EudiCredential, itemPosition: Int) :
    AssociatedViewLayout {
    override val layoutId: Int

    var itemPosition = 0
    private var _credential: MutableLiveData<EudiCredential> = MutableLiveData()
    val credential: LiveData<EudiCredential> get() = _credential
    val isSelected = MutableLiveData<Boolean>()

    init {
        layoutId = EnumsItemsViewHolders.ItemLayoutCredentialAssociated.TYPE_EUDI_CREDENTIAL_AVAILABLE_IN_PRESENTATION_REQUEST_HEADER.layoutId

        this._credential.value = credential
        this.itemPosition = itemPosition
        this.isSelected.value = false
    }
    fun getCredentialValue(): EudiCredential {
        return credential.value ?: throw NullPointerException("credential LiveData is null")
    }

    fun toggleSelection() {
        val currentValue = isSelected.value ?: true
        isSelected.value = !currentValue
    }
    fun toggleCredentialFavorite() {
        val credentialValue = credential.value ?: throw NullPointerException("credential LiveData is null")

        credentialValue.favorite = !credentialValue.favorite

        _credential.value = credentialValue
    }
}