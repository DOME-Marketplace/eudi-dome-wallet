package com.inetum.eudi_dome_wallet.ui.dataExchange.fragment.viewHolders

import android.util.Log
import android.view.View
import com.inetum.eudi_dome_wallet.common.exception.CustomException
import com.inetum.eudi_dome_wallet.common.utils.AppUtils
import com.inetum.eudi_dome_wallet.databinding.ItemEudiCredentialAvailableInPresentationRequestHeaderBinding
import com.inetum.eudi_dome_wallet.manager.IoCManager
import com.inetum.eudi_dome_wallet.ui.base.items.ItemInterfacesListeners
import com.inetum.eudi_dome_wallet.ui.base.viewHolders.BaseViewHolderK
import com.inetum.eudi_dome_wallet.ui.common.models.EudiCredentialAvailableInPresentationRequestHeaderSelectionItem
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.launch
import kotlinx.coroutines.withContext

class EudiCredentialAvailableInPresentationRequestHeaderSelectionItemViewHolder(
    binding: ItemEudiCredentialAvailableInPresentationRequestHeaderBinding,
    private val itemClickListener: ItemInterfacesListeners.ItemButtonClickListener<EudiCredentialAvailableInPresentationRequestHeaderSelectionItem>
): BaseViewHolderK<ItemEudiCredentialAvailableInPresentationRequestHeaderBinding, EudiCredentialAvailableInPresentationRequestHeaderSelectionItem>(binding) {
    override fun bind(item: EudiCredentialAvailableInPresentationRequestHeaderSelectionItem) {
        super.bind(item)

        super.refreshUserInterface(item)
    }

    override fun attachViewListeners(item: EudiCredentialAvailableInPresentationRequestHeaderSelectionItem) {
        super.attachViewListeners(item)
        binding.clCredentialSelectionCheck.setOnClickListener { onSelectionCredentialCheckClickListener(item) }
        binding.ivFavouriteIcon.setOnClickListener { onFavoriteClickListener(it, item) }
        binding.ivCredentialMoreInfo.setOnClickListener { onShowMultivaluedDataClickListener(it, item) }
    }

    override fun refreshUserInterface(item: EudiCredentialAvailableInPresentationRequestHeaderSelectionItem) {

        setItemToBinding(binding, item)

        super.refreshUserInterface(item)
    }

    override fun setItemToBinding(binding: ItemEudiCredentialAvailableInPresentationRequestHeaderBinding, item: EudiCredentialAvailableInPresentationRequestHeaderSelectionItem) {
        binding.model = item
    }
    override fun populateView(item: EudiCredentialAvailableInPresentationRequestHeaderSelectionItem) {
        super.populateView(item)

    }

    fun onSelectionCredentialCheckClickListener(item: EudiCredentialAvailableInPresentationRequestHeaderSelectionItem) {
        item.toggleSelection()
        itemClickListener.onItemClicked(item)
    }

    private fun onFavoriteClickListener(view: View, item: EudiCredentialAvailableInPresentationRequestHeaderSelectionItem) {
        getLifecycleScope().launch(Dispatchers.Main) {

            item.toggleCredentialFavorite()
            val newCredential = item.getCredentialValue()

            withContext(Dispatchers.IO) {
                try {
                    IoCManager.getEudiCredentialDBInputAdapter().saveCredentialIntoDB(newCredential)
                } catch (e: CustomException) {
                    Log.e(TAG, "${AppUtils.getFunctionName()} ${e.message}", e)
                    throw e
                } catch (e: Exception) {
                    Log.e(TAG, "${AppUtils.getFunctionName()} ${e.message}", e)
                    throw e
                }
            }

        }

    }

    fun onShowMultivaluedDataClickListener(view: View, item: EudiCredentialAvailableInPresentationRequestHeaderSelectionItem) {
        itemClickListener.onItemButtonClicked(item)
    }
}