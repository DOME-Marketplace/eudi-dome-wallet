package com.inetum.eudi_dome_wallet.core.controllers.uxController

import com.inetum.eudi_dome_wallet.manager.IoCManager
import com.inetum.eudi_dome_wallet.ui.custom.AlertDialogDTO
import com.inetum.eudi_dome_wallet.ui.custom.SnackBarDTO

object DataHolder {
    var initializationSnackBarDTO: SnackBarDTO? = null
    var initializationAlertDialogDTO: AlertDialogDTO? = null
    var hasAcceptedLegalTerms: Boolean = false
    var viewingLegalTermsFromCfg: Boolean = false

    var userNickname: String = ""
        get() {
            if (field.isEmpty()) {
                field = IoCManager.getInternalMemoryInputAdapter().getUsername()
            }
            return field
        }
}