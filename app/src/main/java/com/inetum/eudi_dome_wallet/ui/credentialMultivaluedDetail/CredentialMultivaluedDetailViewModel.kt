package com.inetum.eudi_dome_wallet.ui.credentialMultivaluedDetail

import android.os.Bundle
import android.util.Log
import androidx.lifecycle.MutableLiveData
import androidx.lifecycle.viewModelScope
import com.inetum.eudi_dome_wallet.common.constants.IntentKeys
import com.inetum.eudi_dome_wallet.core.models.enums.UserEnums
import com.inetum.eudi_dome_wallet.core.models.eudi.credentials.EudiCredential
import com.inetum.eudi_dome_wallet.manager.IoCManager
import com.inetum.eudi_dome_wallet.ui.base.BaseViewModel
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.launch
import kotlinx.coroutines.withContext

class CredentialMultivaluedDetailViewModel : BaseViewModel() {

    private lateinit var technologyType: UserEnums.TechnologyType

    private var eudiCredential: EudiCredential? = null

    val eudiCredentialLiveData = MutableLiveData<EudiCredential?>()

    var credentialTechNameUX = MutableLiveData("")

    init {
        technologyType =
            IoCManager.getInternalMemoryInputAdapter().recoverTechnologyTypeFromStorage()

    }

    override fun startUpViewModel(extras: Bundle?) {
        super.startUpViewModel(extras)
        val rawJwt = try {
            getFromExtraBundle(IntentKeys.Eudi.EUDI_CREDENTIAL_MULTI_KEY, String::class.java)
        } catch (e: Exception) {
            Log.e(TAG, "Error getting rawJwt: ${e.message}", e)
            null
        }

        if (!rawJwt.isNullOrEmpty()) {

            viewModelScope.launch(Dispatchers.IO) {

                try {
                    eudiCredential = IoCManager.getEudiCredentialDBInputAdapter()
                        .getCredentialFromDBbyId(rawJwt)

                    withContext(Dispatchers.Main) {
                        eudiCredentialLiveData.value = eudiCredential
                    }

                } catch (e: Exception) {
                    Log.e(TAG, "Error loading credential from DB: ${e.message}", e)
                }
            }
            return
        }
    }

    fun getCredentialEudi(): EudiCredential? {
        return eudiCredential
    }
}

