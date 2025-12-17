package com.inetum.eudi_dome_wallet.ui.home.fragments.more

import android.os.Bundle
import androidx.lifecycle.LiveData
import androidx.lifecycle.MutableLiveData
import com.inetum.eudi_dome_wallet.App
import com.inetum.eudi_dome_wallet.BuildConfig
import com.inetum.eudi_dome_wallet.core.controllers.uxController.BiometricController
import com.inetum.eudi_dome_wallet.core.controllers.uxController.BiometricController.BiometricStatus
import com.inetum.eudi_dome_wallet.core.controllers.uxController.DataHolder
import com.inetum.eudi_dome_wallet.manager.IoCManager
import com.inetum.eudi_dome_wallet.ui.base.BaseFragmentViewModel
import com.inetum.eudi_dome_wallet.ui.infoKeys.InfoKeysActivity
import com.inetum.eudi_dome_wallet.ui.legalTerms.LegalTermsActivity

class MoreViewModel : BaseFragmentViewModel() {

    var errorUser = MutableLiveData("")
    var nick = MutableLiveData("")
    var versionValue = MutableLiveData("")
    var did = MutableLiveData("")
    var phoneHasBiometrics = MutableLiveData(false)
    var biometricOptionValue = MutableLiveData(false)
    var selectTechnology = MutableLiveData("")

    private val _closeFragment = MutableLiveData<Boolean>()
    val closeFragment: LiveData<Boolean> get() = _closeFragment

    override fun startUpViewModel(extras: Bundle?) {
        super.startUpViewModel(extras)
        updateUsername()
        checkBiometricStatus()
        versionValue.postValue(BuildConfig.VERSION_NAME)
    }
    fun goToInfoKeys() {
        destination.postValue(InfoKeysActivity::class.java)
    }


    fun goToTermsAndConditions() {
        DataHolder.viewingLegalTermsFromCfg = true
        destination.postValue(LegalTermsActivity::class.java)
    }

    fun setErrorChangingName(strError: String) {
        errorUser.postValue(strError)
    }

    fun updateUsername() {
        nick.postValue(DataHolder.userNickname)
    }

    private fun checkBiometricStatus() {
        val biometricStatus = BiometricController.isBiometricUsable(App.context)
        val _phoneHasBio = biometricStatus == BiometricStatus.Enabled
        phoneHasBiometrics.value = _phoneHasBio
        if (_phoneHasBio) {
            biometricOptionValue.postValue(
                IoCManager.getInternalMemoryInputAdapter()
                    .getUserWantsToUseBiometricAuthentication()
            )
        }
    }
}