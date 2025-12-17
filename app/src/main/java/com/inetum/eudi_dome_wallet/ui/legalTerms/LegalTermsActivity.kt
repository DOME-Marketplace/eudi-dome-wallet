package com.inetum.eudi_dome_wallet.ui.legalTerms

import android.os.Bundle
import android.util.Log
import android.view.View
import android.widget.ScrollView
import androidx.core.view.doOnPreDraw
import androidx.lifecycle.ViewModelProvider
import com.inetum.eudi_dome_wallet.R
import com.inetum.eudi_dome_wallet.common.utils.AppUtils
import com.inetum.eudi_dome_wallet.core.controllers.uxController.DataHolder
import com.inetum.eudi_dome_wallet.databinding.ActivityLegalTermsBinding
import com.inetum.eudi_dome_wallet.ui.base.BaseActivityK

class LegalTermsActivity: BaseActivityK<ActivityLegalTermsBinding, LegalTermsViewModel>() {
    // region Declarations ---------------------------------------------------------------------------------------------

    // region Constants
    // endregion

    // region Attributes
    private val hideAcceptButton: Boolean = DataHolder.viewingLegalTermsFromCfg // Enter the screen from the CFG (more) screen, don't need the accept button.
    // endregion
    // endregion

    // region View's Lifecycle -----------------------------------------------------------------------------------------
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)

    }

    // endregion

    // region Initialization & Finalization ----------------------------------------------------------------------------

    // region View Initialization & Finalization -----------------------------------------------------------------------

    override fun getAssociatedLayoutResource(): Int {
        return R.layout.activity_legal_terms
    }

    override fun initializeView(mBinding: ActivityLegalTermsBinding) {
        super.initializeView(mBinding)

        if (hideAcceptButton) { // Si estamos viendo los T&C desde la pantalla CFG (mas) no necesitamos el boton de aceptar
            binding.btAcceptLegalTerms.visibility = View.GONE
            binding.glLegaltermsBottom.setGuidelinePercent(1f) //Para que los terminos y condiciones se muestren a pantalla completa
        } else {

            // The button is disabled if the screen is scrollable and has not been scrolled to the end.

            binding.btAcceptLegalTerms.isEnabled = false // por defecto false luego ya se comprueba si se ha llegado al final o la pantalla no es escrolable

        }

    }

    override fun attachViewListeners() {
        super.attachViewListeners()

        if (!hideAcceptButton) { // Si NO estamos viendo los T&C desde la pantalla CFG (mas) SI necesitamos el boton de aceptar y los listener

            // [post] is only executed when all elements of the view have been drawn.

            // [doOnPreDraw] is executed just before the interface elements are drawn but if all the measurements are defined
            binding.svLegalTerms.doOnPreDraw(::onPreDraw)

            binding.svLegalTerms.setOnScrollChangeListener(::onScrollChange)

        }
    }



    // endregion

    // region ViewModel Initialization & Finalization ------------------------------------------------------------------
    override fun getAssociatedViewModel(): LegalTermsViewModel {
        return ViewModelProvider(this)[LegalTermsViewModel::class.java]
    }

    override fun setViewModelToBinding(binding: ActivityLegalTermsBinding, viewModel: LegalTermsViewModel) {
        binding.viewModel = viewModel
    }
    // endregion

    // endregion

    // region Data Management Methods ----------------------------------------------------------------------------------

    // endregion

    // region Control Event Handlers -----------------------------------------------------------------------------------

    // region Observers ------------------------------------------------------------------------------------------------

    // endregion

    // region Listeners ------------------------------------------------------------------------------------------------

    private fun onScrollChange(view: View, i: Int, i1: Int, i2: Int, i3: Int) {
        if (scrollviewIsAtBottom()) {
            Log.d(TAG, "${AppUtils.getFunctionName()} Scrolled to the bottom page")
            binding.btAcceptLegalTerms.isEnabled = true
            binding.ivLegalTermsScrollTop.visibility = View.GONE
        } else {
            binding.ivLegalTermsScrollTop.visibility = View.VISIBLE
        }
    }

    private fun onPreDraw(view: View) {
        if (!isScrollable()) {
            Log.d(TAG, "${AppUtils.getFunctionName()} Screen is NOT scrollable, enable acceptButton and hide scrollTopButton")
            binding.btAcceptLegalTerms.isEnabled = true
            binding.ivLegalTermsScrollTop.visibility = View.GONE
        } else {
            Log.d(TAG, "${AppUtils.getFunctionName()} Screen is scrollable, disable acceptButton and show scrollTopButton")
            binding.btAcceptLegalTerms.isEnabled = false
            binding.ivLegalTermsScrollTop.visibility = View.VISIBLE
        }
    }

    fun onClickAccept(view: View) {
        DataHolder.hasAcceptedLegalTerms = true
        finish()
    }

    fun onClickBack(view: View) {
        super.onBackExecute()
    }

    fun onClickScrollTop(view: View) {
        binding.svLegalTerms.fullScroll(ScrollView.FOCUS_UP)
    }
    // endregion

    // region Callbacks ------------------------------------------------------------------------------------------------

    // endregion

    // endregion

    // region Other Methods --------------------------------------------------------------------------------------------

    /**
     * Checks if the legal terms have been scrolled to the bottom
     */
    private fun scrollviewIsAtBottom(): Boolean {
        return binding.svLegalTerms.getChildAt(0).bottom == (binding.svLegalTerms.height + binding.svLegalTerms.scrollY)
    }

    /**
     * Check if scrolling is NOT required because the screen is large enough
     */
    private fun isScrollable(): Boolean {
        val childHeight = binding.svLegalTerms.getChildAt(0).height
        val scrollViewHeight = binding.svLegalTerms.height
        return childHeight > scrollViewHeight
    }

    // endregion
}