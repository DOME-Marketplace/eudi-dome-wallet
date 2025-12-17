package com.inetum.eudi_dome_wallet.ui.home.fragments.home

import android.content.Intent
import android.os.Bundle
import android.util.Log
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import androidx.core.net.toUri
import androidx.drawerlayout.widget.DrawerLayout.DrawerListener
import androidx.lifecycle.ViewModelProvider
import com.inetum.eudi_dome_wallet.R
import com.inetum.eudi_dome_wallet.common.utils.AppUtils
import com.inetum.eudi_dome_wallet.core.models.enums.UserEnums
import com.inetum.eudi_dome_wallet.databinding.FragmentHomeBinding
import com.inetum.eudi_dome_wallet.databinding.ItemRvEmptyBinding
import com.inetum.eudi_dome_wallet.manager.IoCManager
import com.inetum.eudi_dome_wallet.ui.base.BaseFragmentK
import com.inetum.eudi_dome_wallet.ui.base.BaseFragmentViewModel
import com.inetum.eudi_dome_wallet.ui.base.BaseFragmentViewModel.FRAGMENT_ACTIVE
import com.inetum.eudi_dome_wallet.ui.base.adapters.MultiTypeRecyclerViewAdapterK
import com.inetum.eudi_dome_wallet.ui.common.EnumsItemsViewHolders
import com.inetum.eudi_dome_wallet.ui.common.RecyclerViewEmptyItemViewHolder

class HomeFragment: BaseFragmentK<FragmentHomeBinding, HomeViewModel>() {

    enum class FilterType {
        CASE_NOTIFICATION
    }
    val mViewModel: HomeViewModel
        get() = viewModel

    private lateinit var adapter: MultiTypeRecyclerViewAdapterK

    private lateinit var technologyType: UserEnums.TechnologyType

    private var filterType: FilterType = FilterType.CASE_NOTIFICATION
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
    }

    override fun onCreateView(inflater: LayoutInflater, container: ViewGroup?, savedInstanceState: Bundle?): View {

        Log.d(TAG, "${AppUtils.getFunctionName()} init ")

        technologyType = IoCManager.getInternalMemoryInputAdapter().recoverTechnologyTypeFromStorage()
        return super.onCreateView(inflater, container, savedInstanceState)
    }


    override fun onViewCreated(view: View, savedInstanceState: Bundle?) {
        Log.d(TAG, "${AppUtils.getFunctionName()} init ")
        super.onViewCreated(view, savedInstanceState)
        BaseFragmentViewModel.isHomeFragment = true
        BaseFragmentViewModel.fragmentActive = FRAGMENT_ACTIVE.HOME
        setupRecyclerView()
    }

    override fun onResume() {
        Log.d(TAG, "${AppUtils.getFunctionName()} init ")
        super.onResume()

        viewModel.updateHelloTitle()

        if (this::adapter.isInitialized) {
            adapter.updateItemsList(arrayListOf())
        }
    }

    override fun getAssociatedLayoutResource(): Int {
        return R.layout.fragment_home
    }

    override fun initializeView(mBinding: FragmentHomeBinding) {
        super.initializeView(mBinding)
    }

    override fun attachViewListeners() {
        super.attachViewListeners()

        setupRecyclerView()

        binding.drawerContainer.addDrawerListener(object : DrawerListener {
            override fun onDrawerSlide(drawerView: View, slideOffset: Float) {}
            override fun onDrawerOpened(drawerView: View) {
                Log.d(TAG, "${AppUtils.getFunctionName()} Drawer opened, filterType: ${filterType.name}")
            }
            override fun onDrawerClosed(drawerView: View) {
                Log.d(TAG, "${AppUtils.getFunctionName()} Drawer closed")
            }

            override fun onDrawerStateChanged(newState: Int) {}
        })

        viewModel.openUseGuideEvent.observe(viewLifecycleOwner) { event ->
            event.getContentIfNotHandled()?.let {
                val intent = Intent(
                    Intent.ACTION_VIEW,
                    "https://knowledgebase.dome-marketplace.eu/".toUri()
                )
                startActivity(intent)
            }
        }
    }

    private fun setupRecyclerView() {

        adapter = MultiTypeRecyclerViewAdapterK()

        adapter.registerViewHolder(EnumsItemsViewHolders.ItemLayoutRecyclerViewEmptyAssociated.TYPE_GENERIC.layoutId) { parent ->
            val binding = ItemRvEmptyBinding.inflate(LayoutInflater.from(parent.context), parent, false)
            binding.lifecycleOwner = this
            RecyclerViewEmptyItemViewHolder(
                binding = binding
            )
        }
    }
    override fun getAssociatedViewModel(): HomeViewModel {
        return ViewModelProvider(this)[HomeViewModel::class.java]
    }

    override fun setViewModelToBinding(binding: FragmentHomeBinding, viewModel: HomeViewModel) {
        binding. viewModel = viewModel
    }

    override fun attachViewModelListeners() {

        viewModel.existNotificationInTheFilter.observe(viewLifecycleOwner, ::onChangedExistNotificationInTheFilter)
    }

    private fun onChangedExistNotificationInTheFilter(areThereNotifications: Boolean) {
    }
}