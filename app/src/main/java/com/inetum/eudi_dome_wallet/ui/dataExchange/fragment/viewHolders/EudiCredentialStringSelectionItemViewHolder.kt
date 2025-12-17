package com.inetum.eudi_dome_wallet.ui.dataExchange.fragment.viewHolders

import android.view.View
import com.inetum.eudi_dome_wallet.R
import com.inetum.eudi_dome_wallet.databinding.ItemEudiCredentialStringSelectionBinding
import com.inetum.eudi_dome_wallet.ui.base.items.ItemInterfacesListeners
import com.inetum.eudi_dome_wallet.ui.base.viewHolders.BaseViewHolderK
import com.inetum.eudi_dome_wallet.ui.common.models.EudiCredentialStringSelectionItem

class EudiCredentialStringSelectionItemViewHolder(
    binding: ItemEudiCredentialStringSelectionBinding,
    private val itemClickListener: ItemInterfacesListeners.ItemButtonClickListener<EudiCredentialStringSelectionItem>
) : BaseViewHolderK<ItemEudiCredentialStringSelectionBinding, EudiCredentialStringSelectionItem>(
    binding
) {

    override fun bind(item: EudiCredentialStringSelectionItem) {
        super.bind(item)
        super.refreshUserInterface(item)
        updateCheck(item)
    }

    override fun attachViewListeners(item: EudiCredentialStringSelectionItem) {
        super.attachViewListeners(item)
        binding.root.setOnClickListener { onItemRootClickListener(it, item) }
        binding.clSelectionCredentialCheck.setOnClickListener {
            onSelectionCredentialCheckClickListener(
                item
            )
        }
    }

    override fun setItemToBinding(
        binding: ItemEudiCredentialStringSelectionBinding,
        item: EudiCredentialStringSelectionItem
    ) {
        binding.model = item
    }

    override fun populateView(item: EudiCredentialStringSelectionItem) {
        super.populateView(item)
        binding.tvCredentialSelectionCredentialName.text = item.getCredentialValue().keyPretty
    }

    private fun onItemRootClickListener(view: View, item: EudiCredentialStringSelectionItem) {
        itemClickListener.onItemClicked(item)
    }

    fun onSelectionCredentialCheckClickListener(item: EudiCredentialStringSelectionItem) {
        item.toggleSelection()
        itemClickListener.onItemClicked(item)
        updateCheck(item)
    }

    private fun updateCheck(item: EudiCredentialStringSelectionItem) {
        val drawableResource = if (item.getSelectedValue()) {
            R.drawable.dsdk_icon_radiobutton_on_svg
        } else {
            R.drawable.dsdk_icon_radiobutton_off_svg
        }
        binding.ivCredentialSelectionCheck.setImageResource(drawableResource)
    }
}