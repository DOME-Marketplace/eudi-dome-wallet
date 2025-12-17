package com.inetum.eudi_dome_wallet.ui.selectTechnology

import android.util.Log
import androidx.lifecycle.MutableLiveData
import com.inetum.eudi_dome_wallet.core.models.enums.UserEnums.TechnologyType
import com.inetum.eudi_dome_wallet.manager.IoCManager.getInternalMemoryInputAdapter
import com.inetum.eudi_dome_wallet.ui.base.BaseViewModel

class SelectTechnologyViewModel : BaseViewModel() {
    val isEudiSelected = MutableLiveData<Boolean>()
    init {
        isEudiSelected.value = false

        try {
            val typeTechnology = getInternalMemoryInputAdapter().recoverTechnologyTypeFromStorage()
            if (typeTechnology == TechnologyType.EUDI_TYPE)
                isEudiSelected.setValue(true)
        } catch (e: Exception) {
            Log.e(TAG, "Error: $e" )
        }
    }

}
