package com.inetum.eudi_dome_wallet.ui.common.models

import androidx.lifecycle.LiveData
import androidx.lifecycle.MutableLiveData
import com.inetum.eudi_dome_wallet.core.models.eudi.credentials.EudiCredential
import com.inetum.eudi_dome_wallet.ui.common.EnumsItemsViewHolders

class EudiCredentialSelectionItem(credential: EudiCredential, itemPosition: Int) :
    AssociatedViewLayout {
    override val layoutId: Int

    var itemPosition = 0
    private var _credential: MutableLiveData<EudiCredential> = MutableLiveData()
    val credential: LiveData<EudiCredential> get() = _credential

    val isSelected = MutableLiveData<Boolean>()

    init {
        layoutId = EnumsItemsViewHolders.ItemLayoutCredentialAssociated.TYPE_EUDI_CREDENTIAL_SELECTION.layoutId

        this._credential.value = credential

        this.itemPosition = itemPosition

        this.isSelected.value = true
    }

    fun getCredentialValue(): EudiCredential {
        return credential.value ?: throw NullPointerException("credential LiveData is null")
    }
}