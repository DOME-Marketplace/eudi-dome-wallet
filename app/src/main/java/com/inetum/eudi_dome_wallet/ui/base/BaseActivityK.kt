package com.inetum.eudi_dome_wallet.ui.base

import android.annotation.SuppressLint
import android.content.pm.ActivityInfo
import android.os.Bundle
import android.util.Log
import android.view.WindowManager
import android.widget.Toast
import androidx.activity.OnBackPressedCallback
import androidx.annotation.LayoutRes
import androidx.appcompat.app.AppCompatActivity
import androidx.databinding.DataBindingUtil
import androidx.databinding.ViewDataBinding
import com.inetum.eudi_dome_wallet.App
import com.inetum.eudi_dome_wallet.BuildConfig
import com.inetum.eudi_dome_wallet.R
import com.inetum.eudi_dome_wallet.common.classes.LogLevel
import com.inetum.eudi_dome_wallet.common.utils.AppUtils
import com.inetum.eudi_dome_wallet.core.controllers.uxController.DataHolder
import com.inetum.eudi_dome_wallet.core.controllers.uxController.NavigationController
import com.inetum.eudi_dome_wallet.manager.IoCManager
import com.inetum.eudi_dome_wallet.ui.base.BaseViewModel.Companion.lastInteractionTime
import com.inetum.eudi_dome_wallet.ui.base.BaseViewModel.Companion.previouslyLoggedIn
import com.inetum.eudi_dome_wallet.ui.base.dialogs.ShortDialog
import com.inetum.eudi_dome_wallet.ui.custom.AlertDialogDTO
import com.inetum.eudi_dome_wallet.ui.custom.CustomAlertDialog
import com.inetum.eudi_dome_wallet.ui.custom.CustomSnackBar
import com.inetum.eudi_dome_wallet.ui.custom.SnackBarDTO
import com.inetum.eudi_dome_wallet.ui.home.MainActivity
import com.inetum.eudi_dome_wallet.ui.legalTerms.LegalTermsActivity
import com.inetum.eudi_dome_wallet.ui.login.LoginActivity
import com.inetum.eudi_dome_wallet.ui.onboarding.OnboardingActivity
import com.inetum.eudi_dome_wallet.ui.register.RegisterStep0Activity
import com.inetum.eudi_dome_wallet.ui.register.RegisterStep1Activity
import com.inetum.eudi_dome_wallet.ui.register.RegisterStep2Activity
import com.inetum.eudi_dome_wallet.ui.splash.SplashActivity

abstract class BaseActivityK<B: ViewDataBinding, VM: BaseViewModel>: AppCompatActivity() {
    companion object {
        val DEBUG_AFK_TIMER_LOG: Boolean = BuildConfig.DEBUG_AFK_TIMER_LOG
        val USE_AFK_TIMER: Boolean = BuildConfig.USE_AFK_TIMER
    }

    protected val TAG : String = "DW:${(this::class.java.simpleName ?: "Unknown class")}"

    protected lateinit var binding: B

    protected lateinit var viewModel: VM
    private var clearActivityStack = false
    override fun onCreate(savedInstanceState: Bundle?) {
        Log.d(TAG, "[BaseActivity] ${AppUtils.getFunctionName()} execute")
        super.onCreate(savedInstanceState)

        try {
            hideSupportActionBar()
            initializeOnBackPressed()
            val mBinding = DataBindingUtil.setContentView<B>(this, getAssociatedLayoutResource())
            initializeView(mBinding)
            val mViewModel = getAssociatedViewModel()
            initializeViewModel(mViewModel)
            setOrientation()

        } catch (e: Throwable) {
            Log.e(TAG, "[BaseActivity] ${AppUtils.getFunctionName()} *CRITICAL ERROR", e)
            throw e
        }
    }

    /**
     * Runs when the UI has finished drawing
     */
    override fun onAttachedToWindow() {
        super.onAttachedToWindow()
    }

    override fun onResume() {
        super.onResume()
        checkLogoutApp()

        showInitializationInfoPopup()
    }

    override fun onRestart() {
        super.onRestart()
        checkLogoutApp()

        showInitializationInfoPopup()
    }

    override fun onUserInteraction() {
        super.onUserInteraction()
        checkLogoutApp()
    }
    private fun hideSupportActionBar() {
        this.supportActionBar?.hide()
    }

    /**
     * Initializes the back pressed handling for the activity.
     * This method creates an OnBackPressedCallback that intercepts the back button press event
     * and executes the custom onBackExecute() method. It registers the callback with the
     * onBackPressedDispatcher to ensure that the custom back navigation behavior is used.
     *
     * Note: If the traditional `onBackPressed()` method is overridden in the activity,
     * it will take priority over this callback. Therefore, it's recommended to use
     * this method for custom back navigation to maintain consistency and avoid conflicts and it is necessary
     * to beginning using it from API 33 onwards
     */
    private fun initializeOnBackPressed() {
        val onBackPressedCallback = object : OnBackPressedCallback(true) {
            override fun handleOnBackPressed() {
                Log.d(TAG, "[BaseActivity] ${AppUtils.getFunctionName()} execute")
                onBackExecute()
            }
        }
        onBackPressedDispatcher.addCallback(this, onBackPressedCallback)
    }

    /**
     * Returns the layout resource ID that will be used to inflate the user interface
     * for this activity.
     *
     * This method should be implemented by subclasses to specify the layout XML
     * resource that defines the UI components for the activity. The returned layout
     * resource ID will be used by the framework to create the corresponding view hierarchy.
     *
     * Example usage:
     * ```
     * return R.layout.activity_main
     * ```
     *
     * @return The XML layout resource ID associated with this activity. This should
     *         be a valid layout resource defined in the `res/layout` directory.
     */
    @LayoutRes
    protected abstract fun getAssociatedLayoutResource(): Int

    /**
     * Initializes the view by setting up data binding and lifecycle awareness.
     *
     * This method performs the following actions:
     *
     * 1. Assigns the provided ViewDataBinding to the global binding variable, allowing
     *    access to UI elements throughout the class.
     *
     * 2. Sets the lifecycle owner of the binding to the current activity or fragment,
     *    enabling the binding to observe LiveData and respond to lifecycle changes.
     *    This is essential for using data binding in the XML layout.
     *
     * 3. Executes any pending data binding operations immediately to ensure that
     *    the UI reflects the current state of the data.
     *
     * 4. Invokes a method to populate the view with data, such as setting text
     *    properties on TextViews or other UI elements.
     *
     * 5. Calls a method to attach necessary listeners (e.g., click listeners) to
     *    views within the layout, ensuring that user interactions are properly handled.
     *
     * @param mBinding The ViewDataBinding instance for the layout, which provides
     *                 access to the views defined in the XML layout.
     */
    protected open fun initializeView(mBinding: B) {
        binding = mBinding
        binding.lifecycleOwner = this
        binding.executePendingBindings()
        populateView()
        attachViewListeners()
    }

    /**
     * Attaches view listeners to the UI elements within the layout.
     *
     * This method is intended to set up click listeners and other event listeners
     * for the views defined in the XML layout. Implementing this method allows for
     * handling user interactions, such as clicks on buttons or text inputs.
     *
     * This method should be overridden in subclasses to specify the listeners for
     * the relevant views, using the data binding instance to access the views.
     *
     * It is also the area where the `RecyclerView` should be configured.
     *
     * For example:
     * ```
     * binding.etName.setOnClickListener {
     *     // Handle the click event
     * }
     * ```
     */
    protected open fun attachViewListeners() {}

    /**
     * Provides an instance of the ViewModel associated with this activity.
     *
     * This method serves as a factory for creating or retrieving the ViewModel
     * that is associated with the activity in which it is called. It allows
     * the activity to access its specific ViewModel, which contains the
     * business logic and data for the UI.
     *
     * Example usage:
     * ```
     * return ViewModelProvider(this)[MainViewModel::class.java]
     * ```
     *
     * @return An instance of [VM], the type of ViewModel for this activity.
     */
    protected abstract fun getAssociatedViewModel(): VM

    /**
     * Initializes the ViewModel for the associated activity and binds it to the layout.
     *
     * This method takes an instance of the ViewModel and performs the necessary steps
     * to set it up with the data binding. It also retrieves any extras from the intent
     * and invokes the ViewModel's startup method to initialize its state.
     *
     * This method performs the following actions:
     *
     * 1. Assigns the provided ViewModel to the `viewModel` property.
     *
     * 2. Sets the ViewModel to the data binding to facilitate data binding operations.
     *
     * 3. Retrieves extras from the intent and passes them to the ViewModel's startup method
     *    to initialize its state.
     *
     * 4. Calls a method to attach listeners to observe changes in the ViewModel.
     *
     * @param mViewModel An instance of [VM] which represents the ViewModel
     * associated with this activity. This ViewModel will manage the UI-related data
     * and business logic.
     */
    protected open fun initializeViewModel(mViewModel: VM) {
        viewModel = mViewModel
        setViewModelToBinding(binding, mViewModel)
        mViewModel.startUpViewModel(intent.extras)

        attachViewModelListeners()
    }

    /**
     * Sets up observers for ViewModel LiveData properties.
     *
     * Observers are added for:
     *
     * 1. `destination` to handle changes in navigation destination.
     *
     * 2. `clearBackStack` to handle changes related to clearing the back stack.
     *
     * 3. `finishActivity` to handle the changes related to the end of the activity.
     *
     * 4. `isLoading` to handle changes in loading state.
     *
     * 5. `toastMessage` to handle changes in messages to be shown as toasts.
     *
     * 6. `snackBarDTO` to handle changes in simple messages to be shown as CustomSnackBar.
     *
     * 7. `alertDialogDTOInformation` to handle changes in simple information messages to be shown as CustomAlertDialog.
     *
     * This method is open and can be overridden for custom handling of additional LiveData observers if required.
     *
     * **When overriding this method, ensure that `super.attachViewModelListeners()` is called to maintain existing observers.**
     */
    protected open fun attachViewModelListeners() {
        viewModel.destination.observe(this, ::onDestinationChanged)
        viewModel.clearBackStack.observe(this, ::onClearBackStackChanged)

        viewModel.finishActivity.observe(this, ::onFinishActivityChanged)

        viewModel.isLoading.observe(this, ::onLoadingChanged)

        viewModel.toastMessage.observe(this, ::onToastMessageChanged)

        viewModel.snackBarDTO.observe(this, ::onSnackBarDTOChanged)

        viewModel.alertDialogDTOInformation.observe(this, ::onAlertDialogDTOOneButtonChanged)

        viewModel.alertDialogDTOError.observe(this, ::onAlertDialogDTOOneButtonNavigationMainChanged)
    }

    /**
     * Associates the ViewModel with the [ViewDataBinding] for the activity.
     * It is necessary to use databinding in the xml class.
     *
     * Example usage:
     * ```
     * binding.viewModel = viewModel
     * ```
     *
     * @param binding The [ViewDataBinding] object for the current view.
     * @param viewModel The [VM] object representing the ViewModel to be set on the binding.
     */
    protected abstract fun setViewModelToBinding(binding: B, viewModel: VM)
    private fun showInitializationInfoPopup() {
        if (DataHolder.initializationSnackBarDTO != null) {
            Log.d(
                TAG,
                "[BaseActivity] ${AppUtils.getFunctionName()} showSnackBar"
            )
            showSnackBar(
                dto = DataHolder.initializationSnackBarDTO!!,
                kFunction = null
            )

            DataHolder.initializationSnackBarDTO = null
        }
        if (DataHolder.initializationAlertDialogDTO != null) {
            Log.d(
                TAG,
                "[BaseActivity] ${AppUtils.getFunctionName()} showAlertDialog"
            )
            showAlertDialogOneButton(
                dto = DataHolder.initializationAlertDialogDTO!!,
                kFunctionPositive = {
                    Log.d(
                        TAG,
                        "[BaseActivity] ${AppUtils.getFunctionName()} press positive button initializationAlertDialog"
                    )
                }
            )

            DataHolder.initializationAlertDialogDTO = null
        }
    }

    /**
     * Populates the UI elements in the view, excluding those managed by [ViewDataBinding].
     *
     * This method is responsible for setting values to the views defined in the
     * layout, such as initializing EditTexts, TextViews, ImageView, or other UI components.
     * It is called during the view initialization phase to ensure that the
     * interface displays the appropriate information when the activity or fragment
     * is created.
     *
     * This method should be overridden in subclasses to specify the data to be
     * displayed in the relevant views. For example:
     * ```
     * binding.etName.text = "UserName"
     * binding.textViewAge.text = "30"
     * ```
     */
    protected open fun populateView() {}
    private fun onDestinationChanged(destination: Class<*>?) {
        Log.d(TAG, "[BaseActivity] ${AppUtils.getFunctionName()} destination: $destination")
        val extras = viewModel.extras
        Log.d(TAG, "[BaseActivity] ${AppUtils.getFunctionName()} extras: ${extras?.size()}")

        if (destination != null) {
            NavigationController.navigate(this, viewModel, clearActivityStack)
            clearActivityStack = false
        }
    }

    private fun onClearBackStackChanged(clearBackStack: Boolean) {
        clearActivityStack = clearBackStack
    }

    /**
     * This method is called when the finishActivity LiveData changes.
     * It logs the current value of finishActivity and, if it is true,
     * calls the finish() method to close the activity.
     *
     * This method can be overridden if a customized activity finish logic is needed.
     *
     * @param finishActivity A Boolean indicating whether the activity should be finished.
     */
    protected open fun onFinishActivityChanged(finishActivity: Boolean) {
        Log.d(TAG, "[BaseActivity] ${AppUtils.getFunctionName()} finishActivity: $finishActivity")
        if (finishActivity)
            finish()
    }

    private fun onLoadingChanged(isLoading: Boolean) {
        if (isLoading) {
            showShortWaitPopup()
        } else {
            stopShortWaitPopup()
        }
    }

    private fun onToastMessageChanged(message: String) {
        Log.d(TAG, "[BaseFragment] ${AppUtils.getFunctionName()} execute with message: $message")
        showToast(message, true)
    }

    private fun onSnackBarDTOChanged(dto: SnackBarDTO) {
        Log.d(TAG, "[BaseActivity] ${AppUtils.getFunctionName()} execute with dto: $dto")
        showSnackBar(
            dto,
            kFunction = {
                Log.d(TAG, "[BaseActivity] ${AppUtils.getFunctionName()} Interaction SnackBar")
            }
        )
    }

    private fun onAlertDialogDTOOneButtonChanged(dto: AlertDialogDTO) {
        Log.d(TAG, "[BaseActivity] ${AppUtils.getFunctionName()} execute with dto: $dto")
        showAlertDialogOneButton(
            dto,
            kFunctionPositive = {
                Log.d(TAG, "[BaseActivity] ${AppUtils.getFunctionName()} Accepted button")
            }
        )
    }

    private fun onAlertDialogDTOOneButtonNavigationMainChanged(dto: AlertDialogDTO) {
        Log.d(TAG, "[BaseActivity] ${AppUtils.getFunctionName()} execute with dto: $dto")
        showAlertDialogOneButton(
            dto,
            kFunctionPositive = {
                Log.d(TAG, "[BaseActivity] ${AppUtils.getFunctionName()} Accepted button")
                viewModel.extras?.clear()
                viewModel.destination.postValue(MainActivity::class.java)
            }
        )
    }

    /**
     * This method is called when the back button is pressed in this activity starting from api 33.
     * Override this method to provide custom back button behavior specific to this activity.
     * By default, this method calls the activity finish method.
     */
    open fun onBackExecute() {
        finish()
    }

    private fun checkLogoutApp() {
        if (DEBUG_AFK_TIMER_LOG) Log.i(TAG, "[BaseActivity] ${AppUtils.getFunctionName()} previouslyLoggedIn: $previouslyLoggedIn")

        val noLoginRequiredClasses = listOf(
            OnboardingActivity::class,
            RegisterStep0Activity::class,
            RegisterStep1Activity::class,
            RegisterStep2Activity::class,
            LoginActivity::class,
        )

        when {
            this is SplashActivity -> {
                if (DEBUG_AFK_TIMER_LOG) Log.i(TAG, "[BaseActivity] ${AppUtils.getFunctionName()} is SplashActivity, Do NOT continue logout checked")
                return
            }
            this::class in noLoginRequiredClasses -> {
                if (DEBUG_AFK_TIMER_LOG) Log.i(TAG, "[BaseActivity] ${AppUtils.getFunctionName()} is noLoginRequiredClasses, Do NOT continue logout checked")
                return
            }
            this is LegalTermsActivity -> {
                if (DataHolder.viewingLegalTermsFromCfg) {
                    if (!previouslyLoggedIn) {
                        Log.e(TAG, "[BaseActivity] ${AppUtils.getFunctionName()} is LegalTermsActivity and enter from the MoreFragment but previouslyLoggedIn is false")
                        throw IllegalAccessException("is LegalTermsActivity and enter from the MoreFragment but previouslyLoggedIn is false")
                    }
                    if (DEBUG_AFK_TIMER_LOG) Log.i(TAG, "[BaseActivity] ${AppUtils.getFunctionName()} is LegalTermsActivity and enter from the MoreFragment, continue logout checked")

                } else {
                    Log.i(TAG, "[BaseActivity] ${AppUtils.getFunctionName()} is LegalTermsActivity and enter from the RegisterStep2Activity, Do NOT continue logout checked")
                    return
                }
            }
            else -> {
                if (!previouslyLoggedIn) {
                    Log.e(TAG, "[BaseActivity] ${AppUtils.getFunctionName()} is LoginRequiredClasses but previouslyLoggedIn is false")
                    doLogout()
                    return
                }
                if (DEBUG_AFK_TIMER_LOG) Log.i(TAG, "[BaseActivity] ${AppUtils.getFunctionName()} is LoginRequiredClasses, continue logout checked")
            }
        }

        if (USE_AFK_TIMER) {
            checkLogoutTimerExpired()
        }
    }

    private fun checkLogoutTimerExpired() {
        if (checkIfLogoutTimerHasExpired()) {
            if (DEBUG_AFK_TIMER_LOG) {
                Log.i(TAG, "[BaseActivity] ${AppUtils.getFunctionName()} Logout Timer HAS EXPIRED")
            }
            previouslyLoggedIn = false
            IoCManager.getLogInputAdapter().log(LogLevel.DEBUG, TAG, "${AppUtils.getFunctionName()} previouslyLoggedIn: $previouslyLoggedIn")
            doLogout()
        } else {
            lastInteractionTime = System.currentTimeMillis()
            if (DEBUG_AFK_TIMER_LOG) {
                Log.i(TAG, "[BaseActivity] ${AppUtils.getFunctionName()} User interacted. Timer has NOT expired")
            }
        }
    }

    private fun checkIfLogoutTimerHasExpired(): Boolean {
        val lastInteractionTime = lastInteractionTime
        val currentTime = System.currentTimeMillis()
        val time = (currentTime - lastInteractionTime)

        val timerExpired = time > App.LOGOUT_MILISECS
        if (DEBUG_AFK_TIMER_LOG) {
            Log.w(TAG, "[BaseActivity] ${AppUtils.getFunctionName()} Raw: $time Secs: ${time / 1000} | Timer Expired == $timerExpired")
        }
        return timerExpired
    }

    /**
     * Performing idle time logout
     */
    private fun doLogout() {
        val walletKeyStoreOpened = true
        if (walletKeyStoreOpened) {
            try {
                viewModel.toastMessage.postValue(App.getStringResource(R.string.generic_time_expired))

                Log.w(TAG, "[BaseActivity] ${AppUtils.getFunctionName()} Timer expired - Autologout")
                lastInteractionTime = System.currentTimeMillis()
                viewModel.extras = null
                viewModel.stringExtra.postValue(null)
                viewModel.destination.postValue(null)
                viewModel.isLoading.postValue(false)
            } catch (e: Exception) {
                Log.e(TAG, "[BaseActivity] ${AppUtils.getFunctionName()} Exception on toastMessage captured and prevented", e)
            }
            NavigationController.logoutNavigation(this, intent.data)
        }
    }

    /**
     * This function is necessary for the screen to fit correctly when the keyboard appears
     */
    protected fun fixSoftKeyboard() {
        window.setSoftInputMode(WindowManager.LayoutParams.SOFT_INPUT_ADJUST_PAN)
    }

    @SuppressLint("SourceLockedOrientationActivity")
    private fun setOrientation() {
        try {
            requestedOrientation = ActivityInfo.SCREEN_ORIENTATION_PORTRAIT
        } catch (e: Exception) {
            Log.e(TAG, "[BaseActivity] ${AppUtils.getFunctionName()} ${e.message}", e)
        }
    }

    private fun showShortWaitPopup() {
        ShortDialog.showDialog(this)
    }

    private fun stopShortWaitPopup() {
        ShortDialog.stopDialog()
    }
    fun showToast(msg: String, isLong: Boolean) {
        val duration = if (isLong) Toast.LENGTH_LONG else Toast.LENGTH_SHORT
        Toast.makeText(applicationContext, msg, duration).show()
    }

    fun showInfoSnackBar(message: String) {
        CustomSnackBar(
            context = this,
            message = message
        ).showCustom()
    }

    fun showSnackBar(dto: SnackBarDTO, kFunction: (() -> Unit)?) {
        CustomSnackBar(this, dto).showCustom(kFunction)
    }

    fun showSnackBar(snackBar: CustomSnackBar, kFunction: (() -> Unit)?) {
        snackBar.showCustom(kFunction)
    }


    fun showAlertDialogOneButton(dto: AlertDialogDTO, kFunctionPositive: () -> Unit) {
        CustomAlertDialog(this, dto).showCustom(kFunctionPositive)
    }

    fun showAlertDialogOneButton(alertDialog: CustomAlertDialog, kFunctionPositive: () -> Unit) {
        alertDialog.showCustom(kFunctionPositive)
    }

    fun showAlertDialogTwoButton(alertDialog: CustomAlertDialog, kFunctionPositive: () -> Unit, kFunctionNegative: () -> Unit) {
        alertDialog.showCustom(kFunctionPositive, kFunctionNegative)
    }
}