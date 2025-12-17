package com.inetum.eudi_dome_wallet.ui.infoKeys

import android.util.Log
import android.view.View
import androidx.lifecycle.ViewModelProvider
import androidx.lifecycle.lifecycleScope
import androidx.recyclerview.widget.LinearLayoutManager
import com.inetum.eudi_dome_wallet.R
import com.inetum.eudi_dome_wallet.common.utils.AppUtils
import com.inetum.eudi_dome_wallet.databinding.ActivityInfoKeysBinding
import com.inetum.eudi_dome_wallet.manager.IoCManager
import com.inetum.eudi_dome_wallet.manager.IoCManager.getInternalMemoryInputAdapter
import com.inetum.eudi_dome_wallet.ui.base.BaseActivityK
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.launch
import kotlinx.coroutines.withContext

open class InfoKeysActivity : BaseActivityK<ActivityInfoKeysBinding, InfoKeysViewModel>() {

    override fun getAssociatedLayoutResource(): Int {
        return R.layout.activity_info_keys
    }

    override fun getAssociatedViewModel(): InfoKeysViewModel {
        return ViewModelProvider(this)[InfoKeysViewModel::class.java]
    }

    override fun setViewModelToBinding(
        binding: ActivityInfoKeysBinding, viewModel: InfoKeysViewModel
    ) {
        binding.viewModel = viewModel
    }

    override fun attachViewListeners() {
        super.attachViewListeners()

        setupRecyclerView_MAL()
    }

    private fun setupRecyclerView_MAL() {

        binding.rvContentKey.layoutManager = LinearLayoutManager(this)

        lifecycleScope.launch(Dispatchers.Main) {

            try {

                val eudiJwkPublicKey = withContext(Dispatchers.IO) {
                    IoCManager.getEudiDidInputAdapter().getOwnJWKPublicKey()
                }

                val items = listOf(
                    ListItem.Header("EUDI DOME"), ListItem.Content(
                        label = "DID",
                        value = getInternalMemoryInputAdapter().getEudiDIDFromStorage().toString()
                    ), ListItem.Content(
                        label = "Public\nkey", value = eudiJwkPublicKey.toString()
                    )
                )
                val adapter = RecyclerKeysAdapter(applicationContext, items)
                binding.rvContentKey.adapter = adapter

            } catch (e: Exception) {
                Log.e(TAG, "${AppUtils.getFunctionName()} Error register recyclerView. ", e)
            }

        }
    }

    fun onClickBack(view: View) {
        super.onBackExecute()
    }
}