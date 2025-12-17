package com.inetum.eudi_dome_wallet.ui.custom

import android.annotation.SuppressLint
import android.app.Activity
import android.content.Context
import android.graphics.Color
import android.graphics.drawable.Drawable
import android.view.Gravity
import android.view.LayoutInflater
import android.view.MotionEvent
import android.view.View
import android.widget.FrameLayout
import androidx.core.content.ContextCompat
import androidx.databinding.DataBindingUtil
import androidx.fragment.app.Fragment
import com.google.android.material.snackbar.Snackbar
import com.inetum.eudi_dome_wallet.App
import com.inetum.eudi_dome_wallet.R
import com.inetum.eudi_dome_wallet.databinding.CustomSnackbarBinding

class CustomSnackBar {
    private val context: Context
    var message: String
    var alertType: AlertType = AlertType.INFO
    var gravity: Int
    var length: Int
    var title: String
    var icon: Drawable? = null
    private fun Int.dp(context: Context): Int =
        (this * context.resources.displayMetrics.density).toInt()

    enum class AlertType {
        ALERT, ERROR, SUCCESS, INFO
    }

    constructor(
        context: Context,
        message: String,
        alertType: AlertType = AlertType.INFO,
        gravity: Int = Gravity.CENTER_HORIZONTAL or Gravity.BOTTOM,
        length: Int = Snackbar.LENGTH_LONG,
        title: String = "",
        icon: Int = R.drawable.ic_information
    ) {
        this.context = context
        this.message = message
        this.alertType = alertType
        this.gravity = gravity
        this.length = length
        this.title = title
        updateIcon(icon)
    }

    constructor(context: Context, dto: SnackBarDTO) {
        this.context = context
        this.message = dto.message
        this.alertType = dto.alertType
        this.gravity = dto.gravity
        this.length = dto.length
        this.title = dto.title ?: ""
        updateIcon(dto.icon)
    }

    private fun updateIcon(icon: Int) {
        if (icon == -1)
            this.icon = when (alertType) {
                AlertType.ALERT , AlertType.ERROR -> ContextCompat.getDrawable(context, R.drawable.ic_alert_red)
                AlertType.SUCCESS -> ContextCompat.getDrawable(context, R.drawable.ic_check_green)
                AlertType.INFO -> ContextCompat.getDrawable(context, R.drawable.ic_information)
            }
        else {
            try {
                App.getDrawableResource(icon)
            } catch (e: Exception) {
                this.icon = null
            }
        }
    }

    fun show() {
        val rootView = getStableRootView(context) ?: return

        val snackbar = Snackbar.make(rootView, message, length)
        snackbar.animationMode = Snackbar.ANIMATION_MODE_SLIDE

        snackbar.show()

        snackbar.view.post {
            val params = snackbar.view.layoutParams as FrameLayout.LayoutParams
            params.gravity = Gravity.CENTER_HORIZONTAL or Gravity.BOTTOM
            params.bottomMargin = 140.dp(context)
            snackbar.view.layoutParams = params
        }
    }

    @SuppressLint("RestrictedApi")
    fun showCustom(kFunction: (() -> Unit)? = null) {

        val inflater = LayoutInflater.from(context)
        val binding: CustomSnackbarBinding =
            DataBindingUtil.inflate(inflater, R.layout.custom_snackbar, null, false)

        if (title.isNotEmpty()) {
            binding.tvSnackbarTitle.text = title
            binding.tvSnackbarTitle.visibility = View.VISIBLE
        }

        icon?.let {
            binding.ivSnackbarIcon.setImageDrawable(it)
            binding.ivSnackbarIcon.visibility = View.VISIBLE
        } ?: run {
            binding.ivSnackbarIcon.visibility = View.GONE
        }

        binding.tvSnackbarMessage.text = message

        binding.tvSnackbarMessage.setTextColor(
            when (alertType) {
                AlertType.ALERT, AlertType.ERROR -> Color.parseColor("#6b1200")
                AlertType.SUCCESS -> Color.parseColor("#155048")
                AlertType.INFO -> Color.parseColor("#000000")
            }
        )

        binding.linearLayout.background = when (alertType) {
            AlertType.ALERT -> ContextCompat.getDrawable(context, R.drawable.rounded_rectangle_alert)
            AlertType.ERROR -> ContextCompat.getDrawable(context, R.drawable.rounded_rectangle_error)
            AlertType.SUCCESS -> ContextCompat.getDrawable(context, R.drawable.rounded_rectangle_success)
            AlertType.INFO -> ContextCompat.getDrawable(context, R.drawable.rounded_rectangle_info)
        }

        val rootView = getStableRootView(context) ?: return
        val snackbar = Snackbar.make(rootView, "", length)
        snackbar.animationMode = Snackbar.ANIMATION_MODE_SLIDE

        snackbar.view.setBackgroundColor(Color.TRANSPARENT)
        (snackbar.view as Snackbar.SnackbarLayout).setPadding(0, 0, 0, 0)
        (snackbar.view as Snackbar.SnackbarLayout).addView(binding.root, 0)
        binding.imCloseButton.setOnClickListener {
            snackbar.dismiss()
            kFunction?.invoke()
        }
        var startYRaw = 0f
        snackbar.view.setOnTouchListener { v, event ->
            when (event.action) {
                MotionEvent.ACTION_DOWN -> {
                    startYRaw = event.rawY
                    true
                }
                MotionEvent.ACTION_MOVE -> {
                    if (event.rawY - startYRaw > 100) {
                        snackbar.dismiss()
                        kFunction?.invoke()
                    }
                    true
                }
                MotionEvent.ACTION_UP -> {
                    v.performClick()
                    true
                }
                else -> false
            }
        }

        snackbar.show()
        snackbar.view.post {
            val params = snackbar.view.layoutParams as FrameLayout.LayoutParams
            params.gravity = Gravity.CENTER_HORIZONTAL or Gravity.BOTTOM
            params.bottomMargin = 140.dp(context)
            snackbar.view.layoutParams = params
        }
    }

    private fun getStableRootView(context: Context): View? {
        return when (context) {
            is Activity -> context.findViewById(android.R.id.content)
            is Fragment -> context.requireActivity().findViewById(android.R.id.content)
            else -> null
        }
    }
}