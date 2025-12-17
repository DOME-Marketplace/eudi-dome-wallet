package com.inetum.eudi_dome_wallet.ui.home.fragments.credentials

import android.os.Bundle
import android.util.Log
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.SearchView
import androidx.drawerlayout.widget.DrawerLayout.DrawerListener
import androidx.lifecycle.ViewModelProvider
import androidx.recyclerview.widget.LinearLayoutManager
import com.inetum.eudi_dome_wallet.R
import com.inetum.eudi_dome_wallet.common.utils.AppUtils
import com.inetum.eudi_dome_wallet.core.models.eudi.credentials.EudiCredential
import com.inetum.eudi_dome_wallet.core.models.enums.UserEnums
import com.inetum.eudi_dome_wallet.databinding.FragmentCredentialsBinding
import com.inetum.eudi_dome_wallet.databinding.ItemCredentialHeaderBinding
import com.inetum.eudi_dome_wallet.ui.base.BaseFragmentK
import com.inetum.eudi_dome_wallet.ui.base.BaseFragmentViewModel
import com.inetum.eudi_dome_wallet.ui.base.BaseFragmentViewModel.FRAGMENT_ACTIVE
import com.inetum.eudi_dome_wallet.ui.base.adapters.MultiTypeRecyclerViewAdapterK
import com.inetum.eudi_dome_wallet.ui.base.items.ItemInterfacesListeners
import com.inetum.eudi_dome_wallet.ui.common.EnumsItemsViewHolders
import com.inetum.eudi_dome_wallet.ui.common.models.GenericHeaderItem
import com.inetum.eudi_dome_wallet.ui.home.fragments.credentials.viewholders.GenericHeaderViewHolder
import com.inetum.utils.toJsonString

class CredentialsFragment : BaseFragmentK<FragmentCredentialsBinding, CredentialsViewModel>() {

    private lateinit var adapter: MultiTypeRecyclerViewAdapterK
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
    }

    override fun onCreateView(
        inflater: LayoutInflater,
        container: ViewGroup?,
        savedInstanceState: Bundle?
    ): View {
        val view = super.onCreateView(inflater, container, savedInstanceState)

        setupRecyclerView()

        return view
    }

    override fun onViewCreated(view: View, savedInstanceState: Bundle?) {
        super.onViewCreated(view, savedInstanceState)
        super.noData = binding.credentialsNoData.root
        BaseFragmentViewModel.isHomeFragment = false
        BaseFragmentViewModel.fragmentActive = FRAGMENT_ACTIVE.MY_DATA

        attachViewModelListeners()

    }

    override fun onResume() {
        super.onResume()
        /** Para refrescar al volver de cerrar el menu  */

        if (viewModel.technologyType == UserEnums.TechnologyType.EUDI_TYPE) {
            selectedTechnologyTypeEudi()
            return
        }
    }

    private fun selectedTechnologyTypeEudi() {
        binding.navFilterInclude.llEntity.visibility = View.GONE
        binding.navFilterInclude.llStatus.visibility = View.GONE
        binding.navFilterInclude.tvShowHideStatus.visibility = View.GONE
        binding.navFilterInclude.llStatusValid.visibility = View.GONE
        binding.navFilterInclude.llStatusRevokedByIssuer.visibility = View.GONE
        binding.navFilterInclude.llStatusRevokedByUser.visibility = View.GONE
        setupRecyclerView()

        viewModel.getEudiCredentialsFromDB()
    }

    override fun onStop() {
        super.onStop()
        viewModel.drawerOpen.value = false
    }

    override fun getAssociatedLayoutResource(): Int {
        return R.layout.fragment_credentials
    }

    override fun initializeView(mBinding: FragmentCredentialsBinding) {
        super.initializeView(mBinding)

    }

    override fun attachViewListeners() {
        super.attachViewListeners()

        binding.drawerContainer.addDrawerListener(object : DrawerListener {
            override fun onDrawerSlide(drawerView: View, slideOffset: Float) {}
            override fun onDrawerOpened(drawerView: View) {}
            override fun onDrawerClosed(drawerView: View) {
                Log.d(TAG, "${AppUtils.getFunctionName()} ***EXECUTE")
            }

            override fun onDrawerStateChanged(newState: Int) {}
        })

        binding.credentialsSearch.setOnQueryTextListener(object : SearchView.OnQueryTextListener {
            override fun onQueryTextSubmit(query: String): Boolean {
                return false
            }

            override fun onQueryTextChange(newText: String): Boolean {
                viewModel.searchText(newText)
                return false
            }
        })

    }

    private fun setupRecyclerView() {

        adapter = MultiTypeRecyclerViewAdapterK()

        adapter.registerViewHolder(
            EnumsItemsViewHolders.ItemLayoutCredentialAssociated.TYPE_GENERIC_HEADER.layoutId
        ) { parent ->
            val binding = ItemCredentialHeaderBinding.inflate(
                LayoutInflater.from(parent.context),
                parent,
                false
            )
            binding.lifecycleOwner = this
            GenericHeaderViewHolder(
                binding = binding,
                itemClickListener = object :
                    ItemInterfacesListeners.ItemButtonClickListener<GenericHeaderItem<java.io.Serializable>> {
                    override fun onItemClicked(item: GenericHeaderItem<java.io.Serializable>) {}
                    override fun onItemButtonClicked(item: GenericHeaderItem<java.io.Serializable>) {}
                }
            )
        }

        binding.actionsListEudi.layoutManager = LinearLayoutManager(requireContext())
        binding.actionsListEudi.adapter = adapter

        Log.d(TAG, "${AppUtils.getFunctionName()} register rv adapter correctly")
    }

    override fun getAssociatedViewModel(): CredentialsViewModel {
        return ViewModelProvider(this)[CredentialsViewModel::class.java]
    }

    override fun setViewModelToBinding(
        binding: FragmentCredentialsBinding,
        viewModel: CredentialsViewModel
    ) {
        binding.viewModel = viewModel

        binding.navFilterInclude.setViewModel(viewModel)
    }

    override fun initializeViewModel(mViewModel: CredentialsViewModel) {
        super.initializeViewModel(mViewModel)

    }

    override fun attachViewModelListeners() {
        super.attachViewModelListeners()

        viewModel.eudiGenericHeaderItemList.observe(
            getViewLifecycleOwner(),
            ::onEudiCredentialHeaderItemListChanged
        )

        viewModel.drawerOpen.observe(getViewLifecycleOwner(), ::onDrawerOpenChanged)

    }

    private fun onEudiCredentialHeaderItemListChanged(headersList: List<GenericHeaderItem<EudiCredential>>) {
        Log.d(TAG, "${AppUtils.getFunctionName()} ${headersList.toJsonString(true)}")
        if (viewModel.technologyType == UserEnums.TechnologyType.EUDI_TYPE) {
            noData?.visibility = if (headersList.isEmpty())
                View.VISIBLE
            else
                View.GONE

            if (headersList.isEmpty()) {
                noData?.requestFocus()
            }

            adapter.updateItemsList(headersList)
        }
    }

    // Open/Close filter layout
    private fun onDrawerOpenChanged(drawerOpened: Boolean) {
        if (drawerOpened) {
            binding.drawerContainer.openDrawer(binding.drawerRight)
        } else {
            binding.drawerContainer.closeDrawer(binding.drawerRight)

            when (viewModel.technologyType) {
                UserEnums.TechnologyType.EUDI_TYPE -> viewModel.getEudiCredentialsFromDB()
                else -> {}
            }

        }
    }
    // endregion
}