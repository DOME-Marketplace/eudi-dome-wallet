package com.inetum.eudi_dome_wallet.ui.common.models

import androidx.lifecycle.LiveData
import androidx.lifecycle.MutableLiveData
import com.inetum.eudi_dome_wallet.core.models.eudi.credentials.CredentialEudiString
import com.inetum.eudi_dome_wallet.ui.common.EnumsItemsViewHolders

class EudiCredentialStringSelectionItem(credentialString: CredentialEudiString, itemPosition: Int) :
    AssociatedViewLayout {
    override val layoutId: Int

    var itemPosition = 0
    private var _credentialString: MutableLiveData<CredentialEudiString> = MutableLiveData()
    val credentialString: LiveData<CredentialEudiString> get() = _credentialString

    val isSelected = MutableLiveData<Boolean>()
    init {
        layoutId = EnumsItemsViewHolders.ItemLayoutCredentialAssociated.TYPE_EUDI_CREDENTIAL_STRING_SELECTION.layoutId

        this._credentialString.value = credentialString

        this.itemPosition = itemPosition

        this.isSelected.value = true
    }

    fun getCredentialValue(): CredentialEudiString {
        return credentialString.value ?: throw NullPointerException("credential LiveData is null")
    }

    fun getSelectedValue(): Boolean {
        return isSelected.value ?: throw NullPointerException("isSelected LiveData is null")
    }

    fun toggleSelection() {
        val currentValue = isSelected.value ?: true
        isSelected.value = !currentValue
    }
}