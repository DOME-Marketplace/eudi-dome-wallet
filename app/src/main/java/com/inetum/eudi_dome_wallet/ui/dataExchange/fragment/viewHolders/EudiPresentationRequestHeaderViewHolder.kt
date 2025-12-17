package com.inetum.eudi_dome_wallet.ui.dataExchange.fragment.viewHolders

import android.util.Log
import android.view.LayoutInflater
import android.view.View
import androidx.core.view.isVisible
import androidx.recyclerview.widget.LinearLayoutManager
import com.inetum.eudi_dome_wallet.App
import com.inetum.eudi_dome_wallet.R
import com.inetum.eudi_dome_wallet.common.exception.CustomException
import com.inetum.eudi_dome_wallet.common.utils.AppUtils
import com.inetum.eudi_dome_wallet.common.utils.LiveDataUtilsK.getNonNullValue
import com.inetum.eudi_dome_wallet.common.utils.ViewUtils.toggleVisibility
import com.inetum.eudi_dome_wallet.databinding.ItemEudiCredentialAvailableInPresentationRequestHeaderBinding
import com.inetum.eudi_dome_wallet.databinding.ItemEudiPresentationRequestHeaderBinding
import com.inetum.eudi_dome_wallet.manager.IoCManager
import com.inetum.eudi_dome_wallet.ui.base.adapters.MultiTypeRecyclerViewAdapterK
import com.inetum.eudi_dome_wallet.ui.base.items.ItemInterfacesListeners
import com.inetum.eudi_dome_wallet.ui.base.viewHolders.BaseViewHolderK
import com.inetum.eudi_dome_wallet.ui.common.EnumsItemsViewHolders
import com.inetum.eudi_dome_wallet.ui.common.models.EudiCredentialAvailableInPresentationRequestHeaderSelectionItem
import com.inetum.eudi_dome_wallet.ui.common.models.EudiPresentationRequestHeaderItem
import com.inetum.eudi_dome_wallet.ui.credentialDetails.CredentialDetailEudiActivity
import com.inetum.utils.toJsonString
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.launch
import kotlinx.coroutines.withContext

class EudiPresentationRequestHeaderViewHolder(
    binding: ItemEudiPresentationRequestHeaderBinding,
    private val itemClickListener: ItemInterfacesListeners.ItemButtonClickListener<EudiPresentationRequestHeaderItem>
) : BaseViewHolderK<ItemEudiPresentationRequestHeaderBinding, EudiPresentationRequestHeaderItem>(
    binding
) {
    private lateinit var adapter: MultiTypeRecyclerViewAdapterK

    override fun bind(item: EudiPresentationRequestHeaderItem) {
        super.bind(item)

        super.refreshUserInterface(item)

        adapter.updateItemsList(item.vcExtraItems.value ?: arrayListOf())
    }

    override fun attachViewListeners(item: EudiPresentationRequestHeaderItem) {
        super.attachViewListeners(item)

        setupRecyclerView(item)

        binding.includePresentationRequestCredentialSelectionItem.clCredentialSelectionCheck.setOnClickListener {
            onItemRootClickListener(
                it, item
            )
        }

        binding.includePresentationRequestCredentialSelectionItem.ivFavouriteIcon.setOnClickListener {
            onFavoriteClickListener(
                it, item
            )
        }

        binding.includePresentationRequestCredentialSelectionItem.ivCredentialMoreInfo.setOnClickListener {
            onShowMultivaluedDataClickListener(
                it, item
            )
        }
        binding.llExtraItem.setOnClickListener { onExtraItemClickListener(it, item) }
    }

    private fun setupRecyclerView(eudiPresentationRequestHeaderItem: EudiPresentationRequestHeaderItem) {

        try {

            val eudiItemClickListener = object :
                ItemInterfacesListeners.ItemButtonClickListener<EudiCredentialAvailableInPresentationRequestHeaderSelectionItem> {

                /**
                 * This listener is used to observe the click on check box in this recyclerView element.
                 *
                 * @param item used in this recyclerView element.
                 */
                override fun onItemClicked(item: EudiCredentialAvailableInPresentationRequestHeaderSelectionItem) {
                    Log.d(TAG, "${AppUtils.getFunctionName()} ${item.toJsonString()}")

                    adapter.let {
                        eudiPresentationRequestHeaderItem.onRecyclerItemClick(
                            adapter, item
                        )
                    }
                    itemClickListener.onItemClicked(eudiPresentationRequestHeaderItem)
                }

                /**
                 * This listener is used to observe the click on the details button to switch to the detail screen [CredentialDetailEudiActivity]
                 *
                 * @param item used in this recyclerView element.
                 */
                override fun onItemButtonClicked(item: EudiCredentialAvailableInPresentationRequestHeaderSelectionItem) {
                    Log.d(TAG, "${AppUtils.getFunctionName()} ${item.toJsonString()}")

                    val copyEudiPresentationRequestHeaderItem = EudiPresentationRequestHeaderItem(
                        presentationRequested = eudiPresentationRequestHeaderItem.presentationRequested.getNonNullValue(),
                        itemPosition = eudiPresentationRequestHeaderItem.itemPosition,
                        eudiCredentialList = arrayListOf()
                    )
                    copyEudiPresentationRequestHeaderItem.prefOrDefaultItem.value = item

                    itemClickListener.onItemButtonClicked(copyEudiPresentationRequestHeaderItem)
                }
            }

            adapter = MultiTypeRecyclerViewAdapterK()


            adapter.registerViewHolder(EnumsItemsViewHolders.ItemLayoutCredentialAssociated.TYPE_EUDI_CREDENTIAL_AVAILABLE_IN_PRESENTATION_REQUEST_HEADER.layoutId) { parent ->
                val binding = ItemEudiCredentialAvailableInPresentationRequestHeaderBinding.inflate(
                    LayoutInflater.from(parent.context), parent, false
                )
                binding.lifecycleOwner = super.getLifecycleOwner()
                EudiCredentialAvailableInPresentationRequestHeaderSelectionItemViewHolder(
                    binding = binding, itemClickListener = eudiItemClickListener
                )
            }

            binding.rvExtraCredentials.layoutManager = LinearLayoutManager(super.getContext())
            binding.rvExtraCredentials.adapter = adapter

        } catch (e: Exception) {
            Log.e(TAG, "${AppUtils.getFunctionName()} Error register recyclerView. ", e)
        }
    }
    override fun refreshUserInterface(item: EudiPresentationRequestHeaderItem) {

        setItemToBinding(binding, item)

        super.refreshUserInterface(item)
    }

    override fun setItemToBinding(
        binding: ItemEudiPresentationRequestHeaderBinding, item: EudiPresentationRequestHeaderItem
    ) {
        binding.model = item
    }
    override fun populateView(item: EudiPresentationRequestHeaderItem) {
        super.populateView(item)
        if (item.credentialAvailableList.isEmpty()) {
            binding.clPresentationRequestCredentialSelectionItemNoData.visibility = View.VISIBLE
            binding.clPresentationRequestCredentialSelectionItemData.visibility = View.GONE
        } else {
            binding.clPresentationRequestCredentialSelectionItemNoData.visibility = View.GONE
            binding.clPresentationRequestCredentialSelectionItemData.visibility = View.VISIBLE
        }
    }
    private fun onItemRootClickListener(view: View, item: EudiPresentationRequestHeaderItem) {
        item.unChangePrefItemSelection()
        itemClickListener.onItemClicked(item)
    }

    private fun onFavoriteClickListener(view: View, item: EudiPresentationRequestHeaderItem) {
        getLifecycleScope().launch(Dispatchers.Main) {

            item.prefOrDefaultItem.getNonNullValue().toggleCredentialFavorite()
            val newCredential = item.prefOrDefaultItem.getNonNullValue().getCredentialValue()

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

    private fun onShowMultivaluedDataClickListener(
        view: View, item: EudiPresentationRequestHeaderItem
    ) {
        itemClickListener.onItemButtonClicked(item)
    }


    private fun onExtraItemClickListener(view: View, item: EudiPresentationRequestHeaderItem) {

        binding.rvExtraCredentials.toggleVisibility()

        updateExtraItem(item)
    }
    private fun updateExtraItem(item: EudiPresentationRequestHeaderItem) {

        val isFolded = !binding.rvExtraCredentials.isVisible

        val itemsSize = item.vcExtraItems.getNonNullValue().size

        val extraItemTitleText = if (isFolded) {
            App.context.resources.getQuantityString(
                R.plurals.presentation_request_view_data_eudi, itemsSize, itemsSize
            )

        } else {
            App.context.resources.getQuantityString(
                R.plurals.presentation_request_view_data_eudi_hidden, itemsSize, itemsSize
            )

        }

        binding.tvExtraItemTitle.text = extraItemTitleText

        binding.ivExtraItem.rotation = if (isFolded) 180f else 0f
    }
}