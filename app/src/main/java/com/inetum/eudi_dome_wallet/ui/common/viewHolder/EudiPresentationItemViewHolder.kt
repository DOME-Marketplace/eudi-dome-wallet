package com.inetum.eudi_dome_wallet.ui.common.viewHolder

import android.view.View
import com.inetum.eudi_dome_wallet.databinding.ItemEudiPresentationBinding
import com.inetum.eudi_dome_wallet.ui.base.items.ItemInterfacesListeners
import com.inetum.eudi_dome_wallet.ui.base.viewHolders.BaseViewHolderK
import com.inetum.eudi_dome_wallet.ui.common.models.EudiPresentationItem
import com.inetum.utils.toDateIso8601String

class EudiPresentationItemViewHolder(
    binding: ItemEudiPresentationBinding,
    private val itemClickListener: ItemInterfacesListeners.ItemButtonClickListener<EudiPresentationItem>
) : BaseViewHolderK<ItemEudiPresentationBinding, EudiPresentationItem>(binding) {

    override fun populateView(item: EudiPresentationItem) {
        super.populateView(item)

        val emissionDatePretty = "Presentation ${item.issueDate.toDateIso8601String(true)}"

        binding.tvPresentationData.text = emissionDatePretty

        binding.tvIssuer.text = item.issuer

    }

    override fun attachViewListeners(item: EudiPresentationItem) {
        super.attachViewListeners(item)

        binding.root.setOnClickListener { onItemRootClickListener(it, item) }

    }

    private fun onItemRootClickListener(view: View, item: EudiPresentationItem) {
        itemClickListener.onItemClicked(item)
    }

    override fun bind(item: EudiPresentationItem) {
        super.bind(item)
        binding.executePendingBindings()
    }
}