package com.inetum.eudi_dome_wallet.ui.common

import com.inetum.eudi_dome_wallet.R
import com.inetum.eudi_dome_wallet.ui.common.models.AssociatedViewLayout

object EnumsItemsViewHolders {
    enum class ItemLayoutRecyclerViewEmptyAssociated(override val layoutId: Int) :
        AssociatedViewLayout {
        TYPE_GENERIC(R.layout.item_rv_empty),
    }

    enum class ItemLayoutCredentialAssociated(override val layoutId: Int) : AssociatedViewLayout {
        TYPE_GENERIC_HEADER(R.layout.item_credential_header),

        TYPE_EUDI_CREDENTIAL(R.layout.item_eudi_credential), TYPE_EUDI_CREDENTIAL_SELECTION(
            R.layout.item_eudi_credential_selection
        ),
        TYPE_EUDI_CREDENTIAL_STRING_SELECTION(R.layout.item_eudi_credential_string_selection),
        TYPE_EUDI_CREDENTIAL_AVAILABLE_IN_PRESENTATION_REQUEST_HEADER(R.layout.item_eudi_credential_available_in_presentation_request_header)
    }

    enum class ItemLayoutPresentationAssociated(override val layoutId: Int) : AssociatedViewLayout {
        TYPE_EUDI_PRESENTATION(R.layout.item_eudi_presentation),

        TYPE_EUDI_PRESENTATION_REQUEST_HEADER(R.layout.item_eudi_presentation_request_header)
    }
}