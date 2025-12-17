package com.inetum.eudi_dome_wallet.ui.common.viewHolder

import android.view.View
import com.inetum.eudi_dome_wallet.R
import com.inetum.eudi_dome_wallet.databinding.ItemEudiCredentialBinding
import com.inetum.eudi_dome_wallet.ui.base.items.ItemInterfacesListeners
import com.inetum.eudi_dome_wallet.ui.base.viewHolders.BaseViewHolderK
import com.inetum.eudi_dome_wallet.ui.common.models.EudiCredentialItem
import com.inetum.utils.toDateIso8601String

class EudiCredentialItemViewHolder(
    binding: ItemEudiCredentialBinding,
    private val itemClickListener: ItemInterfacesListeners.ItemButtonClickListener<EudiCredentialItem>
) : BaseViewHolderK<ItemEudiCredentialBinding, EudiCredentialItem>(binding) {


    override fun bind(item: EudiCredentialItem) {
        super.bind(item)
        binding.executePendingBindings()
    }

    override fun populateView(item: EudiCredentialItem) {
        super.populateView(item)


        binding.tvCredentialData.text = item.prettyKey

        val emissionDatePretty = "Issued on: ${item.issueDate.toDateIso8601String(true)}"

        binding.tvDate.text = emissionDatePretty

        updateFavouriteIcon(item)

    }

    override fun attachViewListeners(item: EudiCredentialItem) {
        super.attachViewListeners(item)

        binding.root.setOnClickListener { onItemRootClickListener(it, item) }

        binding.ivFavourite.setOnClickListener { onItemFavoriteClickListener(it, item) }
    }

    private fun updateFavouriteIcon(item: EudiCredentialItem) {
        val drawableResource = if (item.favorite) {
            R.drawable.ic_star_full
        } else {
            R.drawable.ic_star_outline
        }
        binding.ivFavourite.setImageResource(drawableResource)
    }
    private fun onItemRootClickListener(view: View, item: EudiCredentialItem) {
        itemClickListener.onItemClicked(item)
    }

    private fun onItemFavoriteClickListener(view: View, item: EudiCredentialItem) {
        item.favorite = !item.favorite

        updateFavouriteIcon(item)

        itemClickListener.onItemButtonClicked(item)
    }
}