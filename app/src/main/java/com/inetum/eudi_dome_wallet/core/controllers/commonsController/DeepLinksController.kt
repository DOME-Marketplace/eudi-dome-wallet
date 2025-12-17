package com.inetum.eudi_dome_wallet.core.controllers.commonsController

import android.net.Uri
import com.inetum.eudi_dome_wallet.common.classes.LogLevel
import com.inetum.eudi_dome_wallet.common.utils.AppUtils
import com.inetum.eudi_dome_wallet.manager.IoCManager

object DeepLinksController {

    private val TAG: String = "DW:${(this::class.java.simpleName ?: "Unknown class")}"

    fun checkDeeplink(data: Uri?): String? {

        if (data == null) {
            IoCManager.getLogInputAdapter()
                .log(LogLevel.DEBUG, TAG, "${AppUtils.getFunctionName()} data is null")
            return null
        }

        val queryName = data.queryParameterNames

        val queryParam = data.getQueryParameter(queryName.first())

        return queryParam

    }

}