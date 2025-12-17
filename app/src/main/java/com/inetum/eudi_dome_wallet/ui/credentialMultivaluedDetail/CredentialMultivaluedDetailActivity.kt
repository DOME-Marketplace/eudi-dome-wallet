package com.inetum.eudi_dome_wallet.ui.credentialMultivaluedDetail

import android.app.Activity
import android.content.Intent
import android.graphics.Typeface
import android.os.Bundle
import android.view.View
import androidx.lifecycle.ViewModelProvider
import com.inetum.eudi_dome_wallet.R
import com.inetum.eudi_dome_wallet.core.models.enums.UserEnums
import com.inetum.eudi_dome_wallet.databinding.ActivityCredentialMultivaluedDetailBinding
import com.inetum.eudi_dome_wallet.manager.IoCManager
import com.inetum.eudi_dome_wallet.ui.base.BaseActivityK
import com.inetum.utils.toJsonString
import com.paulvarry.jsonviewer.JsonViewer
import org.json.JSONObject

class CredentialMultivaluedDetailActivity :
    BaseActivityK<ActivityCredentialMultivaluedDetailBinding, CredentialMultivaluedDetailViewModel>() {
    private var showingGeneralDetail: Boolean = false
    private var showingTechDetail: Boolean = false
    private var jsonViewer: JsonViewer? = null
    private lateinit var technologyType: UserEnums.TechnologyType


    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
    }

    public override fun onResume() {
        super.onResume()
        refreshJsonViewData()
    }

    override fun getAssociatedLayoutResource(): Int {
        return R.layout.activity_credential_multivalued_detail
    }

    override fun initializeView(mBinding: ActivityCredentialMultivaluedDetailBinding) {
        super.initializeView(mBinding)
    }


    override fun getAssociatedViewModel(): CredentialMultivaluedDetailViewModel {
        return ViewModelProvider(this)[CredentialMultivaluedDetailViewModel::class.java]
    }

    override fun setViewModelToBinding(
        binding: ActivityCredentialMultivaluedDetailBinding,
        viewModel: CredentialMultivaluedDetailViewModel
    ) {
        binding.viewModel = viewModel
    }

    override fun attachViewModelListeners() {
        super.attachViewModelListeners()
        viewModel.eudiCredentialLiveData.observe(this) { credential ->
            if (credential != null) {
                refreshJsonViewData()
            }
        }
    }

    override fun populateView() {
        super.populateView()

        technologyType =
            IoCManager.getInternalMemoryInputAdapter().recoverTechnologyTypeFromStorage()

        if (technologyType == UserEnums.TechnologyType.EUDI_TYPE) {
            binding.selectedType.llGeneralDetail.visibility = View.GONE
            showGeneralDetail(false)
            showTechDetail(true)
        }

        showingGeneralDetail = true
        showingTechDetail = false


    }

    fun refreshJsonViewData() {
        if (technologyType == UserEnums.TechnologyType.EUDI_TYPE) {
            val credential = viewModel.getCredentialEudi() ?: return
            val json = JSONObject(credential.vc.credentialSubject.credentialObject.toJsonString())
            jsonViewer = binding.layoutJsonViewer.jsonViewer
            jsonViewer?.setJson(json)
            return
        }
    }

    fun onClickBack(view: View) {
        val resultIntent = Intent()
        val credentialEudiString = viewModel.getCredentialEudi()?.toJsonString()
        resultIntent.putExtra("isSelectedJwt", credentialEudiString)

        setResult(Activity.RESULT_OK, resultIntent)

        finish()
    }

    fun onClickGeneralDetail(view: View) {
        if (!showingGeneralDetail) {
            showGeneralDetail(true)
            showTechDetail(false)
        }
    }

    fun onClickTechDetail(view: View) {
        if (!this.showingTechDetail) {
            showGeneralDetail(false)
            showTechDetail(true)
        }
    }

    private fun showGeneralDetail(show: Boolean) {
        binding.selectedType.flDetailGeneral.setBackgroundResource(if (show) R.color.primary_color_black else R.color.primary_color_white)
        showingGeneralDetail = show
    }

    private fun showTechDetail(show: Boolean) {
        binding.selectedType.flDetailTech.setBackgroundResource(if (show) R.color.primary_color_black else R.color.primary_color_white)
        /** NECESARIO EL TYPEFACE.CREATE PARA CONSERVAR EL ESTILO DEL TEXTO  */
        binding.selectedType.tvDetailTech.setTypeface(
            Typeface.create(
                binding.selectedType.tvDetailTech.typeface,
                Typeface.NORMAL
            ), if (show) Typeface.BOLD else Typeface.NORMAL
        )
        binding.layoutJsonViewer.root.visibility =
            if (show) View.VISIBLE else View.GONE
        showingTechDetail = show
    }
}