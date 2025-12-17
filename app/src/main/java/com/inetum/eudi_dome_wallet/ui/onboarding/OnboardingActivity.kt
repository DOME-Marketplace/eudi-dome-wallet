package com.inetum.eudi_dome_wallet.ui.onboarding

import android.os.Bundle
import android.view.View
import androidx.lifecycle.ViewModelProvider
import com.inetum.eudi_dome_wallet.R
import com.inetum.eudi_dome_wallet.databinding.ActivityOnboardingBinding
import com.inetum.eudi_dome_wallet.ui.base.BaseActivityK

class OnboardingActivity: BaseActivityK<ActivityOnboardingBinding, OnboardingViewModel>() {

    // region Declarations ---------------------------------------------------------------------------------------------

    // region Constants
    // endregion

    // region Attributes

    // endregion
    // endregion

    // region View's Lifecycle -----------------------------------------------------------------------------------------

    // endregion

    // region View Initialization & Finalization -----------------------------------------------------------------------

    // endregion

    // region Control Event Handlers -----------------------------------------------------------------------------------

    // region Observers ------------------------------------------------------------------------------------------------

    // endregion

    // region Listeners ------------------------------------------------------------------------------------------------
    fun onClickStep(view: View) {
        viewModel.onClickStep()
    }

    fun onClickPreviousStep(view: View) {
        viewModel.onClickPreviousStep()
    }

    fun onClickNextStep(view: View) {
        viewModel.onClickNextStep()
    }
    // endregion

    // region Callbacks ------------------------------------------------------------------------------------------------

    // endregion

    // endregion

    // region Other Methods --------------------------------------------------------------------------------------------

    // endregion

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
    }

    override fun getAssociatedLayoutResource(): Int {
        return R.layout.activity_onboarding
    }

    override fun getAssociatedViewModel(): OnboardingViewModel {
        return ViewModelProvider(this)[OnboardingViewModel::class.java]
    }

    override fun setViewModelToBinding(binding: ActivityOnboardingBinding, viewModel: OnboardingViewModel) {
        binding.viewModel = viewModel
    }

}