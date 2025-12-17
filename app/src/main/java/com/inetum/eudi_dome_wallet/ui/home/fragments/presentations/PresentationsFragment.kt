package com.inetum.eudi_dome_wallet.ui.home.fragments.presentations

import android.graphics.Typeface
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
import com.inetum.eudi_dome_wallet.core.models.eudi.presentations.PresentationEudi
import com.inetum.eudi_dome_wallet.core.models.enums.UserEnums
import com.inetum.eudi_dome_wallet.databinding.FragmentPresentationsBinding
import com.inetum.eudi_dome_wallet.databinding.ItemCredentialHeaderBinding
import com.inetum.eudi_dome_wallet.manager.IoCManager
import com.inetum.eudi_dome_wallet.ui.base.BaseFragmentK
import com.inetum.eudi_dome_wallet.ui.base.BaseFragmentViewModel
import com.inetum.eudi_dome_wallet.ui.base.BaseFragmentViewModel.FRAGMENT_ACTIVE
import com.inetum.eudi_dome_wallet.ui.base.adapters.MultiTypeRecyclerViewAdapterK
import com.inetum.eudi_dome_wallet.ui.base.items.ItemInterfacesListeners
import com.inetum.eudi_dome_wallet.ui.common.EnumsItemsViewHolders
import com.inetum.eudi_dome_wallet.ui.common.models.GenericHeaderItem
import com.inetum.eudi_dome_wallet.ui.home.fragments.credentials.viewholders.GenericHeaderViewHolder
import com.inetum.utils.toJsonString
import java.io.Serializable

class PresentationsFragment :
    BaseFragmentK<FragmentPresentationsBinding, PresentationsViewModel>() {

    private lateinit var adapter: MultiTypeRecyclerViewAdapterK

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)

    }

    override fun onCreateView(
        inflater: LayoutInflater, container: ViewGroup?, savedInstanceState: Bundle?
    ): View {
        val view = super.onCreateView(inflater, container, savedInstanceState)
        setupRecyclerView()

        return view
    }

    override fun onViewCreated(view: View, savedInstanceState: Bundle?) {
        super.onViewCreated(view, savedInstanceState)
        super.noData = binding.logsNoActivity.root
        //Eudi as default then save used technology to storage for persistence
        viewModel.technologyType = UserEnums.TechnologyType.EUDI_TYPE
        selectedTechnologyTypeEudi()
        showEudi(true)
        IoCManager.getInternalMemoryInputAdapter()
            .saveTechnologyTypeToStorage(UserEnums.TechnologyType.EUDI_TYPE)

        BaseFragmentViewModel.isHomeFragment = false
        BaseFragmentViewModel.fragmentActive = FRAGMENT_ACTIVE.ACTIVITY

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
        binding.navFilterInclude.llPresentationsEntity.visibility = View.GONE
        binding.navFilterInclude.llPresentationsStatus.visibility = View.GONE
        binding.navFilterInclude.tvPresentationsShowHideStatus.visibility = View.GONE
        binding.navFilterInclude.llPresentationsSent.visibility = View.GONE
        binding.navFilterInclude.llPresentationsRequestedDeleted.visibility = View.GONE
        binding.navFilterInclude.llPresentationsDeleted.visibility = View.GONE
        setupRecyclerView()

        viewModel.getEudiPresentationsFromDB()

    }
    override fun onStop() {
        super.onStop()
        /** NECESARIO PARA QUE AL VOLVER VUELVA A CARGAR CORRECTAMENTE  */
        viewModel.drawerOpen.value = false
    }

    override fun getAssociatedLayoutResource(): Int {
        return R.layout.fragment_presentations
    }

    override fun initializeView(mBinding: FragmentPresentationsBinding) {
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
                LayoutInflater.from(parent.context), parent, false
            )
            binding.lifecycleOwner = this
            GenericHeaderViewHolder(
                binding = binding,
                itemClickListener = object :
                    ItemInterfacesListeners.ItemButtonClickListener<GenericHeaderItem<Serializable>> {
                    override fun onItemClicked(item: GenericHeaderItem<Serializable>) {}
                    override fun onItemButtonClicked(item: GenericHeaderItem<Serializable>) {}
                })
        }

        binding.actionsListEudi.layoutManager = LinearLayoutManager(requireContext())
        binding.actionsListEudi.adapter = adapter

        Log.d(TAG, "${AppUtils.getFunctionName()} register rv adapter correctly")
    }

    override fun getAssociatedViewModel(): PresentationsViewModel {
        return ViewModelProvider(this)[PresentationsViewModel::class.java]
    }

    override fun setViewModelToBinding(
        binding: FragmentPresentationsBinding, viewModel: PresentationsViewModel
    ) {
        binding.viewModel = viewModel

        binding.navFilterInclude.setViewModel(viewModel)
    }

    override fun initializeViewModel(mViewModel: PresentationsViewModel) {
        super.initializeViewModel(mViewModel)

    }

    override fun attachViewModelListeners() {
        super.attachViewModelListeners()

        viewModel.eudiPresentationHeaderItemList.observe(
            getViewLifecycleOwner(), ::onEudiPresentationHeaderItemListChanged
        )

        viewModel.drawerOpen.observe(getViewLifecycleOwner(), ::onDrawerOpenChanged)
    }

    private fun onEudiPresentationHeaderItemListChanged(headersList: List<GenericHeaderItem<PresentationEudi>>) {
        Log.d(TAG, "${AppUtils.getFunctionName()} ${headersList.toJsonString(true)}")
        if (viewModel.technologyType == UserEnums.TechnologyType.EUDI_TYPE) {
            noData?.visibility = if (headersList.isEmpty()) View.VISIBLE
            else View.GONE

            if (headersList.isEmpty()) {
                noData?.requestFocus()
            }

            adapter.updateItemsList(headersList)
        }
    }

    private fun onDrawerOpenChanged(drawerOpened: Boolean) {
        if (drawerOpened) {
            binding.drawerContainer.openDrawer(binding.drawerRight)
        } else {
            binding.drawerContainer.closeDrawer(binding.drawerRight)

            when (viewModel.technologyType) {
                UserEnums.TechnologyType.EUDI_TYPE -> viewModel.getEudiPresentationsFromDB()
                else -> {}
            }
        }
    }

    private fun showEudi(show: Boolean) {
        binding.selectedType.flEudi.setBackgroundResource(if (show) R.color.primary_color_black else R.color.primary_color_white)
        binding.selectedType.tvEudi.setTypeface(
            Typeface.create(
                binding.selectedType.tvEudi.typeface, Typeface.NORMAL
            ), if (show) Typeface.BOLD else Typeface.NORMAL
        )
    }
    // endregion
}