package com.inetum.eudi_dome_wallet.ui.base.viewHolders

import android.content.Context
import androidx.databinding.ViewDataBinding
import androidx.lifecycle.LifecycleCoroutineScope
import androidx.lifecycle.LifecycleOwner
import androidx.lifecycle.lifecycleScope
import androidx.recyclerview.widget.RecyclerView
import com.inetum.eudi_dome_wallet.ui.common.BaseItemViewHolder
import com.inetum.eudi_dome_wallet.ui.common.models.AssociatedViewLayout

/**
 * Abstract base class for ViewHolders used in a RecyclerView.
 *
 * This class serves as a base for ViewHolders that use data binding. It provides a mechanism
 * to bind a data item of type `T` to the view via data binding of type `B`. The `BaseViewHolder`
 * is parameterized with:
 * - `B`: The type of `ViewDataBinding` used for data binding in the ViewHolder.
 * - `T`: The type of item this ViewHolder will display, extending `BaseItemViewHolder<V>`.
 * - `V`: The type of `ViewType` that determines the layout of the item.
 *
 * @property binding The `ViewDataBinding` instance associated with this ViewHolder.
 */
abstract class BaseViewHolderK<B: ViewDataBinding, T: AssociatedViewLayout>(
    mBinding: B
) : RecyclerView.ViewHolder(mBinding.root) {
    protected val TAG : String = "DW:${(this::class.java.simpleName ?: "Unknown class")}"
    protected var binding: B = mBinding
    private var item: T? = null
    init {
        binding.lifecycleOwner?.let { binding.lifecycleOwner = getLifecycleOwner() }
    }

    /**
     * Binds the data item to the view.
     * This method is responsible for setting up the ViewModel with the provided item data,
     * ensuring that any pending data binding operations are executed, and attaching listeners
     * to the view elements.
     *
     * @param item The data item to be bound to the view. This data will be used to update the view
     * and configure any associated ViewModel or other elements within the view.
     */
    open fun bind(item: T) {

        initializeView(item)
        refreshUserInterface(item)
        initializeItem(item)
    }

    /**
     * Called when the ViewHolder is recycled by the RecyclerView.
     *
     * This function is intended to be overridden by subclasses to handle any cleanup
     * or resource management required when the ViewHolder is no longer in use.
     * It can be used to:
     *
     * - Remove or reset any listeners or bindings associated with the view to prevent
     *   memory leaks.
     * - Cancel any ongoing tasks or animations that were started for this item.
     * - Clear any specific data or states that should not persist once the ViewHolder
     *   is recycled.
     *
     * By default, this function is empty, so it can be implemented as needed in subclasses.
     */
    open fun recycled() {}

    /**
     * Initializes the view with the provided data item and prepares the UI.
     *
     * This method sets up the current item as a property within the ViewHolder and ensures
     * that all pending data binding operations are applied immediately. It then fills in
     * the user interface elements with the item’s data and attaches necessary listeners
     * to handle user interactions.
     *
     * This setup process mirrors the initial UI setup found in Activities, providing a
     * consistent approach to UI binding and listener setup within the ViewHolder.
     *
     * @param item The data item to be bound to the view and used to populate UI components.
     */
    protected open fun initializeView(item: T) {
        binding.executePendingBindings()
        populateView(item)
        attachViewListeners(item)
    }

    /**
     * Sets up listeners (such as onClick listeners) on View elements into the layout.
     * This method can be overridden by subclasses to provide specific implementations for attaching listeners.
     * By default, it does nothing.
     *
     * @param item The data item that may be used to configure the listeners.
     */
    protected open fun attachViewListeners(item: T) {}

    protected open fun initializeItem(item: T) {
        this.item = item
        binding.executePendingBindings()
        populateView(item)
        attachItemListeners(item)
    }

    /**
     * Updates the user interface to reflect the latest data.
     * This method updates the data model associated with the binding and ensures
     * that any pending data binding operations are executed immediately.
     * It does not reconfigure listeners or invalidate the entire binding to avoid removing
     * manually set listeners.
     *
     * @param item The data item that will be bound to the view and used to update the ViewModel.
     */
    protected open fun refreshUserInterface(item: T) {
        binding.executePendingBindings()

        attachItemListeners(item)
    }

    /**
     * Associates the Item with the [ViewDataBinding] for the ViewHolder.
     * It is necessary to use databinding in the xml class.
     *
     * Example usage:
     * ```
     * binding.model = item
     * ```
     *
     * @param binding The [ViewDataBinding] object for the current view.
     * @param item The [BaseItemViewHolder] object representing the equivalent ViewModel to be set on the binding.
     */
    protected open fun setItemToBinding(binding: B, item: T) {}

    /**
     * Sets up observers for Item LiveData properties.
     *
     * Example usage:
     * ```
     * item.data.observe(getLifecycleOwner(), ::onDataChanged)
     * ```
     *
     * This method is open and can be overridden for custom handling of additional LiveData observers if required.
     *
     * **When overriding this method, ensure that `super.attachViewModelListeners()` is called to maintain existing observers.**
     */
    protected open fun attachItemListeners(item: T) {}

    /**
     * Populates the view with data from the provided item.
     * This method is intended to be overridden by subclasses to manually set data into the view's components,
     * bypassing the use of DataBinding.
     *
     * Example usage:
     * ```
     * binding.textViewTitle.text = item.title
     * binding.imageViewIcon.setImageResource(item.iconResId)
     * ```
     *
     * @param item The data item that will be used to populate the view's UI elements.
     */
    protected open fun populateView(item: T) {}

    /**
     * Retrieves the `Context` associated with the root view of the `binding`.
     * This method provides access to the `Context` in which the view is currently operating.
     *
     * @return The `Context` associated with the root view in the binding.
     * @throws NullPointerException if the context associated with the root view is `null`.
     */
    protected open fun getContext(): Context {
        return binding.root.context ?: throw NullPointerException("Error binding.root.context does not exist")
    }

    /**
     * Retrieves the `LifecycleOwner` associated with the `binding.root.context`.
     * The `LifecycleOwner` is necessary for observing LiveData within the context of the View's lifecycle,
     * ensuring that UI updates are only performed when the View is in a valid state (e.g., not destroyed).
     *
     * @return The `LifecycleOwner` associated with the context of the root view in the binding.
     * @throws NullPointerException if the context does not implement `LifecycleOwner`.
     */
    protected open fun getLifecycleOwner(): LifecycleOwner {
        return binding.root.context as? LifecycleOwner ?: throw NullPointerException("Error binding.root.context does not contain LifecycleOwner")
    }

    /**
     * Retrieves the `LifecycleCoroutineScope` associated with the `LifecycleOwner` of the binding's context.
     * This scope is used to launch coroutines that are tied to the lifecycle of the ViewHolder's context.
     *
     * Example usage:
     * ```
     * getLifecycleScope().launch(Dispatchers.Main) {
     *
     * }
     * ```
     *
     * @return The `LifecycleCoroutineScope` associated with the context's `LifecycleOwner`.
     */
    protected open fun getLifecycleScope(): LifecycleCoroutineScope {
        return binding.lifecycleOwner?.lifecycleScope ?: getLifecycleOwner().lifecycleScope
    }
}