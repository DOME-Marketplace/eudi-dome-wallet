package com.inetum.eudi_dome_wallet.ui.custom

import android.app.AlertDialog
import android.content.Context
import android.graphics.Color
import android.graphics.drawable.ColorDrawable
import android.graphics.drawable.Drawable
import android.view.LayoutInflater
import android.view.View
import androidx.databinding.DataBindingUtil
import com.inetum.eudi_dome_wallet.App
import com.inetum.eudi_dome_wallet.R
import com.inetum.eudi_dome_wallet.databinding.CustomAlertDialogBinding

class CustomAlertDialog {
    private val context: Context
    var title: String
    var message: String
    var secondMessage: String
    var positiveButtonTitle: String
    var negativeButtonTitle: String?
    var icon: Drawable?

    constructor(
        context: Context,
        title: String,
        message: String,
        subTitle: String = "",
        positiveButtonTitle: String = "Accept",
        negativeButtonTitle: String? = null,
        icon: Drawable? = null
    ) {
        this.context = context
        this.title = title
        this.message = message
        this.secondMessage = subTitle
        this.positiveButtonTitle = positiveButtonTitle
        this.negativeButtonTitle = negativeButtonTitle
        this.icon = icon
    }

    constructor(context: Context, dto: AlertDialogDTO) {
        this.context = context
        this.title = dto.title
        this.message = dto.message
        this.secondMessage = dto.secondMessage ?: ""
        this.positiveButtonTitle = dto.positiveButtonTitle
        this.negativeButtonTitle = dto.negativeButtonTitle
        this.icon = try {
            App.getDrawableResource(dto.icon)
        } catch (e: Exception) {
            null
        }
    }

    fun showCustom(kFunctionPositive: () -> Unit, kFunctionNegative: (() -> Unit)? = null){
        val layoutInflater = LayoutInflater.from(context)
        val binding: CustomAlertDialogBinding = DataBindingUtil.inflate(layoutInflater, R.layout.custom_alert_dialog, null, false)
        binding.tvAlertTitle.text = title
        binding.tvAlertMessage.text = message

        if (secondMessage.isEmpty()) {
            binding.tvSecondContent.visibility = View.GONE
        } else {
            binding.tvSecondContent.text = secondMessage
            binding.tvSecondContent.visibility = View.VISIBLE
        }

        if (icon == null) {
            binding.ivAlertIcon.visibility = View.GONE
        } else {
            binding.ivAlertIcon.setImageDrawable(icon)
            binding.ivAlertIcon.visibility = View.VISIBLE
        }

        binding.btnAlertPositive.text = positiveButtonTitle

        if (kFunctionNegative == null || negativeButtonTitle == null) {
            binding.btnAlertNegative.visibility = View.GONE
        } else {
            binding.btnAlertNegative.text = negativeButtonTitle
            binding.btnAlertNegative.visibility = View.VISIBLE
        }
        val alertDialog = AlertDialog.Builder(context)
            .setView(binding.root)
            .create()
        alertDialog.window?.setBackgroundDrawable(ColorDrawable(Color.TRANSPARENT))
        alertDialog.setCanceledOnTouchOutside(false)
        binding.btnAlertPositive.setOnClickListener {
            kFunctionPositive.invoke()
            alertDialog.dismiss()
        }
        if (kFunctionNegative != null) {
            binding.btnAlertNegative.setOnClickListener {
                kFunctionNegative.invoke()
                alertDialog.dismiss()
            }
        }
        alertDialog.show()
    }
}