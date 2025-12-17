package com.inetum.eudi_dome_wallet.ui.register

import com.inetum.eudi_dome_wallet.ui.base.BaseViewModel

class RegisterStep0ViewModel: BaseViewModel() {

    fun onClickRegister() {
        destination.postValue(RegisterStep1Activity::class.java)
    }
}
