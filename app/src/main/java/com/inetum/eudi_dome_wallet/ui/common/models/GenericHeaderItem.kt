package com.inetum.eudi_dome_wallet.ui.common.models

import androidx.lifecycle.LiveData
import androidx.lifecycle.MutableLiveData
import com.inetum.eudi_dome_wallet.ui.common.EnumsItemsViewHolders
import java.io.Serializable

class GenericHeaderItem<T : Serializable>(headerTitle: String, itemList: List<T>, itemPosition: Int) :
    AssociatedViewLayout {
    override val layoutId: Int

    var itemPosition = 0
    private var _itemList: MutableLiveData<List<T>> = MutableLiveData()
    val itemList: LiveData<List<T>> get() = _itemList

    val headerTitle = MutableLiveData<String>()

    val isSelected = MutableLiveData<Boolean>()

    /**
     * If it is `true` it indicates that the extra items are NOT visible, if it is `false` they will be visible.
     * Default value is `false`
     */
    val isFolded = MutableLiveData<Boolean>()

    init {
        this.layoutId = EnumsItemsViewHolders.ItemLayoutCredentialAssociated.TYPE_GENERIC_HEADER.layoutId

        this.headerTitle.value = headerTitle

        this._itemList.value = itemList

        this.itemPosition = itemPosition

        this.isSelected.value = false

        this.isFolded.value = false
    }

    fun getCredentialValue(): List<T> {
        return itemList.value ?: throw NullPointerException("credential LiveData is null")
    }

}