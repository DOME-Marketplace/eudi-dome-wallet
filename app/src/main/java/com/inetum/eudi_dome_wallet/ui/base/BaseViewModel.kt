package com.inetum.eudi_dome_wallet.ui.base

import android.os.Build
import android.os.Bundle
import android.util.Log
import androidx.lifecycle.LiveData
import androidx.lifecycle.MutableLiveData
import androidx.lifecycle.ViewModel
import com.google.android.material.snackbar.Snackbar
import com.inetum.eudi_dome_wallet.common.utils.AppUtils
import com.inetum.eudi_dome_wallet.ui.base.BaseViewModel.Companion.HAS_STRING_EXTRA
import com.inetum.eudi_dome_wallet.ui.custom.AlertDialogDTO
import com.inetum.eudi_dome_wallet.ui.custom.CustomSnackBar
import com.inetum.eudi_dome_wallet.ui.custom.SingleLiveEvent
import com.inetum.eudi_dome_wallet.ui.custom.SnackBarDTO
import java.io.Serializable

open class BaseViewModel : ViewModel() {
    companion object {
        val HAS_STRING_EXTRA: String = "STRING_EXTRA"

        var previouslyLoggedIn: Boolean = false
        var lastInteractionTime: Long = System.currentTimeMillis()
    }

    protected val TAG: String = "DW:${(this::class.java.simpleName ?: "Unknown class")}"
    var extras: Bundle? = null
    var destination: MutableLiveData<Class<*>?> =
        MutableLiveData()
    var clearBackStack: MutableLiveData<Boolean> = MutableLiveData(false)
    var finishActivity: MutableLiveData<Boolean> = MutableLiveData(false)
    var stringExtra = MutableLiveData<String?>()
    var isLoading: MutableLiveData<Boolean> = MutableLiveData()
    var toastMessage: MutableLiveData<String> = MutableLiveData()

    private val _snackBarDTO = MutableLiveData<SnackBarDTO>()
    val snackBarDTO: LiveData<SnackBarDTO> get() = _snackBarDTO
    private val _alertDialogDTOInformation = SingleLiveEvent<AlertDialogDTO>()
    val alertDialogDTOInformation: LiveData<AlertDialogDTO> get() = _alertDialogDTOInformation

    private val _alertDialogDTOError = SingleLiveEvent<AlertDialogDTO>()
    val alertDialogDTOError: LiveData<AlertDialogDTO> get() = _alertDialogDTOError

    fun updateSnackBarInfoMessage(message: String) {
        _snackBarDTO.postValue(
            SnackBarDTO(
                message = message,
                alertType = CustomSnackBar.AlertType.INFO,
                length = Snackbar.LENGTH_LONG,
                icon = -1
            )
        )
    }

    fun updateSnackBarErrorMessage(message: String) {
        updateSnackBarDTO(
            message = message,
            alertType = CustomSnackBar.AlertType.ERROR,
            length = Snackbar.LENGTH_INDEFINITE
        )
    }

    fun updateSnackBarDTO(
        message: String,
        alertType: CustomSnackBar.AlertType,
        length: Int = Snackbar.LENGTH_INDEFINITE
    ) {
        _snackBarDTO.postValue(
            SnackBarDTO(
                message = message,
                alertType = alertType,
                length = length
            )
        )
    }

    /**
     * Initializes the ViewModel with the provided extras.
     *
     * This method is called to perform any setup operations for the ViewModel.
     * It takes an optional [Bundle] of extras that may contain additional data
     * necessary for initialization.
     *
     * - This method will log the execution and then call [initializeViewModel]
     * to complete the setup process. The implementation details related to
     * handling the extras are currently commented out for potential future use.
     *
     * @param extras A [Bundle] containing extras passed to the ViewModel.
     *               This can be null if no extras are provided.
     */
    open fun startUpViewModel(extras: Bundle?) {
        Log.d(TAG, "[BaseViewModel] ${AppUtils.getFunctionName()} execute")
        initializeViewModel(extras)
    }

    /**
     * Initializes the ViewModel attributes and LiveData with the provided extras.
     *
     * This method is responsible for setting up the ViewModel by populating its
     * attributes and LiveData objects with the data contained in the provided
     * [Bundle] of extras.
     *
     * - This method calls [populateAttributes] to populate the ViewModel's
     * - attributes and [populateLivesData] to initialize any LiveData objects
     * that may depend on the extras.
     *
     * @param extras A [Bundle] containing extras passed to the ViewModel.
     *               This can be null if no extras are provided.
     */
    open fun initializeViewModel(extras: Bundle?) {
        populateAttributes(extras)
        populateLivesData(extras)
    }

    /**
     * Populates the ViewModel's attributes with the data contained in the provided extras.
     *
     * This method extracts relevant data from the [Bundle] of extras and assigns it
     * to the corresponding attributes of the ViewModel. The implementation of this method
     * should define how the data is mapped to the ViewModel's properties.
     *
     * - This method assigns the provided extras Bundle to the property [extras].
     *
     * @param extras A [Bundle] containing extras that may be used to populate the ViewModel's attributes.
     *               This can be null if no extras are provided.
     */
    open fun populateAttributes(extras: Bundle?) {
        this.extras = extras
    }

    /**
     * Populates LiveData properties with data extracted from the provided extras Bundle.
     *
     * - First, it checks if the extras Bundle is not null and not empty.
     * If the conditions are met, it retrieves the string associated with the key
     * [HAS_STRING_EXTRA] and assigns it to the LiveData property [stringExtra].
     * If the Bundle is null or empty, [stringExtra] is set to null.
     *
     * - Additionally, this method sets the loading state to false, indicating that
     * the data loading process is complete.
     *
     * @param extras A [Bundle] containing extras that may be used to populate LiveData properties.
     *               This can be null if no extras are provided.
     */
    open fun populateLivesData(extras: Bundle?) {
        stringExtra.value =
            if (extras?.isEmpty == false) extras.getString(HAS_STRING_EXTRA, null) else null

        isLoading.value = false
    }

    fun getIsLoading(): Boolean {
        return isLoading.value == null || isLoading.value!!
    }

    fun getStringExtra(): String? {
        return stringExtra.value
    }
    open fun onButtonClickCallback(btId: Int) {}

    /**
     * Adds a value to the existing Bundle stored in [extras] with the specified key.
     *
     * If [extras] is null, a new Bundle is created and the value is added to it.
     * The method supports adding values of various types including String, Int,
     * Boolean, Float, and Double. If the value type is not supported, an
     * IllegalArgumentException is thrown.
     *
     * ### Example Usage:
     * ```kotlin
     * val bundle = Bundle().apply {
     *     putString("username", "Name")
     *     putInt("userId", 42)
     * }
     *
     * val activity = MyActivity().apply {
     *     extras = bundle
     * }
     *
     * val username: String? = activity.getFromExtraBundle("username", String::class.java)
     * val userId: Int? = activity.getFromExtraBundle("userId", Int::class.java)
     * ```
     *
     * @param key The key under which the value will be stored in the Bundle.
     * @param value The value to be added to the Bundle. It can be of various
     *              types including String, Int, Boolean, Float, or Double.
     * @throws IllegalArgumentException if the value type is not supported.
     */
    fun addToExtraBundle(key: String, value: Any) {
        val bundle = extras ?: Bundle()
        when (value) {
            is String -> bundle.putString(key, value)
            is Int -> bundle.putInt(key, value)
            is Boolean -> bundle.putBoolean(key, value)
            is Float -> bundle.putFloat(key, value)
            is Double -> bundle.putDouble(key, value)
            is Serializable -> bundle.putSerializable(key, value)
            else -> throw IllegalArgumentException("Unsupported value type: ${value::class.java.simpleName}")
        }
        extras = bundle
    }

    /**
     * Retrieves a value from the existing Bundle stored in [extras] using the specified key.
     *
     * If [extras] is null, or if the key does not exist in the Bundle, null is returned.
     * The method supports retrieving values of various types including String, Int,
     * Boolean, Float, Double, and Serializable. If the value type does not match the expected type,
     * an IllegalArgumentException is thrown.
     *
     * ### Example Usage:
     * ```kotlin
     * val bundle = Bundle().apply {
     *     putString("username", "Name")
     *     putInt("userId", 42)
     * }
     *
     * val activity = MyActivity().apply {
     *     extras = bundle
     * }
     *
     * val username: String? = activity.getFromExtraBundle("username", String::class.java)
     * val userId: Int? = activity.getFromExtraBundle("userId", Int::class.java)
     * ```
     *
     * @param key The key used to retrieve the value from the Bundle.
     * @param type The expected type of the value to be retrieved.
     * @return The value retrieved from the Bundle, or null if the key does not exist or extras is null.
     * @throws IllegalArgumentException if the value type does not match the expected type.
     *
     */
    fun <T : Serializable> getFromExtraBundle(key: String, type: Class<T>): T? {
        val bundle = extras

        if (bundle != null && bundle.containsKey(key)) {
            val rawValue = bundle.get(key)
            Log.e("DEBUG_BUNDLE", "--------------------------------------")
            Log.e("DEBUG_BUNDLE", "KEY: $key")
            Log.e("DEBUG_BUNDLE", "Valor recibido (sin cast): $rawValue")
            Log.e("DEBUG_BUNDLE", "Tipo recibido: ${rawValue?.javaClass?.canonicalName}")
            Log.e("DEBUG_BUNDLE", "Tipo que esperaba: ${type.canonicalName}")
            Log.e("DEBUG_BUNDLE", "--------------------------------------")

            return when (type) {
                String::class.java -> bundle.getString(key) as? T
                Int::class.java -> bundle.getInt(key) as? T
                Boolean::class.java -> bundle.getBoolean(key) as? T
                Float::class.java -> bundle.getFloat(key) as? T
                Double::class.java -> bundle.getDouble(key) as? T
                else -> {
                    if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.TIRAMISU) {
                        bundle.getSerializable(key, type)
                    } else {
                        @Suppress("DEPRECATION")
                        bundle.getSerializable(key) as? T
                    }
                }
            }
        }

        return null
    }

    fun <T> changeDestination(destinationClass: Class<T>) {
        destination.value = destinationClass
    }
}