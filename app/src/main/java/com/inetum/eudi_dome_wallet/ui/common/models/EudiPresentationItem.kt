package com.inetum.eudi_dome_wallet.ui.common.models

import androidx.lifecycle.LiveData
import androidx.lifecycle.MutableLiveData
import com.inetum.eudi_dome_wallet.core.models.eudi.presentations.PresentationEudi
import com.inetum.eudi_dome_wallet.ui.common.EnumsItemsViewHolders

class EudiPresentationItem(presentation: PresentationEudi): AssociatedViewLayout {
        override val layoutId: Int

    var typeName: String
    var issuer: String
    var jtiPr: String
    val issueDate: Long

    var rawVpJwt: String
    var id: String
    val jti: String

    private var _presentation: MutableLiveData<PresentationEudi> = MutableLiveData()
    val presentation: LiveData<PresentationEudi> get() = _presentation

    init {
        layoutId = EnumsItemsViewHolders.ItemLayoutPresentationAssociated.TYPE_EUDI_PRESENTATION.layoutId

        this._presentation.value = presentation
        jtiPr = presentation.jti
        rawVpJwt = presentation.rawJwt
        typeName = presentation.vp.id
        issuer = presentation.iss
        id = presentation.jti
        issueDate = presentation.iat
        jti = presentation.jti
    }

}