package com.inetum.eudi_dome_wallet.ui.dataExchange.fragment

import android.util.Log
import android.view.LayoutInflater
import android.view.View
import androidx.fragment.app.activityViewModels
import androidx.lifecycle.ViewModelProvider
import androidx.recyclerview.widget.LinearLayoutManager
import com.inetum.eudi_dome_wallet.App
import com.inetum.eudi_dome_wallet.R
import com.inetum.eudi_dome_wallet.common.constants.IntentKeys
import com.inetum.eudi_dome_wallet.common.utils.AppUtils
import com.inetum.eudi_dome_wallet.common.utils.LiveDataUtilsK.getNonNullValue
import com.inetum.eudi_dome_wallet.core.models.eudi.credentials.EudiCredential
import com.inetum.eudi_dome_wallet.core.models.eudi.presentations.PresentationTokenRequestEudi
import com.inetum.eudi_dome_wallet.core.models.eudi.presentations.VerificationOfferEudi
import com.inetum.eudi_dome_wallet.databinding.FragmentSendRequestedPresentationBinding
import com.inetum.eudi_dome_wallet.databinding.ItemEudiPresentationRequestHeaderBinding
import com.inetum.eudi_dome_wallet.ui.base.BaseFragmentK
import com.inetum.eudi_dome_wallet.ui.base.adapters.MultiTypeRecyclerViewAdapterK
import com.inetum.eudi_dome_wallet.ui.base.items.ItemInterfacesListeners
import com.inetum.eudi_dome_wallet.ui.common.EnumsItemsViewHolders
import com.inetum.eudi_dome_wallet.ui.common.models.EudiPresentationRequestHeaderItem
import com.inetum.eudi_dome_wallet.ui.credentialDetails.CredentialDetailEudiActivity
import com.inetum.eudi_dome_wallet.ui.credentialMultivaluedDetail.CredentialMultivaluedDetailActivity
import com.inetum.eudi_dome_wallet.ui.custom.AlertDialogDTO
import com.inetum.eudi_dome_wallet.ui.dataExchange.DataExchangeViewModel
import com.inetum.eudi_dome_wallet.ui.dataExchange.fragment.viewHolders.EudiPresentationRequestHeaderViewHolder
import com.inetum.eudi_dome_wallet.ui.home.MainActivity
import com.inetum.utils.toJsonString

class SendRequestedPresentationFragment :
    BaseFragmentK<FragmentSendRequestedPresentationBinding, SendRequestedPresentationViewModel>() {
    private enum class PRESENTATION_CHECKED {
        ALL
    }

    private val parentViewModel: DataExchangeViewModel by activityViewModels()
    private lateinit var adapter: MultiTypeRecyclerViewAdapterK
    private lateinit var verificationOffer: VerificationOfferEudi
    private lateinit var selectedCredentialList: MutableList<EudiCredential>
    private lateinit var credentialsChecked: PRESENTATION_CHECKED
    private var presentationTokenRequest: PresentationTokenRequestEudi? = null
    private lateinit var eudiPresentationRequestHeaderItemList: List<EudiPresentationRequestHeaderItem>

    override fun onResume() {
        super.onResume()

        if (parentViewModel.verificationOffer != null) {

            verificationOffer = parentViewModel.verificationOffer!!
            viewModel.startFlowEudiVPTokenRequest(verificationOffer)
        }
    }

    override fun getAssociatedLayoutResource(): Int {
        return R.layout.fragment_send_requested_presentation
    }

    override fun initializeView(mBinding: FragmentSendRequestedPresentationBinding) {
        super.initializeView(mBinding)
        binding.includePresentationsHeader.llWarningMessage.visibility = View.GONE

        when (parentViewModel.dataTechnologyType.value) {

            DataExchangeViewModel.TECHNOLOGY_TYPE.EUDI_FLOW -> {

                binding.clRegisterEvidenceInBlockchain.visibility = View.GONE

                binding.includePresentationsHeader.tvPresentationActionPurposeInfo.text =
                    App.getStringResource(R.string.presentation_request_choose_data_eudi)

            }

            null -> throw IllegalStateException("parentViewModel.dataExchangeType is null")
        }
    }

    override fun attachViewListeners() {
        super.attachViewListeners()

        setupRecyclerView()

        binding.btnShareData.setOnClickListener(::onClickShareData)
    }

    private fun setupRecyclerView() {

        try {

            val eudiItemClickListener = object :
                ItemInterfacesListeners.ItemButtonClickListener<EudiPresentationRequestHeaderItem> {

                /**
                 * This listener is used to observe the click on check box in this recyclerView element.
                 *
                 * @param item used in this recyclerView element.
                 */
                override fun onItemClicked(item: EudiPresentationRequestHeaderItem) {
                    Log.d(TAG, "${AppUtils.getFunctionName()} ${item.toJsonString()}")

                    refreshEudiRequestedMissingData(eudiPresentationRequestHeaderItemList)
                }

                /**
                 * This listener is used to observe the click on the details button to switch to the detail screen [CredentialDetailEudiActivity]
                 *
                 * @param item used in this recyclerView element.
                 */
                override fun onItemButtonClicked(item: EudiPresentationRequestHeaderItem) {
                    Log.d(TAG, "${AppUtils.getFunctionName()} ${item.toJsonString()}")

                    val credentialEudi =
                        item.prefOrDefaultItem.getNonNullValue().credential.getNonNullValue()
                    val rawJwt = credentialEudi.rawJwt
                    viewModel.addToExtraBundle(IntentKeys.Eudi.EUDI_CREDENTIAL_MULTI_KEY, rawJwt)
                    viewModel.destination.value = CredentialMultivaluedDetailActivity::class.java
                }
            }

            adapter = MultiTypeRecyclerViewAdapterK()

            adapter.registerViewHolder(EnumsItemsViewHolders.ItemLayoutPresentationAssociated.TYPE_EUDI_PRESENTATION_REQUEST_HEADER.layoutId) { parent ->
                val binding = ItemEudiPresentationRequestHeaderBinding.inflate(
                    LayoutInflater.from(parent.context), parent, false
                )
                binding.lifecycleOwner = viewLifecycleOwner
                EudiPresentationRequestHeaderViewHolder(
                    binding = binding, itemClickListener = eudiItemClickListener
                )
            }

            binding.rvCredentialsList.layoutManager = LinearLayoutManager(requireContext())
            binding.rvCredentialsList.adapter = adapter

        } catch (e: Exception) {
            Log.e(TAG, "${AppUtils.getFunctionName()} Error register recyclerView. ", e)
        }
    }

    override fun getAssociatedViewModel(): SendRequestedPresentationViewModel {
        return ViewModelProvider(this)[SendRequestedPresentationViewModel::class.java]
    }

    override fun setViewModelToBinding(
        binding: FragmentSendRequestedPresentationBinding,
        viewModel: SendRequestedPresentationViewModel
    ) {
        binding.viewModel = viewModel
    }

    override fun attachViewModelListeners() {
        super.attachViewModelListeners()
        viewModel.presentationTokenRequest.observe(
            viewLifecycleOwner, ::onPresentationTokenRequestChanged
        )
        viewModel.eudiPresentationRequestHeaderItemList.observe(
            viewLifecycleOwner, ::onEudiPresentationRequestHeaderItemListChanged
        )
        viewModel.alertDialogDTOAddedPresentation.observe(
            viewLifecycleOwner, ::onAlertDialogDTOSuccessAddedPresentationChanged
        )
    }

    override fun populateView() {
        super.populateView()

        selectedCredentialList = mutableListOf()

        eudiPresentationRequestHeaderItemList = listOf()

        credentialsChecked = PRESENTATION_CHECKED.ALL

        if (parentViewModel.verificationOffer != null) {
            binding.includePresentationsHeader.tvPresentationActionPurposeInfo.visibility =
                View.GONE
            binding.includePresentationsHeader.llTermsAndConditions.visibility = View.GONE
        } else {
            binding.includePresentationsHeader.tvPresentationActionPurposeInfo.visibility =
                View.VISIBLE
            binding.includePresentationsHeader.llTermsAndConditions.visibility = View.VISIBLE
        }
    }

    private fun onPresentationTokenRequestChanged(presentationTokenRequest: PresentationTokenRequestEudi) {
        Log.d(
            TAG, "${AppUtils.getFunctionName()} presentationTokenRequest: $presentationTokenRequest"
        )

        this.presentationTokenRequest = presentationTokenRequest

    }

    private fun onEudiPresentationRequestHeaderItemListChanged(eudiPresentationRequestHeaderItemList: List<EudiPresentationRequestHeaderItem>) {
        Log.d(
            TAG,
            "${AppUtils.getFunctionName()} eudiPresentationRequestHeaderItemList: $eudiPresentationRequestHeaderItemList"
        )

        this.eudiPresentationRequestHeaderItemList = eudiPresentationRequestHeaderItemList

        refreshEudiRequestedMissingData(eudiPresentationRequestHeaderItemList)

        adapter.updateItemsList(eudiPresentationRequestHeaderItemList)

    }

    private fun onAlertDialogDTOSuccessAddedPresentationChanged(dto: AlertDialogDTO) {
        showAlertDialogOneButton(
            dto = dto, kFunctionPositive = {
                Log.d(
                    TAG, "${AppUtils.getFunctionName()} Popup accepted SUCCESS_ADDING_PRESENTATION"
                )
                viewModel.extras?.clear()
                viewModel.destination.postValue(MainActivity::class.java)
            })

    }

    private fun onClickShareData(view: View) {
        when (parentViewModel.dataTechnologyType.value) {
            DataExchangeViewModel.TECHNOLOGY_TYPE.EUDI_FLOW -> {

                viewModel.startFlowEudiVerifiablePresentation(
                    eudiPresentationRequestHeaderItem = eudiPresentationRequestHeaderItemList,
                    presentationTokenRequest = presentationTokenRequest
                )

            }

            null -> throw IllegalStateException("parentViewModel.dataExchangeType is null")
            else -> {}
        }
    }

    private fun refreshEudiRequestedMissingData(eudiPresentationRequestHeaderItemList: List<EudiPresentationRequestHeaderItem>) {
        var credentialSelected = 0
        eudiPresentationRequestHeaderItemList.forEach {
            val selectedItem = it.prefOrDefaultItem.value
            if (!it.isOptional() && selectedItem?.isSelected?.value == true) credentialSelected++
        }

        var inputDescriptorsRequired = 0
        val missingCred = inputDescriptorsRequired - credentialSelected

        if (missingCred > 0) {
            val missDataText = this.resources.getQuantityString(
                R.plurals.presentation_request_missing_cred_txt_sub_eudi, missingCred, missingCred
            )

            binding.includePresentationsHeader.llWarningMessage.visibility = View.VISIBLE
            binding.includePresentationsHeader.tvWarningMessage.text = missDataText

            binding.btnShareData.isEnabled = false

            binding.includePresentationsHeader.tvPresentationActionPurposeInfo.text =
                this.getString(R.string.presentation_request_not_sent_data_eudi)
        } else {
            binding.includePresentationsHeader.llWarningMessage.visibility = View.GONE
            binding.btnShareData.isEnabled = true

            binding.includePresentationsHeader.tvPresentationActionPurposeInfo.text =
                this.getString(R.string.presentation_request_choose_data_eudi)
        }

        binding.includePresentationsHeader.tvPresentationActionPurposeInfo.visibility = View.VISIBLE
    }
}