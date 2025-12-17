package com.inetum.eudi_dome_wallet.ui.common

import com.inetum.eudi_dome_wallet.databinding.ItemRvEmptyBinding
import com.inetum.eudi_dome_wallet.ui.base.viewHolders.BaseViewHolderK

class RecyclerViewEmptyItemViewHolder(binding: ItemRvEmptyBinding):
    BaseViewHolderK<ItemRvEmptyBinding, RecyclerViewEmptyItem>(binding) {

    override fun populateView(item: RecyclerViewEmptyItem) {
        super.populateView(item)

        binding.tvRVEmpty.text = item.messsage

    }
}