package com.inetum.eudi_dome_wallet.ui.common

import com.inetum.eudi_dome_wallet.ui.common.models.AssociatedViewLayout


/**
 * Abstract class representing a base item in a RecyclerView.
 *
 * This class holds the type information for the item, which is used to determine
 * the view layout to be used for this item. The type parameter `T` must implement
 * the `ViewType` interface, which provides the layout resource ID for the item.
 *
 * @param type The type of the item, used to determine the view layout for this item.
 *             The type must be an implementation of the `ViewType` interface.
 */
abstract class BaseItemViewHolder<T : AssociatedViewLayout>(val type: T)