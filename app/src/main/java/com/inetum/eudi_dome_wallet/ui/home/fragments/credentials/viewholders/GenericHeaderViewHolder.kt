package com.inetum.eudi_dome_wallet.ui.home.fragments.credentials.viewholders

import android.content.Intent
import android.util.Log
import android.view.LayoutInflater
import android.view.View
import androidx.core.view.isVisible
import androidx.recyclerview.widget.LinearLayoutManager
import com.inetum.eudi_dome_wallet.R
import com.inetum.eudi_dome_wallet.common.constants.IntentKeys
import com.inetum.eudi_dome_wallet.common.exception.CustomException
import com.inetum.eudi_dome_wallet.common.utils.AppUtils
import com.inetum.eudi_dome_wallet.common.utils.LiveDataUtilsK.getNonNullValue
import com.inetum.eudi_dome_wallet.common.utils.ViewUtils.toggleVisibility
import com.inetum.eudi_dome_wallet.core.models.eudi.credentials.EudiCredential
import com.inetum.eudi_dome_wallet.core.models.eudi.presentations.PresentationEudi
import com.inetum.eudi_dome_wallet.databinding.ItemCredentialHeaderBinding
import com.inetum.eudi_dome_wallet.databinding.ItemEudiCredentialBinding
import com.inetum.eudi_dome_wallet.databinding.ItemEudiPresentationBinding
import com.inetum.eudi_dome_wallet.manager.IoCManager
import com.inetum.eudi_dome_wallet.ui.base.adapters.MultiTypeRecyclerViewAdapterK
import com.inetum.eudi_dome_wallet.ui.base.items.ItemInterfacesListeners
import com.inetum.eudi_dome_wallet.ui.base.viewHolders.BaseViewHolderK
import com.inetum.eudi_dome_wallet.ui.common.EnumsItemsViewHolders
import com.inetum.eudi_dome_wallet.ui.common.models.EudiPresentationItem
import com.inetum.eudi_dome_wallet.ui.common.models.EudiCredentialItem
import com.inetum.eudi_dome_wallet.ui.common.models.GenericHeaderItem
import com.inetum.eudi_dome_wallet.ui.common.viewHolder.EudiCredentialItemViewHolder
import com.inetum.eudi_dome_wallet.ui.common.viewHolder.EudiPresentationItemViewHolder
import com.inetum.eudi_dome_wallet.ui.credentialDetails.CredentialDetailEudiActivity
import com.inetum.eudi_dome_wallet.ui.presentationDetails.PresentationDetailEudiActivity
import com.inetum.utils.toJsonString
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.launch
import kotlinx.coroutines.withContext
import java.io.Serializable

class GenericHeaderViewHolder<T : Serializable>(
    binding: ItemCredentialHeaderBinding,
    private val itemClickListener: ItemInterfacesListeners.ItemButtonClickListener<GenericHeaderItem<T>>
) : BaseViewHolderK<ItemCredentialHeaderBinding, GenericHeaderItem<T>>(binding) {
    private lateinit var adapter: MultiTypeRecyclerViewAdapterK

    override fun bind(item: GenericHeaderItem<T>) {
        super.bind(item)

        super.refreshUserInterface(item)
    }

    override fun initializeView(item: GenericHeaderItem<T>) {
        super.initializeView(item)

        setupRecyclerView(item)
    }

    private fun setupRecyclerView(outerItem: GenericHeaderItem<T>) {

        adapter = MultiTypeRecyclerViewAdapterK()

        attachEudiCredentialToRVAdapter()
        attachEudiPresentationToRVAdapter()

        binding.childRecyclerview.layoutManager = LinearLayoutManager(getContext())
        binding.childRecyclerview.adapter = adapter

        Log.d(TAG, "${AppUtils.getFunctionName()} register rv adapter correctly")
    }

    private fun attachEudiCredentialToRVAdapter() {

        val eudiItemClickListener =
            object : ItemInterfacesListeners.ItemButtonClickListener<EudiCredentialItem> {
                /**
                 * receives the event of clicking on the item to switch to the detail screen [CredentialDetailEudiActivity]
                 */
                override fun onItemClicked(item: EudiCredentialItem) {
                    Log.d(TAG, "${AppUtils.getFunctionName()} ${item.toJsonString()}")

                    val intent =
                        Intent(getContext(), CredentialDetailEudiActivity::class.java).apply {
                            putExtra(IntentKeys.Eudi.EUDI_CREDENTIAL_KEY, item.rawJwt)
                            flags = Intent.FLAG_ACTIVITY_NEW_TASK
                        }
                    getContext().startActivity(intent)
                }

                override fun onItemButtonClicked(item: EudiCredentialItem) {
                    Log.d(TAG, "${AppUtils.getFunctionName()} ${item.toJsonString()}")

                    getLifecycleScope().launch(Dispatchers.Main) {
                        try {
                            val credential = item.getCredentialValue()
                            Log.d(
                                TAG,
                                "${AppUtils.getFunctionName()} credential:\t${credential.toJsonString()}"
                            )
                            credential.favorite = item.favorite
                            withContext(Dispatchers.IO) {
                                IoCManager.getEudiCredentialDBInputAdapter()
                                    .updateCredentialIntoDB(credential)
                            }

                        } catch (e: CustomException) {
                            Log.e(
                                TAG,
                                "${AppUtils.getFunctionName()} ${e.message}. ${e.userMessage}",
                                e
                            )

                        } catch (e: Exception) {
                            Log.e(TAG, "${AppUtils.getFunctionName()} Error", e)

                        }
                    }

                }
            }

        adapter.registerViewHolder(EnumsItemsViewHolders.ItemLayoutCredentialAssociated.TYPE_EUDI_CREDENTIAL.layoutId) { parent ->
            val binding = ItemEudiCredentialBinding.inflate(
                LayoutInflater.from(parent.context), parent, false
            )
            binding.lifecycleOwner = getLifecycleOwner()
            EudiCredentialItemViewHolder(
                binding = binding, itemClickListener = eudiItemClickListener
            )
        }

    }

    private fun attachEudiPresentationToRVAdapter() {

        val eudiPresentationItemClickListener =
            object : ItemInterfacesListeners.ItemButtonClickListener<EudiPresentationItem> {

                override fun onItemClicked(item: EudiPresentationItem) {
                    Log.d(TAG, "${AppUtils.getFunctionName()} ${item.toJsonString()}")

                    val intent =
                        Intent(getContext(), PresentationDetailEudiActivity::class.java).apply {
                            putExtra(IntentKeys.Eudi.EUDI_PRESENTATION_KEY, item.jtiPr)
                            flags = Intent.FLAG_ACTIVITY_NEW_TASK
                        }
                    getContext().startActivity(intent)
                }

                override fun onItemButtonClicked(item: EudiPresentationItem) {
                    Log.d(TAG, "${AppUtils.getFunctionName()} ${item.toJsonString()}")
                }
            }

        adapter.registerViewHolder(EnumsItemsViewHolders.ItemLayoutPresentationAssociated.TYPE_EUDI_PRESENTATION.layoutId) { parent ->
            val binding = ItemEudiPresentationBinding.inflate(
                LayoutInflater.from(parent.context), parent, false
            )
            binding.lifecycleOwner = getLifecycleOwner()
            EudiPresentationItemViewHolder(
                binding = binding, itemClickListener = eudiPresentationItemClickListener
            )
        }

    }


    override fun attachViewListeners(item: GenericHeaderItem<T>) {
        super.attachViewListeners(item)
        binding.llMinimizeMaximize.setOnClickListener { onMinimizeMaximizeClickListener(it, item) }
    }

    override fun refreshUserInterface(item: GenericHeaderItem<T>) {

        setItemToBinding(binding, item)

        super.refreshUserInterface(item)
    }

    override fun setItemToBinding(
        binding: ItemCredentialHeaderBinding, item: GenericHeaderItem<T>
    ) {
    }

    override fun attachItemListeners(item: GenericHeaderItem<T>) {
        super.attachItemListeners(item)

        item.itemList.observe(getLifecycleOwner(), ::onHeadersListChanged)
    }

    override fun populateView(item: GenericHeaderItem<T>) {
        super.populateView(item)

        binding.headerName.text = item.headerTitle.getNonNullValue()
    }

    private fun onHeadersListChanged(itemList: List<T>) {
        Log.d(TAG, "${AppUtils.getFunctionName()} ${itemList.toJsonString(true)}")

        if (itemList.isNotEmpty()) {

            val castedItemList = when (itemList.firstOrNull()) {

                is EudiCredential -> {
                    itemList.filterIsInstance<EudiCredential>().map {
                        EudiCredentialItem(
                            credential = it
                        )
                    }
                }

                is PresentationEudi -> {
                    itemList.filterIsInstance<PresentationEudi>().map {
                        EudiPresentationItem(
                            presentation = it
                        )
                    }
                }

                else -> throw IllegalArgumentException("Unsupported type for adapter")
            }

            adapter.updateItemsList(castedItemList)
        }

    }

    private fun onMinimizeMaximizeClickListener(view: View, item: GenericHeaderItem<T>) {
        binding.childRecyclerview.toggleVisibility()

        val isFolded = !binding.childRecyclerview.isVisible
        binding.tvMinimizeMaximize.text = if (isFolded) binding.root.context.getString(
            R.string.profile_credential_header_maximize
        )
        else binding.root.context.getString(R.string.profile_credential_header_minimize)

        binding.ivMinimizeMaximize.rotation = if (isFolded) 180f else 0f

    }
}