package com.inetum.eudi_dome_wallet.core.controllers.uxController

import android.Manifest
import android.app.Activity
import android.content.pm.PackageManager
import android.util.Log
import androidx.activity.result.ActivityResultLauncher
import androidx.activity.result.contract.ActivityResultContracts
import androidx.appcompat.app.AppCompatActivity
import androidx.core.content.ContextCompat
import com.inetum.eudi_dome_wallet.common.utils.AppUtils
import com.inetum.eudi_dome_wallet.common.utils.Permission
import java.lang.ref.WeakReference
import java.util.concurrent.CountDownLatch

object PermissionManager {
    enum class PermissionStatus {
        NEVER_ASKED,
        GRANTED,
        DENIED,
        BLOCKED
    }

    enum class AppPermission(
        val permissionName: String,
        var status: PermissionStatus = PermissionStatus.NEVER_ASKED
    ) {
        CAMERA(Manifest.permission.CAMERA),
        READ_EXTERNAL_STORAGE(Manifest.permission.READ_EXTERNAL_STORAGE),
        WRITE_EXTERNAL_STORAGE(Manifest.permission.WRITE_EXTERNAL_STORAGE),
        ACCESS_COARSE_LOCATION(Manifest.permission.ACCESS_COARSE_LOCATION),
        BLUETOOTH(Manifest.permission.BLUETOOTH),
        READ_PHONE_NUMBERS(Manifest.permission.READ_PHONE_NUMBERS),
        READ_SMS(Manifest.permission.READ_SMS),
        READ_PHONE_STATE(Manifest.permission.READ_PHONE_STATE),
        ACCESS_FINE_LOCATION(Manifest.permission.ACCESS_FINE_LOCATION),
        BLUETOOTH_SCAN(Manifest.permission.BLUETOOTH_SCAN),
        BLUETOOTH_CONNECT(Manifest.permission.BLUETOOTH_CONNECT);

        companion object {
            fun fromPermissionName(name: String): AppPermission? {
                return entries.find { it.permissionName == name }
            }
        }
    }


    private val TAG: String = "DW:${(this::class.java.simpleName ?: "Unknown class")}"
    val PERMISSIONS = arrayOf(
        Manifest.permission.CAMERA,
        Manifest.permission.READ_EXTERNAL_STORAGE,
        Manifest.permission.WRITE_EXTERNAL_STORAGE,
        Manifest.permission.ACCESS_COARSE_LOCATION,
        Manifest.permission.BLUETOOTH,
        Manifest.permission.READ_PHONE_NUMBERS,
        Manifest.permission.READ_SMS,
        Manifest.permission.READ_PHONE_STATE,
        Manifest.permission.ACCESS_FINE_LOCATION,
        Manifest.permission.CAMERA,
        Manifest.permission.BLUETOOTH_SCAN,
        Manifest.permission.BLUETOOTH_CONNECT
    )

    private var activityRef: WeakReference<Activity>? = null

    private val permissionsList = mutableListOf<AppPermission>()

    private var requestMultiplePermissionsLauncher: ActivityResultLauncher<Array<String>>? = null
    private var lastPermissionsStatusMap: Map<String, Boolean>? = null
    private var permissionCallbackInterface: PermissionCallback? = null
    private var permissionCallbackFunction: ((List<AppPermission>) -> Unit)? = null
    private var latch: CountDownLatch? = null

    /**
     * Initializes the PermissionManager with the given Activity.
     *
     * @param activity The activity that will request permissions.
     * @throws RuntimeException if the activity is not an instance of AppCompatActivity.
     */
    fun initialize(activity: Activity) {
        if (activity is AppCompatActivity) {
            activityRef = WeakReference(activity)
            initializePermissionsLauncher(activity)
        } else {
            throw RuntimeException("This Activity is not an instance of AppCompatActivity")
        }
    }

    private fun initializePermissionsLauncher(activity: AppCompatActivity) {
        try {
            requestMultiplePermissionsLauncher = activity.registerForActivityResult(
                ActivityResultContracts.RequestMultiplePermissions(),
                ::callbackMultiplePermissionsActivityResult
            )
        } catch (e: IllegalStateException) {
            Log.e(
                TAG,
                "${AppUtils.getFunctionName()} Error adding the listener, remember it should be done in the onCreate method",
                e
            )
            throw e
        }
    }

    @JvmName("requestPermissionsWithRunnableJVM")
    fun requestPermissionsWithRunnable(
        activity: Activity,
        permissions: List<String>,
        function: (List<AppPermission>) -> Unit
    ) {
        activityRef = WeakReference(activity)

        permissionCallbackFunction = function

        permissions.forEach { permissionName ->
            addPermissionToList(permissionName)
        }
        requestMultiplePermissionsLauncher?.launch(permissions.toTypedArray())
    }

    fun checkPermissionBlockedOrNeverAsked(activity: Activity, permission: String): Boolean {
        return Permission.getPermissionStatus(
            activity,
            permission
        ) == Permission.BLOCKED_OR_NEVER_ASKED
    }

    fun checkPermission(activity: Activity, permissionName: String): Boolean {
        val granted = ContextCompat.checkSelfPermission(
            activity,
            permissionName
        ) == PackageManager.PERMISSION_GRANTED
        if (granted)
            addPermissionToList(permissionName, PermissionStatus.GRANTED)
        return granted
    }

    @JvmName("checkPermissionListJVM")
    fun checkPermissionList(activity: Activity, permissions: List<String>): Boolean {
        return permissions.all { checkPermission(activity, it) }
    }

    fun checkPermissionList(activity: Activity, permissions: List<AppPermission>): Boolean {
        return permissions.all { checkPermission(activity, it.permissionName) }
    }

    private fun callbackMultiplePermissionsActivityResult(permissions: Map<String, Boolean>) {
        permissions.forEach { (key, value) ->
            Log.d(TAG, "${AppUtils.getFunctionName()} $key = $value")
            updatePermissionList(key, value)
        }
        lastPermissionsStatusMap = permissions
        if (latch != null) {
            Log.d(TAG, "${AppUtils.getFunctionName()} latch countDown")
            latch?.countDown()
            return
        }
        permissionCallbackFunction?.invoke(permissionsList)
        permissionCallbackInterface?.onPermissionsResult(permissionsList)
    }

    private fun addPermissionToList(
        permissionName: String,
        permissionStatus: PermissionStatus = PermissionStatus.NEVER_ASKED
    ): AppPermission? {
        var permissionEnum: AppPermission? =
            permissionsList.firstOrNull { it.permissionName == permissionName }
        if (permissionEnum == null) {
            permissionEnum = AppPermission.fromPermissionName(permissionName)
            if (permissionEnum != null) {
                permissionEnum.status = permissionStatus
                permissionsList.add(permissionEnum)
                return permissionEnum
            } else {
                throw IllegalArgumentException("'$permissionName' permission is not defined in enum")
            }
        } else
            return null
    }

    private fun updatePermissionList(permissionName: String, value: Boolean) {
        val permissionEnum: AppPermission? =
            permissionsList.firstOrNull { it.permissionName == permissionName }
        if (permissionEnum != null) {
            val index = permissionsList.indexOf(permissionEnum)
            if (index >= 0) {
                val activity = activityRef?.get()
                val block = activity?.let { checkPermissionBlockedOrNeverAsked(it, permissionName) }
                    ?: throw NullPointerException("activity null")
                if (block) {
                    permissionsList[index].status = PermissionStatus.BLOCKED
                } else {
                    if (value) {
                        permissionsList[index].status = PermissionStatus.GRANTED
                    } else {
                        permissionsList[index].status = PermissionStatus.DENIED
                    }

                }
            } else {
                throw ArrayIndexOutOfBoundsException("'$permissionName' permission is not exist in permissionList")
            }
        } else
            throw NullPointerException("'$permissionName' permission is not exist in permissionList")
    }

    interface PermissionCallback {
        fun onPermissionsResult(permissions: List<AppPermission>)
    }
}