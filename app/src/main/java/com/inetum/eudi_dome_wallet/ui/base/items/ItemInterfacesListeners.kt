package com.inetum.eudi_dome_wallet.ui.base.items


object ItemInterfacesListeners {
    interface ItemClickListener<T> {
        fun onItemClicked(item: T)
    }

    interface ItemButtonClickListener<T>: ItemClickListener<T> {
        fun onItemButtonClicked(item: T)
    }
}