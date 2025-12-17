package com.inetum.eudi_dome_wallet.ui.presentationDetails

import android.annotation.SuppressLint
import android.content.Intent
import android.os.Bundle
import android.util.Log
import android.view.LayoutInflater
import android.view.View
import android.widget.ScrollView
import androidx.lifecycle.ViewModelProvider
import com.inetum.eudi_dome_wallet.R
import com.inetum.eudi_dome_wallet.common.constants.IntentKeys
import com.inetum.eudi_dome_wallet.common.utils.AppUtils
import com.inetum.eudi_dome_wallet.databinding.ActivityPresentationDetailEudiBinding
import com.inetum.eudi_dome_wallet.databinding.ItemEudiCredentialBinding
import com.inetum.eudi_dome_wallet.ui.base.BaseActivityK
import com.inetum.eudi_dome_wallet.ui.base.adapters.MultiTypeRecyclerViewAdapterK
import com.inetum.eudi_dome_wallet.ui.base.items.ItemInterfacesListeners
import com.inetum.eudi_dome_wallet.ui.common.EnumsItemsViewHolders
import com.inetum.eudi_dome_wallet.ui.common.models.EudiCredentialItem
import com.inetum.eudi_dome_wallet.ui.common.viewHolder.EudiCredentialItemViewHolder
import com.inetum.eudi_dome_wallet.ui.credentialDetails.CredentialDetailEudiActivity
import com.inetum.utils.toJsonString

class PresentationDetailEudiActivity :
    BaseActivityK<ActivityPresentationDetailEudiBinding, PresentationDetailEudiViewModel>() {
    private lateinit var adapter: MultiTypeRecyclerViewAdapterK
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
    }

    @SuppressLint("MissingSuperCall") // error reported in: https://issuetracker.google.com/issues/244088936
    override fun onNewIntent(intent: Intent) {
        super.onNewIntent(intent)
        binding.svPresentationDetail.fullScroll(ScrollView.FOCUS_UP)
    }

    override fun onResume() {
        super.onResume()
    }

    override fun getAssociatedLayoutResource(): Int {
        return R.layout.activity_presentation_detail_eudi
    }

    override fun attachViewListeners() {
        super.attachViewListeners()

        setupRecyclerView()
    }

    private fun setupRecyclerView() {
        val eudiItemClickListener =
            object : ItemInterfacesListeners.ItemButtonClickListener<EudiCredentialItem> {
                override fun onItemClicked(item: EudiCredentialItem) {
                    Log.d(TAG, "${AppUtils.getFunctionName()} ${item.toJsonString()}")
                    viewModel.addToExtraBundle(IntentKeys.Eudi.EUDI_CREDENTIAL_KEY, item.rawJwt)
                    viewModel.changeDestination(CredentialDetailEudiActivity::class.java)
                }

                override fun onItemButtonClicked(item: EudiCredentialItem) {
                    Log.d(TAG, "${AppUtils.getFunctionName()} ${item.toJsonString()}")
                }
            }

        adapter = MultiTypeRecyclerViewAdapterK()

        adapter.registerViewHolder(EnumsItemsViewHolders.ItemLayoutCredentialAssociated.TYPE_EUDI_CREDENTIAL.layoutId) { parent ->
            val binding = ItemEudiCredentialBinding.inflate(
                LayoutInflater.from(parent.context),
                parent,
                false
            )
            binding.lifecycleOwner = this
            EudiCredentialItemViewHolder(
                binding = binding,
                itemClickListener = eudiItemClickListener
            )
        }
    }

    override fun getAssociatedViewModel(): PresentationDetailEudiViewModel {
        return ViewModelProvider(this)[PresentationDetailEudiViewModel::class.java]
    }

    override fun setViewModelToBinding(
        binding: ActivityPresentationDetailEudiBinding,
        viewModel: PresentationDetailEudiViewModel
    ) {
        binding.viewModel = viewModel
    }

    override fun attachViewModelListeners() {
        super.attachViewModelListeners()

        viewModel.eudiCredentialItemList.observe(this, ::onEudiCredentialItemListChanged)
    }

    private fun onEudiCredentialItemListChanged(items: List<EudiCredentialItem>) {
        Log.d(TAG, "${AppUtils.getFunctionName()} items size: '${items.size}'")
        if (items.isNotEmpty())
            adapter.updateItemsList(items)
    }

    fun onClickBack(view: View) {
        super.onBackExecute()
    }

    fun onClickTerms(view: View) {
    }
}