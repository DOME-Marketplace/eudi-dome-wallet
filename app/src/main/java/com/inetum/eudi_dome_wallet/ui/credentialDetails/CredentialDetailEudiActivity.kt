package com.inetum.eudi_dome_wallet.ui.credentialDetails

import android.annotation.SuppressLint
import android.content.Intent
import android.os.Bundle
import android.util.Log
import android.view.LayoutInflater
import android.view.View
import android.widget.ScrollView
import androidx.lifecycle.ViewModelProvider
import androidx.recyclerview.widget.LinearLayoutManager
import com.inetum.eudi_dome_wallet.R
import com.inetum.eudi_dome_wallet.common.constants.IntentKeys
import com.inetum.eudi_dome_wallet.common.utils.AppUtils
import com.inetum.eudi_dome_wallet.common.utils.LiveDataUtilsK.getNonNullValue
import com.inetum.eudi_dome_wallet.databinding.ActivityCredentialDetailEudiBinding
import com.inetum.eudi_dome_wallet.databinding.ItemEudiPresentationBinding
import com.inetum.eudi_dome_wallet.ui.base.BaseActivityK
import com.inetum.eudi_dome_wallet.ui.base.adapters.MultiTypeRecyclerViewAdapterK
import com.inetum.eudi_dome_wallet.ui.base.items.ItemInterfacesListeners
import com.inetum.eudi_dome_wallet.ui.common.EnumsItemsViewHolders
import com.inetum.eudi_dome_wallet.ui.common.models.EudiPresentationItem
import com.inetum.eudi_dome_wallet.ui.common.viewHolder.EudiPresentationItemViewHolder
import com.inetum.eudi_dome_wallet.ui.credentialMultivaluedDetail.CredentialMultivaluedDetailActivity
import com.inetum.eudi_dome_wallet.ui.presentationDetails.PresentationDetailEudiActivity
import com.inetum.utils.toJsonString

class CredentialDetailEudiActivity :
    BaseActivityK<ActivityCredentialDetailEudiBinding, CredentialDetailEudiViewModel>() {

    private lateinit var adapter: MultiTypeRecyclerViewAdapterK
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
    }

    @SuppressLint("MissingSuperCall")
    override fun onNewIntent(intent: Intent?) {
        super.onNewIntent(intent)
        if (intent != null)
            viewModel.startUpViewModel(intent.extras)
        else
            viewModel.startUpViewModel(null)
        binding.svCredentialDetail.fullScroll(ScrollView.FOCUS_UP)
    }

    override fun getAssociatedLayoutResource(): Int {
        return R.layout.activity_credential_detail_eudi
    }

    override fun attachViewListeners() {
        super.attachViewListeners()

        setupRecyclerView()
    }

    private fun setupRecyclerView() {

        val eudiItemClickListener =
            object : ItemInterfacesListeners.ItemButtonClickListener<EudiPresentationItem> {
                override fun onItemClicked(item: EudiPresentationItem) {
                    Log.d(TAG, "${AppUtils.getFunctionName()} ${item.toJsonString()}")
                    viewModel.addToExtraBundle(IntentKeys.Eudi.EUDI_PRESENTATION_KEY, item.jtiPr)
                    viewModel.changeDestination(PresentationDetailEudiActivity::class.java)
                }

                override fun onItemButtonClicked(item: EudiPresentationItem) {
                    Log.d(TAG, "${AppUtils.getFunctionName()} ${item.toJsonString()}")
                }
            }

        adapter = MultiTypeRecyclerViewAdapterK()

        adapter.registerViewHolder(EnumsItemsViewHolders.ItemLayoutPresentationAssociated.TYPE_EUDI_PRESENTATION.layoutId) { parent ->
            val binding = ItemEudiPresentationBinding.inflate(
                LayoutInflater.from(parent.context),
                parent,
                false
            )
            binding.lifecycleOwner = this
            EudiPresentationItemViewHolder(
                binding = binding,
                itemClickListener = eudiItemClickListener
            )
        }

        binding.childRecyclerview.layoutManager = LinearLayoutManager(this)
        binding.childRecyclerview.adapter = adapter
    }

    override fun getAssociatedViewModel(): CredentialDetailEudiViewModel {
        return ViewModelProvider(this)[CredentialDetailEudiViewModel::class.java]
    }

    override fun setViewModelToBinding(
        binding: ActivityCredentialDetailEudiBinding,
        viewModel: CredentialDetailEudiViewModel
    ) {
        binding.viewModel = viewModel
    }

    override fun attachViewModelListeners() {
        super.attachViewModelListeners()
        viewModel.eudiPresentationItemList.observe(this, ::onEudiPresentationItemListChanged)
    }

    private fun onEudiPresentationItemListChanged(eudiPresentationItemList: List<EudiPresentationItem>) {
        if (eudiPresentationItemList.isNotEmpty())
            adapter.updateItemsList(eudiPresentationItemList)
    }

    fun onClickBack(view: View) {
        super.onBackExecute()
    }

    fun onClickViewMultivaluedDetail(view: View) {
        try {
            val credential = viewModel.credential.getNonNullValue()
            val rawJwt = credential.rawJwt

            viewModel.addToExtraBundle(IntentKeys.Eudi.EUDI_CREDENTIAL_MULTI_KEY, rawJwt)
            viewModel.destination.value = CredentialMultivaluedDetailActivity::class.java
        } catch (e: Exception) {
            Log.e(TAG, "${AppUtils.getFunctionName()} ${e.message}", e)
        }
    }
}