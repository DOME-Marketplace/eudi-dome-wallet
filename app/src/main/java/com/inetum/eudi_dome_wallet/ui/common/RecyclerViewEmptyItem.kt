package com.inetum.eudi_dome_wallet.ui.common

import com.inetum.eudi_dome_wallet.ui.common.models.AssociatedViewLayout

class RecyclerViewEmptyItem(message: String): AssociatedViewLayout {

    override val layoutId: Int

    val messsage: String


    init {
        layoutId = EnumsItemsViewHolders.ItemLayoutRecyclerViewEmptyAssociated.TYPE_GENERIC.layoutId

        this.messsage = message
    }
}