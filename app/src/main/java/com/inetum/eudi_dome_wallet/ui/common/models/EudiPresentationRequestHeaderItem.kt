package com.inetum.eudi_dome_wallet.ui.common.models

import androidx.lifecycle.LiveData
import androidx.lifecycle.MutableLiveData
import com.inetum.eudi_dome_wallet.common.utils.LiveDataUtilsK.addItem
import com.inetum.eudi_dome_wallet.common.utils.LiveDataUtilsK.getNonNullValue
import com.inetum.eudi_dome_wallet.common.utils.LiveDataUtilsK.removeItem
import com.inetum.eudi_dome_wallet.core.models.eudi.credentials.EudiCredential
import com.inetum.eudi_dome_wallet.core.models.eudi.presentations.PresentationTokenRequestEudi
import com.inetum.eudi_dome_wallet.ui.base.adapters.MultiTypeRecyclerViewAdapterK
import com.inetum.eudi_dome_wallet.ui.common.EnumsItemsViewHolders

class EudiPresentationRequestHeaderItem(presentationRequested: PresentationTokenRequestEudi, itemPosition: Int, eudiCredentialList: List<EudiCredential>) :
    AssociatedViewLayout {
    override val layoutId: Int
    var itemPosition = 0
    var credentialAvailableList: List<EudiCredential> = arrayListOf()
    private var _presentationRequested: MutableLiveData<PresentationTokenRequestEudi> = MutableLiveData()
    val presentationRequested: LiveData<PresentationTokenRequestEudi> get() = _presentationRequested
    var credentialDataRequestedShowName: MutableLiveData<String> = MutableLiveData()

    var requiredOrOptionalTitle: MutableLiveData<String> = MutableLiveData("")

    var isSelected = MutableLiveData<Boolean>()

    val prefOrDefaultItem: MutableLiveData<EudiCredentialAvailableInPresentationRequestHeaderSelectionItem> = MutableLiveData()

    var vcExtraItems = MutableLiveData<List<EudiCredentialAvailableInPresentationRequestHeaderSelectionItem>>()
    init {
        layoutId = EnumsItemsViewHolders.ItemLayoutPresentationAssociated.TYPE_EUDI_PRESENTATION_REQUEST_HEADER.layoutId

        this._presentationRequested.value = presentationRequested

        this.itemPosition = itemPosition
        credentialDataRequestedShowName.value = "LEAR Credential"
        this.isSelected.value = true

        credentialAvailableList = eudiCredentialList

        this.vcExtraItems.value = arrayListOf()

        setPrefOrDefaultFromList()
    }

    fun isOptional(): Boolean {
        return false
    }

    fun onRecyclerItemClick(adapter: MultiTypeRecyclerViewAdapterK, item: EudiCredentialAvailableInPresentationRequestHeaderSelectionItem) {

        val oldPrefOrDefaultItem = prefOrDefaultItem.getNonNullValue()
        oldPrefOrDefaultItem.isSelected.value = false

        vcExtraItems.addItem(oldPrefOrDefaultItem)

        vcExtraItems.getNonNullValue().indexOf(item)
        vcExtraItems.removeItem(item)

        item.isSelected.value = true

        prefOrDefaultItem.value = item

        isSelected.value = true

        adapter.updateItemsList(vcExtraItems.getNonNullValue())

    }

    fun unChangePrefItemSelection() {
        isSelected.value = !prefOrDefaultItem.getNonNullValue().isSelected.getNonNullValue()
        prefOrDefaultItem.getNonNullValue().isSelected.value = isSelected.value
    }

    fun setPrefOrDefaultFromList() {

        if (credentialAvailableList.isNotEmpty()) {
            val favoriteOrDefault = credentialAvailableList.firstOrNull { it.favorite } ?: credentialAvailableList.first()
            val item = EudiCredentialAvailableInPresentationRequestHeaderSelectionItem(
                credential = favoriteOrDefault,
                itemPosition = itemPosition
            )
            item.isSelected.value = true

            this.prefOrDefaultItem.postValue(item)
            val showVcExtraList = credentialAvailableList.filter  { it.rawJwt != favoriteOrDefault.rawJwt } // elimina de la lista el elemento predeterminado para mostrar el resto en extraitem
            val extraItems = showVcExtraList.map { credential ->
                EudiCredentialAvailableInPresentationRequestHeaderSelectionItem(
                    credential = credential,
                    itemPosition = itemPosition
                )
            }

            this.vcExtraItems.postValue(extraItems)

        }
    }
}