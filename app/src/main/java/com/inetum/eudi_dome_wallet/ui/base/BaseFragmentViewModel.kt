package com.inetum.eudi_dome_wallet.ui.base

open class BaseFragmentViewModel: BaseViewModel() {
    companion object {
        var isHomeFragment: Boolean = false
        var fragmentActive: FRAGMENT_ACTIVE = FRAGMENT_ACTIVE.HOME
    }

    enum class FRAGMENT_ACTIVE {
        HOME, MY_DATA, ACTIVITY, MORE
    }
}