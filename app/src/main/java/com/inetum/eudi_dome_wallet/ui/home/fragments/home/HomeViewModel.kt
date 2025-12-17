package com.inetum.eudi_dome_wallet.ui.home.fragments.home

import android.util.Log
import androidx.lifecycle.MutableLiveData
import com.inetum.eudi_dome_wallet.App
import com.inetum.eudi_dome_wallet.R
import com.inetum.eudi_dome_wallet.common.utils.AppUtils
import com.inetum.eudi_dome_wallet.common.utils.Event
import com.inetum.eudi_dome_wallet.core.controllers.uxController.DataHolder
import com.inetum.eudi_dome_wallet.manager.IoCManager
import com.inetum.eudi_dome_wallet.ui.base.BaseFragmentViewModel

class HomeViewModel: BaseFragmentViewModel() {

    enum class FilterNotificationEnum {
        CASE_ORDER_BY_NEW
    }

    enum class FilterDeferredCredentialEnum {
        CASE_ORDER_BY_AVAILABLE
    }
    var helloTitle = MutableLiveData<String>()
    var hideUseGuide = MutableLiveData<Boolean>()
    var selectedCheckButtonFilterNotification = MutableLiveData<FilterNotificationEnum>()
    var existNotificationInTheFilter = MutableLiveData<Boolean>()
    var selectedCheckButtonFilterDeferredCredential = MutableLiveData<FilterDeferredCredentialEnum>()

    val openUseGuideEvent = MutableLiveData<Event<Unit>>()

    init {
        updateHelloTitle()
        selectedCheckButtonFilterNotification.value = FilterNotificationEnum.CASE_ORDER_BY_NEW

        selectedCheckButtonFilterDeferredCredential.value = FilterDeferredCredentialEnum.CASE_ORDER_BY_AVAILABLE

        existNotificationInTheFilter.value = false
        hideUseGuide.value = IoCManager.getInternalMemoryInputAdapter().getHideUseGuide()
    }

    fun updateHelloTitle() {
        helloTitle.value = String.format(
            App.getStringResource(R.string.home_title_hello),
            DataHolder.userNickname
        )
    }
    fun onClickOpenUseGuide() {
        Log.d(TAG, "${AppUtils.getFunctionName()} execute")
        openUseGuideEvent.value = Event(Unit)
    }
}