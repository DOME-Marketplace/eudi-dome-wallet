package com.inetum.eudi_dome_wallet.ui.onboarding

import android.graphics.drawable.Drawable
import android.os.Bundle
import android.util.Log
import androidx.lifecycle.MutableLiveData
import com.inetum.eudi_dome_wallet.App
import com.inetum.eudi_dome_wallet.R
import com.inetum.eudi_dome_wallet.common.utils.AppUtils
import com.inetum.eudi_dome_wallet.manager.IoCManager
import com.inetum.eudi_dome_wallet.ui.base.BaseViewModel
import com.inetum.eudi_dome_wallet.ui.register.RegisterStep0Activity

class OnboardingViewModel : BaseViewModel() {
    // region Declarations ---------------------------------------------------------------------------------------------

    companion object {
        const val INIT = 0
        const val END = 5
    }

    // region Constants
    // endregion

    // region Attributes

    // endregion

    // region LivesData
    var step = MutableLiveData<Int>()

    var text = MutableLiveData<String>()
    var title = MutableLiveData<String>()

    var image = MutableLiveData<Drawable>()

    // endregion

    // endregion

    // region ViewModel's Lifecycle ------------------------------------------------------------------------------------

    // endregion

    // region ViewModel Initialization & Finalization ------------------------------------------------------------------

    override fun startUpViewModel(extras: Bundle?) {
        super.startUpViewModel(extras)

        doActionForStep()
    }

    override fun populateLivesData(extras: Bundle?) {
        super.populateLivesData(extras)

        step.value = INIT
    }

    // endregion

    // region Actions Methods ------------------------------------------------------------------------------------------

    // region Private Methods ------------------------------------------------------------------------------------------
    private fun doActionForStep() {
        when (step.value) {
            0 -> {
                title.value = App.getStringResource(R.string.onboarding_fte_title1)
                text.value = App.getStringResource(R.string.onboarding_fte_text1)
                image.setValue(App.getDrawableResource(R.drawable.logo_svg))
            }

            1 -> {
                title.value = App.getStringResource(R.string.onboarding_fte_title2)
                text.value = App.getStringResource(R.string.onboarding_fte_text2)
                image.setValue(App.getDrawableResource(R.drawable.logo_svg))
            }

            2 -> {
                title.value = App.getStringResource(R.string.onboarding_fte_title3)
                text.value = App.getStringResource(R.string.onboarding_fte_text3)
                image.setValue(App.getDrawableResource(R.drawable.logo_svg))
            }

            3 -> {
                title.value = App.getStringResource(R.string.onboarding_fte_title4)
                text.value = App.getStringResource(R.string.onboarding_fte_text4)
                image.setValue(App.getDrawableResource(R.drawable.logo_svg))
            }

            4 -> {
                title.value = App.getStringResource(R.string.onboarding_fte_title5)
                text.value = App.getStringResource(R.string.onboarding_fte_text5)
                image.setValue(App.getDrawableResource(R.drawable.logo_svg))
            }

            5 -> doActionForEndOnboarding()
        }
    }

    private fun doActionForEndOnboarding() {
        Log.d(TAG, "${AppUtils.getFunctionName()} Onboarding finished.")
        IoCManager.getInternalMemoryInputAdapter().setFirstTime(true)
        destination.postValue(RegisterStep0Activity::class.java)
        finishActivity.value = true
    }
    // endregion

    // region Public Methods -------------------------------------------------------------------------------------------

    // endregion

    // endregion

    // region Control Event Handlers -----------------------------------------------------------------------------------

    // region Listeners ------------------------------------------------------------------------------------------------
    fun onClickStep() {
        doActionForEndOnboarding()
    }

    fun onClickPreviousStep() {
        if (step.value!! > INIT) {
            step.value = step.value!! - 1

            doActionForStep()
        }
    }

    fun onClickNextStep() {
        if (step.value!! < END) {
            step.value = step.value!! + 1

            doActionForStep()
        }
    }
    // endregion

    // endregion
    // endregion

    // region Other Methods --------------------------------------------------------------------------------------------

    // endregion
}
