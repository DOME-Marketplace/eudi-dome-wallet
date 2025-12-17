package com.inetum.eudi_dome_wallet.ui.base.adapters

import android.view.ViewGroup
import androidx.annotation.LayoutRes
import androidx.databinding.ViewDataBinding
import androidx.recyclerview.widget.RecyclerView
import com.inetum.eudi_dome_wallet.ui.base.viewHolders.BaseViewHolderK
import com.inetum.eudi_dome_wallet.ui.common.models.AssociatedViewLayout

class MultiTypeRecyclerViewAdapterK(
    private var itemsList: MutableList<AssociatedViewLayout> = mutableListOf(),
) : RecyclerView.Adapter<BaseViewHolderK<out ViewDataBinding, out AssociatedViewLayout>>() {
    private val viewHolderFactories: MutableMap<Int, (ViewGroup) -> BaseViewHolderK<out ViewDataBinding, out AssociatedViewLayout>> = mutableMapOf()

    /**
     * Registra un ViewHolder para un layout específico.
     *
     * @param layoutId El ID del layout asociado al ViewHolder.
     * @param viewHolderFactory La función de creación del ViewHolder.
     */
    fun <B : ViewDataBinding, T : AssociatedViewLayout> registerViewHolder(
        @LayoutRes layoutId: Int,
        viewHolderFactory: (ViewGroup) -> BaseViewHolderK<B, T>
    ) {
        viewHolderFactories[layoutId] = viewHolderFactory
    }

    override fun onCreateViewHolder(parent: ViewGroup, viewType: Int): BaseViewHolderK<out ViewDataBinding, out AssociatedViewLayout> {
        val factory = viewHolderFactories[viewType]
            ?: throw IllegalArgumentException("No ViewHolder registered for viewType $viewType")
        return factory(parent)
    }

    override fun onBindViewHolder(holder: BaseViewHolderK<out ViewDataBinding, out AssociatedViewLayout>, position: Int) {
        val item = itemsList[position]
        @Suppress("UNCHECKED_CAST")
        (holder as? BaseViewHolderK<ViewDataBinding, AssociatedViewLayout>)?.bind(item) ?: throw ClassCastException("Failed to cast ViewHolder to expected type")
    }

    /**
     * Returns the total number of items in the adapter.
     *
     * @return The number of items in the adapter.
     */
    override fun getItemCount(): Int = itemsList.size

    /**
     * Returns the view type of the item at the specified position.
     * This determines which layout to use for the item.
     *
     * @param position The position of the item within the adapter's data set.
     * @return The layout ID associated with the item type at the specified position.
     */
    override fun getItemViewType(position: Int): Int {
        return itemsList[position].layoutId
    }

    override fun onViewRecycled(holder: BaseViewHolderK<out ViewDataBinding, out AssociatedViewLayout>) {
        super.onViewRecycled(holder)
        holder.recycled()
    }

    /**
     * Updates the list of items in the adapter and refreshes the `RecyclerView`.
     *
     * @param newItems The new list of items to be displayed.
     */
    fun updateItemsList(newItems: List<AssociatedViewLayout>) {
        itemsList.clear()
        itemsList.addAll(newItems)
        notifyDataSetChanged()
    }
}
