package com.inetum.eudi_dome_wallet.ui.home.fragments.credentials

import android.util.Log
import android.view.View
import androidx.lifecycle.LiveData
import androidx.lifecycle.MutableLiveData
import androidx.lifecycle.viewModelScope
import com.inetum.eudi_dome_wallet.App
import com.inetum.eudi_dome_wallet.R
import com.inetum.eudi_dome_wallet.common.exception.CustomException
import com.inetum.eudi_dome_wallet.common.utils.AppUtils
import com.inetum.eudi_dome_wallet.core.models.eudi.credentials.EudiCredential
import com.inetum.eudi_dome_wallet.core.models.enums.UserEnums
import com.inetum.eudi_dome_wallet.manager.IoCManager
import com.inetum.eudi_dome_wallet.ui.base.BaseFragmentViewModel
import com.inetum.eudi_dome_wallet.ui.common.models.GenericHeaderItem
import com.inetum.utils.containedInThePattern
import com.inetum.utils.toJsonString
import com.inetum.utils.toMillis
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.async
import kotlinx.coroutines.launch
import java.text.SimpleDateFormat
import java.util.Date
import java.util.Locale

class CredentialsViewModel() : BaseFragmentViewModel() {

    // region Declarations ---------------------------------------------------------------------------------------------

    enum class FilterEudiCredential {
        CASE_ORDER_BY_TYPE, CASE_ORDER_BY_DATE
    }

    // region Constants

    // endregion

    // region Attributes

    var technologyType: UserEnums.TechnologyType

    private var searchText: String = ""

    private var eudiCredentialList: List<EudiCredential> = arrayListOf()

    private var selectedFilterEudiCredential: FilterEudiCredential =
        FilterEudiCredential.CASE_ORDER_BY_TYPE

    var drawerOpen = MutableLiveData<Boolean>()

    var hasDataDoesntMatchFilter = MutableLiveData(false)

    var orderByEntity = MutableLiveData<Boolean>()
    var orderByType = MutableLiveData<Boolean>()
    var orderByStatus = MutableLiveData<Boolean>()
    var orderByDate = MutableLiveData<Boolean>()

    var validatedTypeEnabled = MutableLiveData<Boolean>()
    var askEntityTypeEnabled = MutableLiveData<Boolean>()
    var entityRevokedTypeEnabled = MutableLiveData<Boolean>()
    var userRevokedTypeEnabled = MutableLiveData<Boolean>()
    var unregisteredTypeEnabled = MutableLiveData<Boolean>()


    private val _eudiGenericHeaderItemList =
        MutableLiveData<List<GenericHeaderItem<EudiCredential>>>()
    val eudiGenericHeaderItemList: LiveData<List<GenericHeaderItem<EudiCredential>>> get() = _eudiGenericHeaderItemList

    init {
        technologyType =
            IoCManager.getInternalMemoryInputAdapter().recoverTechnologyTypeFromStorage()

        isLoading.value = false

        drawerOpen.value = false
        fragmentActive = FRAGMENT_ACTIVE.HOME

        orderByEntity.value =
            if (technologyType == UserEnums.TechnologyType.EUDI_TYPE) false else true
        orderByType.value =
            if (technologyType == UserEnums.TechnologyType.EUDI_TYPE) true else false
        orderByStatus.value = false
        orderByDate.value = false

        validatedTypeEnabled.value = true
        entityRevokedTypeEnabled.value = true
        askEntityTypeEnabled.value = true
        userRevokedTypeEnabled.value = true
        unregisteredTypeEnabled.value = true
    }

    fun searchText(newText: String) {
        searchText = newText

        if (technologyType == UserEnums.TechnologyType.EUDI_TYPE) populateEudiCredentialHeaderItemList()
    }

    private fun getHeaderTitle(key: Any): String {
        return key.toString()
    }

    fun getEudiCredentialsFromDB() {

        viewModelScope.launch {

            try {

                isLoading.postValue(true)

                val eudiCredentialList = async(Dispatchers.IO) {
                    try {
                        IoCManager.getEudiCredentialDBInputAdapter().getAllCredentialFromDB()
                    } catch (e: Exception) {
                        Log.e(TAG, "${AppUtils.getFunctionName()} ${e.message}", e)
                        null
                    }
                }.await() ?: return@launch

                Log.d(
                    TAG,
                    "${AppUtils.getFunctionName()} eudiCredentialList from DB: ${eudiCredentialList.toJsonString()}"
                )

                this@CredentialsViewModel.eudiCredentialList = eudiCredentialList
                populateEudiCredentialHeaderItemList()

            } catch (e: CustomException) {
                Log.e(TAG, "${AppUtils.getFunctionName()} ${e.message}. ${e.userMessage}", e)
                updateSnackBarErrorMessage(e.userMessage)

            } catch (e: Exception) {
                Log.e(TAG, "${AppUtils.getFunctionName()} Error", e)
                updateSnackBarErrorMessage(App.getStringResource(R.string.generic_error))

            } finally {
                isLoading.postValue(false)
            }
        }

    }

    private fun populateEudiCredentialHeaderItemList() {

        // separate by chosen search filter
        val filterMap = when (selectedFilterEudiCredential) {

            FilterEudiCredential.CASE_ORDER_BY_TYPE -> {
                eudiCredentialList.groupBy { it.vc.credentialSubject.credentialObjectPrettyKey }
            }

            FilterEudiCredential.CASE_ORDER_BY_DATE -> {
                val myFormat = SimpleDateFormat("MMMM yyy", Locale.getDefault())
                eudiCredentialList.groupBy { myFormat.format(Date(it.iat.toMillis())) }
            }

        }

        val genericHeaderItemList = filterMap.entries.mapIndexedNotNull { index, entry ->

            val matchList = entry.value.filter { it.matchesSearch(searchText) }

            if (matchList.isEmpty()) {
                null

            } else {

                val headerTitle = getHeaderTitle(entry.key)

                GenericHeaderItem(
                    headerTitle = headerTitle, itemList = entry.value, itemPosition = index
                )
            }
        }

        _eudiGenericHeaderItemList.postValue(genericHeaderItemList)

        hasDataDoesntMatchFilter.value = genericHeaderItemList.isNotEmpty()

    }


    /**
     * Checks if the credential matches the given search query.
     *
     * This function compares the normalized search string (trimmed and lowercased)
     * against several properties of the credential:
     * - `vc.credentialSubject.credentialObjectPrettyKey`
     *
     * If the search query is empty, it will always return `true`, as any string contains an empty substring.
     *
     * @param search The text to search for within the credential fields.
     * @return `true` if any of the relevant fields contain the search term; `false` otherwise.
     */
    private fun EudiCredential.matchesSearch(search: String): Boolean {
        return vc.credentialSubject.credentialObjectPrettyKey.containedInThePattern(search)
    }

    fun changeDrawerVisibility(view: View) {
        drawerOpen.value = view.id == R.id.iv_MyCred_showMenu
    }

    fun pushRadioButton(buttonNumber: Int) {

        // All radio to false
        orderByEntity.value = false
        orderByType.value = false
        orderByStatus.value = false
        orderByDate.value = false

        when (buttonNumber) {
            0 -> orderByEntity.value = true
            1 -> orderByType.value = true
            2 -> orderByStatus.value = true
            3 -> orderByDate.value = true
            else -> {
                throw IllegalArgumentException("buttonNumber inválido: $buttonNumber")
            }
        }
    }
}