package com.inetum.eudi_dome_wallet.ui.base.dialogs

import android.app.Activity
import android.app.Dialog
import android.graphics.Color
import android.graphics.drawable.ColorDrawable
import android.util.Log
import android.view.Window
import android.view.WindowManager
import com.inetum.eudi_dome_wallet.App
import com.inetum.eudi_dome_wallet.R

object ShortDialog {
    private val TAG = ShortDialog::class.java.simpleName
    private var dialog: Dialog? = null
    @JvmStatic
    fun showDialog(activity: Activity?) {
        if (dialog != null && isDialogViewAttachedToWindowManager && dialog!!.isShowing) {
            Log.d("DIALOG", "dialog already running")
        } else {
            dialog = Dialog(activity!!)
            dialog!!.requestWindowFeature(Window.FEATURE_NO_TITLE)
            dialog!!.setCancelable(false)
            dialog!!.setContentView(R.layout.dialog_short_wait)
            val width = (App.context.resources.displayMetrics.widthPixels * 0.80).toInt()
            dialog!!.window!!.setBackgroundDrawable(ColorDrawable(Color.TRANSPARENT))
            dialog!!.window!!.setLayout(width, WindowManager.LayoutParams.WRAP_CONTENT)
            dialog!!.show()
        }
    }

    @JvmStatic
    fun stopDialog() {
        if (dialog != null && isDialogViewAttachedToWindowManager && dialog!!.isShowing) {
            try {
                dialog!!.dismiss()
            } catch (ignored: Exception) {
                Log.e(TAG, "" + ignored.message)
            }
        }
    }

    private val isDialogViewAttachedToWindowManager: Boolean
        get() {
            if (dialog!!.window == null) return false
            val decorView = dialog!!.window!!.decorView
            return decorView.parent != null
        }
}
