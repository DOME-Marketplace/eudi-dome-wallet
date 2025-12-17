package com.inetum.eudi_dome_wallet.common.utils

import androidx.lifecycle.LiveData
import androidx.lifecycle.MutableLiveData

object LiveDataUtilsK {

    /**
     * Adds an item to the list contained in MutableLiveData.
     * Retrieves the current list or initializes with an empty list if the value is null.
     * Adds the new item to the list and updates the MutableLiveData with the modified list.
     *
     * @param item the item to be added to the list
     */
    fun <T> MutableLiveData<List<T>>.addItem(item: T) {
        val currentList = this.value.orEmpty().toMutableList()
        currentList.add(item)
        this.value = currentList
    }

    /**
     * Removes an item from the list contained in MutableLiveData.
     * Retrieves the current list or initializes with an empty list if the value is null.
     * Removes the specified item from the list and updates the MutableLiveData with the modified list.
     *
     * @param item the item to be removed from the list
     */
    fun <T> MutableLiveData<List<T>>.removeItem(item: T) {
        val currentList = this.value.orEmpty().toMutableList()
        currentList.remove(item)
        this.value = currentList
    }

    /**
     * Extension function to safely get the value from a LiveData.
     * If the value is null, it throws an [IllegalStateException].
     *
     * @throws IllegalStateException if the LiveData value is null.
     */
    fun <T> LiveData<T>.getNonNullValue(): T {
        return value ?: throw IllegalStateException("${this::class.java.simpleName} value is null")
    }
}