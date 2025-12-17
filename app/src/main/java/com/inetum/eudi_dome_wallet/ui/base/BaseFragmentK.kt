package com.inetum.eudi_dome_wallet.ui.base

import android.content.Intent
import android.os.Bundle
import android.util.Log
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import androidx.annotation.LayoutRes
import androidx.databinding.DataBindingUtil
import androidx.databinding.ViewDataBinding
import androidx.fragment.app.Fragment
import com.inetum.eudi_dome_wallet.App
import com.inetum.eudi_dome_wallet.common.utils.AppUtils
import com.inetum.eudi_dome_wallet.ui.base.dialogs.ShortDialog
import com.inetum.eudi_dome_wallet.ui.custom.AlertDialogDTO
import com.inetum.eudi_dome_wallet.ui.custom.CustomAlertDialog
import com.inetum.eudi_dome_wallet.ui.custom.CustomSnackBar
import com.inetum.eudi_dome_wallet.ui.custom.SnackBarDTO

abstract class BaseFragmentK<B: ViewDataBinding, VM: BaseFragmentViewModel>: Fragment() {
    protected val TAG : String = "DW:${(this::class.java.simpleName ?: "Unknown class")}"
    protected var noData: View? = null
    protected lateinit var binding: B
    protected lateinit var viewModel: VM
    /**
     * In this method you can initialize variables and make configurations that do not depend on the view.
     * You can set the ViewModel and make any necessary initial configuration.
     */
    override fun onCreate(savedInstanceState: Bundle?) {
        Log.d(TAG, "[BaseFragment] ${AppUtils.getFunctionName()} execute")
        super.onCreate(savedInstanceState)
        try {

//            viewModel = ViewModelProvider(this).get(MyViewModel::class.java)

            // Used to associated the ViewModel
            val mViewModel = getAssociatedViewModel()
            setAssociatedViewModel(mViewModel)

        } catch (e: Throwable) {
            Log.e(TAG, "[BaseFragment] ${AppUtils.getFunctionName()} *CRITICAL ERROR", e)
            throw e
        }
    }

    /**
     * This method is called to inflate the Fragment's view. Here you use DataBindingUtil to inflate the associated
     * layout and return the inflated view. It is important to return the view to be displayed.
     */
    override fun onCreateView(inflater: LayoutInflater, container: ViewGroup?, savedInstanceState: Bundle?): View {
        Log.d(TAG, "[BaseFragment] ${AppUtils.getFunctionName()} execute")
        super.onCreateView(inflater, container, savedInstanceState)
        try {

            // Used to inflate and initialize the view
            val mBinding = DataBindingUtil.inflate<B>(inflater, getAssociatedLayoutResource(), container, false)
            setViewBinding(mBinding)

            // Used to initialize the ViewModel
            if (!this::viewModel.isInitialized)
                throw RuntimeException("viewModel is not initialized")

            setViewModelToBinding(binding, viewModel)

            return binding.root // Returns the inflated view

        } catch (e: Throwable) {
            Log.e(TAG, "[BaseFragment] ${AppUtils.getFunctionName()} *CRITICAL ERROR", e)
            throw e
        }
    }

    /**
     * This method is called after the view has been created and is a good place to configure user interaction,
     * such as setting listeners. Here you can perform UI configuration that depends on the view already created,
     * such as accessing UI elements through binding.
     */
    override fun onViewCreated(view: View, savedInstanceState: Bundle?) {
        Log.d(TAG, "[BaseFragment] ${AppUtils.getFunctionName()} execute")
        super.onViewCreated(view, savedInstanceState)
        try {

            if (!this::binding.isInitialized)
                throw RuntimeException("binding is not initialized")

            initializeView(binding)


            if (!this::viewModel.isInitialized)
                throw RuntimeException("viewModel is not initialized")

            initializeViewModel(viewModel)


        } catch (e: Throwable) {
            Log.e(TAG, "[BaseFragment] ${AppUtils.getFunctionName()} *CRITICAL ERROR", e)
            throw e
        }
    }


    // endregion

    // region Initialization & Finalization ----------------------------------------------------------------------------

    // region View Initialization & Finalization -----------------------------------------------------------------------
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

    private fun setViewBinding(mBinding: B) {
        // Assigns the provided ViewDataBinding to the global binding variable for later use in the class.
        binding = mBinding

        // Sets the lifecycle owner for the binding to the current activity/fragment,
        // [lifecycleOwner] refers to the life cycle of the Fragment as a whole, it does not end after the view is destroyed
        // [viewLifecycleOwner] refers to the life cycle of the Fragment view
        // allowing the binding to observe LiveData and respond to lifecycle changes.
        // It is necessary to use databinding in the xml class.
        binding.lifecycleOwner = viewLifecycleOwner
    }
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
        // Ensures that any pending data binding operations are executed immediately.
        binding.executePendingBindings()

        // Calls a method to sets the data (such as binding.textView.text) to fill in the user interface.
        populateView()

        // Calls a method to attach listeners (such as onClick listeners) to views within the layout.
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

    // endregion

    // region ViewModel Initialization & Finalization ------------------------------------------------------------------

    private fun setAssociatedViewModel(mViewModel: VM) {
        viewModel = mViewModel
    }

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
        setViewModelToBinding(binding, mViewModel)

        mViewModel.startUpViewModel(requireActivity().intent.extras)

        attachViewModelListeners()
    }

    /**
     * Sets up observers for ViewModel LiveData properties.
     * Observers are added for:
     * - `destination` to handle changes in navigation destination.
     * - `isLoading` to handle changes in loading state.
     * - `toastMessage` to handle changes in messages to be shown as toasts.
     * - `snackBarDTO` to handle changes in simple messages to be shown as CustomSnackBar.
     * - `alertDialogDTOInformation` to handle changes in simple information messages to be shown as CustomAlertDialog.
     */
    protected open fun attachViewModelListeners() {
        viewModel.destination.observe(viewLifecycleOwner, ::onDestinationChanged)

        viewModel.isLoading.observe(viewLifecycleOwner, ::onLoadingChanged)

        viewModel.toastMessage.observe(viewLifecycleOwner, ::onToastMessageChanged)

        viewModel.snackBarDTO.observe(viewLifecycleOwner, ::onSnackBarDTOChanged)

        viewModel.alertDialogDTOInformation.observe(viewLifecycleOwner, ::onAlertDialogDTOOneButtonChanged)
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
    // endregion

    // endregion

    // region Data Management Methods ----------------------------------------------------------------------------------

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

    // endregion

    // region Control Event Handlers -----------------------------------------------------------------------------------

    // region Observers ------------------------------------------------------------------------------------------------
    private fun onDestinationChanged(destination: Class<*>?) {
        Log.d(TAG, "[BaseFragment] ${AppUtils.getFunctionName()} destination: $destination")
        val extras = viewModel.extras
        Log.d(TAG, "[BaseFragment] ${AppUtils.getFunctionName()} extras: ${extras?.size()}")

        if (destination != null) {
            val intent = Intent(App.context, viewModel.destination.value)
            viewModel.destination.postValue(null)

            extras?.let { intent.putExtras(extras) }

            intent.setFlags(Intent.FLAG_ACTIVITY_NEW_TASK)
            App.context.startActivity(intent)
        }
    }

    private fun onLoadingChanged(isLoading: Boolean) {
        if (isLoading) {
            ShortDialog.showDialog(activity)
            Log.d(TAG, "[BaseFragment] ${AppUtils.getFunctionName()} launch dialog")
        } else {
            ShortDialog.stopDialog()
            Log.d(TAG, "[BaseFragment] ${AppUtils.getFunctionName()} stop dialog")
        }
    }

    private fun onToastMessageChanged(message: String) {
        Log.d(TAG, "[BaseFragment] ${AppUtils.getFunctionName()} execute with message: $message")
        (activity as? BaseActivityK<*, *>)?.showToast(message, true)
    }

    private fun onSnackBarInfoMessageChanged(message: String) {
        Log.d(TAG, "[BaseFragment] ${AppUtils.getFunctionName()} execute with message: $message")
        (activity as? BaseActivityK<*, *>)?.showInfoSnackBar(message)
    }

    private fun onSnackBarDTOChanged(dto: SnackBarDTO) {
        Log.d(TAG, "[BaseFragment] ${AppUtils.getFunctionName()} execute with dto: $dto")

        (activity as? BaseActivityK<*, *>)?.showSnackBar(
            dto,
            kFunction = {
                Log.d(TAG, "[BaseFragment] ${AppUtils.getFunctionName()} Interaction SnackBar")
            }
        )
    }

    private fun onAlertDialogDTOOneButtonChanged(dto: AlertDialogDTO) {
        Log.d(TAG, "[BaseFragment] ${AppUtils.getFunctionName()} execute with dto: $dto")
        (activity as? BaseActivityK<*, *>)?.showAlertDialogOneButton(
            dto,
            kFunctionPositive = {
                Log.d(TAG, "[BaseFragment] ${AppUtils.getFunctionName()} Accepted button")
            }
        )
    }
    // endregion

    // region Listeners ------------------------------------------------------------------------------------------------

    // endregion

    // region Callbacks ------------------------------------------------------------------------------------------------

    // endregion

    // region Auxiliary Event Handlers Methods -------------------------------------------------------------------------

    // endregion

    // endregion

    // region Other Methods --------------------------------------------------------------------------------------------

    fun showAlertDialogOneButton(dto: AlertDialogDTO, kFunctionPositive: () -> Unit) {
        CustomAlertDialog(requireContext(), dto).showCustom(kFunctionPositive)
    }
    // endregion

}