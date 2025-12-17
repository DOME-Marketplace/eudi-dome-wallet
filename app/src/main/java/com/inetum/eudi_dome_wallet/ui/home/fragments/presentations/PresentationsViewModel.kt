package com.inetum.eudi_dome_wallet.ui.home.fragments.presentations

//import com.inetum.eudi_dome_wallet.ui.home.fragments.presentations.model.HeaderListItem
import android.util.Log
import android.view.View
import androidx.lifecycle.LiveData
import androidx.lifecycle.MutableLiveData
import androidx.lifecycle.viewModelScope
import com.inetum.eudi_dome_wallet.App
import com.inetum.eudi_dome_wallet.R
import com.inetum.eudi_dome_wallet.common.exception.CustomException
import com.inetum.eudi_dome_wallet.common.utils.AppUtils
import com.inetum.eudi_dome_wallet.core.models.eudi.presentations.PresentationEudi
import com.inetum.eudi_dome_wallet.core.models.enums.UserEnums
import com.inetum.eudi_dome_wallet.manager.IoCManager
import com.inetum.eudi_dome_wallet.ui.base.BaseFragmentViewModel
import com.inetum.eudi_dome_wallet.ui.common.models.GenericHeaderItem
import com.inetum.utils.containedInThePattern
import com.inetum.utils.toJsonString
import com.inetum.utils.toMillis
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.launch
import kotlinx.coroutines.withContext
import java.text.SimpleDateFormat
import java.util.Date
import java.util.Locale
import com.inetum.eudi_dome_wallet.core.models.eudi.presentations.Presentation as PresentationDOME

class PresentationsViewModel() : BaseFragmentViewModel() {

    // region Declarations --------------------------------------------------------------------------------------------

    enum class FilterEudiPresentation {
        CASE_ORDER_BY_DATE
    }

    // region Constants

    // endregion

    // region Attributes

    var technologyType: UserEnums.TechnologyType

    private var searchText: String = ""

    // endregion

    // region Eudi

    private var eudiPresentationList: List<PresentationEudi> = arrayListOf()

    private var selectedFilterEudiPresentation: FilterEudiPresentation =
        FilterEudiPresentation.CASE_ORDER_BY_DATE

    // endregion

    // endregion

    // region LivesData

    var drawerOpen = MutableLiveData<Boolean>()

    var hasDataDoesntMatchFilter = MutableLiveData(false)
    var orderByEntity = MutableLiveData<Boolean>()
    var orderByDate = MutableLiveData<Boolean>()
    var orderByStatus = MutableLiveData<Boolean>()

    var validatedTypeEnabled = MutableLiveData<Boolean>()
    var entityAcceptedTypeEnabled = MutableLiveData<Boolean>()
    var askDeletionTypeEnabled = MutableLiveData<Boolean>()
    var deletedConfirmationTypeEnabled = MutableLiveData<Boolean>()
    var unregisteredTypeEnabled = MutableLiveData<Boolean>()

    // region Eudi

    private val _eudiPresentationHeaderItemList =
        MutableLiveData<List<GenericHeaderItem<PresentationEudi>>>()
    val eudiPresentationHeaderItemList: LiveData<List<GenericHeaderItem<PresentationEudi>>> get() = _eudiPresentationHeaderItemList

    // endregion

    // endregion

    // endregion

    // region ViewModel's Lifecycle ------------------------------------------------------------------------------------

    init {
        technologyType =
            IoCManager.getInternalMemoryInputAdapter().recoverTechnologyTypeFromStorage()

        isLoading.value = false

//        headersList.value = ArrayList()
        drawerOpen.value = false
        fragmentActive = FRAGMENT_ACTIVE.HOME

        orderByEntity.value =
            if (technologyType == UserEnums.TechnologyType.EUDI_TYPE) false else true
        orderByDate.value =
            if (technologyType == UserEnums.TechnologyType.EUDI_TYPE) true else false
        orderByStatus.value = false

        validatedTypeEnabled.value = true
        entityAcceptedTypeEnabled.value = true
        askDeletionTypeEnabled.value = true
        deletedConfirmationTypeEnabled.value = true
        unregisteredTypeEnabled.value = true

    }

    // endregion

    // region View Model Initialization & Finalization -----------------------------------------------------------------

    // endregion

    // region Actions Methods ------------------------------------------------------------------------------------------

    // region Private Methods ------------------------------------------------------------------------------------------

    // endregion

    // region Public Methods -------------------------------------------------------------------------------------------

    fun searchText(newText: String) {
        searchText = newText
    }

    private fun getHeaderTitle(key: Any): String {
        return key.toString()
    }

    // endregion

    // region Eudi Methods

    fun getEudiPresentationsFromDB() {

        viewModelScope.launch {

            try {

                isLoading.postValue(true)

                val eudiPresentationList = withContext(Dispatchers.IO) {
                    try {
                        IoCManager.getEudiPresentationDBInputAdapter().getAllPresentationFromDB()
                    } catch (e: Exception) {
                        Log.e(TAG, "${AppUtils.getFunctionName()} ${e.message}", e)
                        throw e
                    }
                }

                Log.d(
                    TAG,
                    "${AppUtils.getFunctionName()} eudiPresentationList from DB: ${eudiPresentationList.toJsonString()}"
                )

                this@PresentationsViewModel.eudiPresentationList = eudiPresentationList

                populateEudiCredentialHeaderItemList()

            } catch (e: CustomException) {
                Log.e(TAG, "${AppUtils.getFunctionName()} ${e.message}. ${e.userMessage}", e)
                updateSnackBarErrorMessage(e.userMessage)
                //                error(e.userMessage)

            } catch (e: Exception) {
                Log.e(TAG, "${AppUtils.getFunctionName()} Error", e)
                updateSnackBarErrorMessage(App.getStringResource(R.string.generic_error))
                //                error(App.getStringResource(R.string.generic_error))

            } finally {
                isLoading.postValue(false)
            }
        }

    }

    private fun populateEudiCredentialHeaderItemList() {

        // separate by chosen search filter
        val filterMap = when (selectedFilterEudiPresentation) {

            FilterEudiPresentation.CASE_ORDER_BY_DATE -> {
                val myFormat = SimpleDateFormat("MMMM yyy", Locale.getDefault())
                eudiPresentationList.groupBy { myFormat.format(Date(it.iat.toMillis())) }
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

        _eudiPresentationHeaderItemList.postValue(genericHeaderItemList)

        hasDataDoesntMatchFilter.value = genericHeaderItemList.isNotEmpty()

    }
    // endregion

    // region Eudi

    /**
     * Checks if the presentation matches the given search query.
     *
     * This function compares the normalized search string (trimmed and lowercased)
     * against several properties of the credential:
     * - `vp.type.last()`
     *
     * If the search query is empty, it will always return `true`, as any string contains an empty substring.
     *
     * @param search The text to search for within the credential fields.
     * @return `true` if any of the relevant fields contain the search term; `false` otherwise.
     */
    private fun PresentationDOME.matchesSearch(search: String): Boolean {
        return vp.type.last().containedInThePattern(search)
    }
    private fun PresentationEudi.matchesSearch(search: String): Boolean {
        return vp.type.last().containedInThePattern(search)
    }

    fun changeDrawerVisibility(view: View) {
        drawerOpen.value = view.id == R.id.iv_MyCred_showMenu
    }

    fun pushRadioButton(buttonNumber: Int) {

        // Set all to false
        orderByEntity.value = false
        orderByDate.value = false
        orderByStatus.value = false
        orderByDate.value = false

        when (buttonNumber) {
            0 -> orderByEntity.value = true
            1 -> orderByDate.value = true
            2 -> orderByStatus.value = true
            3 -> orderByDate.value = true
            else -> {
                throw IllegalArgumentException("buttonNumber inválido: $buttonNumber")
            }
        }
    }
}