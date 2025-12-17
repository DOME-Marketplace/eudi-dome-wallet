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
import com.inetum.eudi_dome_wallet.core.models.eudi.credentials.CredentialEudiString
import com.inetum.eudi_dome_wallet.databinding.FragmentReceivingCredentialsBinding
import com.inetum.eudi_dome_wallet.databinding.ItemEudiCredentialStringSelectionBinding
import com.inetum.eudi_dome_wallet.ui.base.BaseFragmentK
import com.inetum.eudi_dome_wallet.ui.base.adapters.MultiTypeRecyclerViewAdapterK
import com.inetum.eudi_dome_wallet.ui.base.items.ItemInterfacesListeners
import com.inetum.eudi_dome_wallet.ui.common.EnumsItemsViewHolders
import com.inetum.eudi_dome_wallet.ui.common.models.EudiCredentialStringSelectionItem
import com.inetum.eudi_dome_wallet.ui.credentialMultivaluedDetail.CredentialMultivaluedDetailActivity
import com.inetum.eudi_dome_wallet.ui.custom.AlertDialogDTO
import com.inetum.eudi_dome_wallet.ui.dataExchange.DataExchangeViewModel
import com.inetum.eudi_dome_wallet.ui.dataExchange.dialog.CodeInputDialogFragment
import com.inetum.eudi_dome_wallet.ui.dataExchange.fragment.viewHolders.EudiCredentialStringSelectionItemViewHolder
import com.inetum.eudi_dome_wallet.ui.home.MainActivity
import com.inetum.utils.getValueAs
import com.inetum.utils.toJsonString

class ReceivingCredentialsFragment :
    BaseFragmentK<FragmentReceivingCredentialsBinding, ReceivingCredentialsViewModel>() {
    private enum class CREDENTIAL_CHECKED {
        NONE,
        SOME,
        ALL
    }
    private val parentViewModel: DataExchangeViewModel by activityViewModels()

    private lateinit var adapter: MultiTypeRecyclerViewAdapterK
    private lateinit var eudiCredentialOffering: Map<String, *>

    private lateinit var eudiSelectedCredentialItemList: MutableList<EudiCredentialStringSelectionItem>

    private lateinit var inputCode: String
    private lateinit var credentialsChecked: CREDENTIAL_CHECKED
    override fun onResume() {
        super.onResume()

        if (parentViewModel.credentialOffering != null) {

            binding.clRegisterEvidenceInBlockchain.visibility = View.GONE

            binding.includeEudiCredentialsHeader.llWarningMessage.visibility = View.GONE

            eudiCredentialOffering = parentViewModel.credentialOffering!!

            viewModel.startFlowEudiDiscoveryEndpoints(eudiCredentialOffering)
        }
    }
    override fun getAssociatedLayoutResource(): Int {
        return R.layout.fragment_receiving_credentials
    }

    override fun attachViewListeners() {
        super.attachViewListeners()

        setupRecyclerView()

        binding.clCredentialSelectionIncludes.setOnClickListener(::onClickPressAllCheckedButton)

        binding.btnAddData.setOnClickListener(::onClickAddData)
    }

    private fun setupRecyclerView() {

        try {
            val eudiItemClickListener = object :
                ItemInterfacesListeners.ItemButtonClickListener<EudiCredentialStringSelectionItem> {


                /**
                 * This listener is used to observe the click on check box in this recyclerView element.
                 *
                 * @param item used in this recyclerView element.
                 */
                override fun onItemClicked(item: EudiCredentialStringSelectionItem) {
                }

                /**
                 * This listener is used to observe the click on the details button to switch to the detail screen [CredentialMultivaluedDetailActivity]
                 *
                 * @param item used in this recyclerView element.
                 */
                override fun onItemButtonClicked(item: EudiCredentialStringSelectionItem) {
                    Log.d(TAG, "${AppUtils.getFunctionName()} ${item.toJsonString()}")

                    val credential = item.getCredentialValue()

                    viewModel.addToExtraBundle(
                        IntentKeys.Eudi.EUDI_CREDENTIAL_MULTI_KEY,
                        credential
                    )
                    viewModel.destination.value = CredentialMultivaluedDetailActivity::class.java

                }
            }

            adapter = MultiTypeRecyclerViewAdapterK()

            adapter.registerViewHolder(EnumsItemsViewHolders.ItemLayoutCredentialAssociated.TYPE_EUDI_CREDENTIAL_STRING_SELECTION.layoutId) { parent ->
                val binding = ItemEudiCredentialStringSelectionBinding.inflate(
                    LayoutInflater.from(parent.context),
                    parent,
                    false
                )
                binding.lifecycleOwner = viewLifecycleOwner
                EudiCredentialStringSelectionItemViewHolder(
                    binding = binding,
                    itemClickListener = eudiItemClickListener
                )
            }

            binding.rvCredentialsList.layoutManager = LinearLayoutManager(requireContext())
            binding.rvCredentialsList.adapter = adapter

        } catch (e: Exception) {
            Log.e(TAG, "${AppUtils.getFunctionName()} Error register recyclerView. ", e)
        }
    }
    override fun getAssociatedViewModel(): ReceivingCredentialsViewModel {
        return ViewModelProvider(this)[ReceivingCredentialsViewModel::class.java]
    }

    override fun setViewModelToBinding(
        binding: FragmentReceivingCredentialsBinding,
        viewModel: ReceivingCredentialsViewModel
    ) {
        binding.viewModel = viewModel
    }

    override fun attachViewModelListeners() {
        super.attachViewModelListeners()
        viewModel.discoveryEndpoints.observe(viewLifecycleOwner, ::onDiscoveryEndpointsChanged)

        viewModel.alertDialogDTOAddedCredentials.observe(
            viewLifecycleOwner,
            ::onAlertDialogDTOAddedCredentialsChanged
        )
    }

    override fun populateView() {
        super.populateView()
        eudiSelectedCredentialItemList = mutableListOf()

        credentialsChecked = CREDENTIAL_CHECKED.ALL

        refreshCredentialsChecked()
    }
    private fun refreshCredentialsChecked() {
        when (credentialsChecked) {

            CREDENTIAL_CHECKED.NONE -> {

                if (this::adapter.isInitialized) {

                    when (parentViewModel.dataTechnologyType.value) {

                        DataExchangeViewModel.TECHNOLOGY_TYPE.EUDI_FLOW -> {
                            eudiSelectedCredentialItemList.forEach { credentials ->
                                credentials.isSelected.value = false
                            }
                            adapter.updateItemsList(eudiSelectedCredentialItemList)
                        }

                        null -> throw IllegalStateException("parentViewModel.dataExchangeType is null")
                        else -> {}
                    }

                    binding.includeCredentialSelection.dsdkIvBtAll.setImageDrawable(
                        App.getDrawableResource(
                            R.drawable.dsdk_icon_radiobutton_off_svg
                        )
                    )
                    binding.btnAddData.isEnabled = false

                }

            }

            CREDENTIAL_CHECKED.SOME -> {

                if (this::adapter.isInitialized) {

                    when (parentViewModel.dataTechnologyType.value) {

                        DataExchangeViewModel.TECHNOLOGY_TYPE.EUDI_FLOW -> {
                            adapter.updateItemsList(eudiSelectedCredentialItemList)
                        }

                        null -> throw IllegalStateException("viewModel.dataTechnologyType is null")
                        else -> {}
                    }

                    binding.includeCredentialSelection.dsdkIvBtAll.setImageDrawable(
                        App.getDrawableResource(
                            R.drawable.dsdk_icon_radiobutton_less_svg
                        )
                    )

                    binding.btnAddData.isEnabled = true

                }
            }

            CREDENTIAL_CHECKED.ALL -> {

                if (this::adapter.isInitialized) {

                    when (parentViewModel.dataTechnologyType.value) {

                        DataExchangeViewModel.TECHNOLOGY_TYPE.EUDI_FLOW -> {
                            eudiSelectedCredentialItemList.forEach { credentials ->
                                credentials.isSelected.value = true
                            }
                            adapter.updateItemsList(eudiSelectedCredentialItemList)
                        }

                        null -> throw IllegalStateException("parentViewModel.dataExchangeType is null")
                        else -> {}
                    }

                    binding.includeCredentialSelection.dsdkIvBtAll.setImageDrawable(
                        App.getDrawableResource(
                            R.drawable.dsdk_icon_radiobutton_on_svg
                        )
                    )

                    binding.btnAddData.isEnabled = true

                }

            }
        }
    }
    private fun onDiscoveryEndpointsChanged(discoveryEndpoints: Map<String, *>) {
        Log.d(TAG, "${AppUtils.getFunctionName()} discoveryEndpoints: $discoveryEndpoints")
        val credentialsSupported =
            discoveryEndpoints.getValueAs<Map<String, *>>("credential_configurations_supported")
        val learCredentialEmployee =
            credentialsSupported.getValueAs<Map<String, *>>("LEARCredentialEmployee")
        val credentialDefinition =
            learCredentialEmployee.getValueAs<Map<String, *>>("credential_definition")
        val credentialDefinitionType = credentialDefinition.getValueAs<List<String>>("type")

        val credentialEudiString = CredentialEudiString(
            keyTypeLastPosition = credentialDefinitionType.last(),
            locale = "ES",
            keyPretty = credentialDefinitionType.last()
        )

        val eudiCredentialStringSelectionItemList = listOf(
            EudiCredentialStringSelectionItem(
                credentialString = credentialEudiString,
                itemPosition = 0
            )
        )

        showDialogCode { inputCode ->
            this.inputCode = inputCode
        }

        adapter.updateItemsList(eudiCredentialStringSelectionItemList)

        eudiSelectedCredentialItemList = eudiCredentialStringSelectionItemList.toMutableList()
    }

    private fun showDialogCode(onCodeReceived: (String) -> Unit) {
        val dialog = CodeInputDialogFragment()
        dialog.setOnCodeEnteredListener(onCodeReceived)
        dialog.show(parentFragmentManager, "CodeInputDialog")
    }

    private fun onAlertDialogDTOAddedCredentialsChanged(dto: AlertDialogDTO) {
        showAlertDialogOneButton(
            dto = dto,
            kFunctionPositive = {
                Log.d(
                    TAG,
                    "${AppUtils.getFunctionName()} Popup accepted SUCCESS_ADDING_CREDENTIALS"
                )
                viewModel.extras?.clear()
                viewModel.destination.postValue(MainActivity::class.java)
            }
        )

    }

    private fun onClickPressAllCheckedButton(view: View) {
        credentialsChecked = when (credentialsChecked) {
            CREDENTIAL_CHECKED.NONE -> CREDENTIAL_CHECKED.ALL
            CREDENTIAL_CHECKED.SOME -> CREDENTIAL_CHECKED.ALL
            CREDENTIAL_CHECKED.ALL -> CREDENTIAL_CHECKED.NONE

        }

        refreshCredentialsChecked()

    }

    private fun onClickAddData(view: View) {

        viewModel.startFlowEudiSendCredentials(
            eudiCredentialOffering,
            eudiSelectedCredentialItemList,
            inputCode
        )
    }

}