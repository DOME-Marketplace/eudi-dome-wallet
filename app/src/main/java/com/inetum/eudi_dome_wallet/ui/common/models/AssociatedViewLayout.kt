package com.inetum.eudi_dome_wallet.ui.common.models

import androidx.annotation.LayoutRes

/**
 * Interface representing a type of view that can be used in a RecyclerView.
 * Classes implementing this interface should provide a layout resource ID
 * that corresponds to the XML layout file to be used for this type of view.
 *
 * The `layoutId` property, annotated with `@LayoutRes`, ensures that the value
 * returned is a valid layout resource ID. This ID is used by the RecyclerView
 * adapter to inflate the appropriate layout for each item.
 */
interface AssociatedViewLayout {
    @get:LayoutRes
    val layoutId: Int
}