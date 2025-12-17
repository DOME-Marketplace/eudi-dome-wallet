package com.inetum.eudi_dome_wallet.ui.base.adapters

import android.view.View
import android.widget.Button
import android.widget.ImageView
import android.widget.LinearLayout
import android.widget.TextView
import androidx.appcompat.content.res.AppCompatResources
import androidx.databinding.BindingAdapter
import com.inetum.eudi_dome_wallet.App
import com.inetum.eudi_dome_wallet.R
import com.inetum.eudi_dome_wallet.ui.base.BaseViewModel
import com.inetum.utils.toEpochDateTimeLong
import com.inetum.utils.toMillis
import java.text.SimpleDateFormat
import java.util.Date
import java.util.Locale
import java.util.TimeZone

object BindingAdapters {
    @JvmStatic
    @BindingAdapter("android:stringEpochFormatedDateAndHour")
    fun addDateAndHour(view: TextView, text: String?) {
        if (!text.isNullOrEmpty()) {
            val dateEpochLong = text.toLongOrNull() ?: text.toEpochDateTimeLong()

            val sf = SimpleDateFormat("dd-MM-yyyy HH:mm", Locale.getDefault())
            val date =
                Date(dateEpochLong.toMillis())
            view.text = sf.format(date)
        } else {
            view.setText(R.string.generic_no_date)
        }
    }

    /**
     * Changes string in format type '2025-02-14T10:37:30Z' to a string custom format of '12-02-2025'
     */
    @JvmStatic
    @BindingAdapter("android:stringFormatedDateToCustomFormatedDate")
    fun formatDate(view: TextView, stringFormatedDate: String?) {
        if (!stringFormatedDate.isNullOrEmpty()) {

            val inputFormat: SimpleDateFormat
            val dateToParseString: String
            if (stringFormatedDate.contains('.')) {
                val parts = stringFormatedDate.split('.')
                val beforeDot = parts[0]
                val afterDot = parts[1].replace("Z", "")
                val milliseconds = afterDot.take(3).padEnd(3, '0')
                dateToParseString = "$beforeDot.${milliseconds}Z"

                inputFormat = SimpleDateFormat("yyyy-MM-dd'T'HH:mm:ss.SSS'Z'", Locale.getDefault())
            } else {
                dateToParseString = stringFormatedDate
                inputFormat = SimpleDateFormat("yyyy-MM-dd'T'HH:mm:ss'Z'", Locale.getDefault())
            }
            inputFormat.timeZone =
                TimeZone.getTimeZone("UTC")
            val date: Date? = inputFormat.parse(dateToParseString)

            if (date == null) {
                view.setText(R.string.generic_no_date)
                return
            }
            val outputFormat = SimpleDateFormat("dd-MM-yyyy", Locale.getDefault())
            view.text = outputFormat.format(date)

        } else {
            view.setText(R.string.generic_no_date)
        }
    }

    @JvmStatic
    @BindingAdapter("android:onClickCredential")
    fun onClick(item: Button, viewModel: BaseViewModel) {
        item.setOnClickListener { v: View? -> viewModel.onButtonClickCallback(item.id) }
    }

    @JvmStatic
    @BindingAdapter("android:manageVisiblityForLayout_GONE")
    fun manageVisibilityForLayout_GONE(view: View, visibilityGONE: Boolean) {
        view.visibility = if (visibilityGONE) View.GONE else View.VISIBLE
    }

    @JvmStatic
    @BindingAdapter("android:imageSelection")
    fun setImageSelection(view: ImageView, step: Int) {
        when (view.id) {
            R.id.ivOnboardingButtonLeft -> {
                view.setImageDrawable(
                    AppCompatResources.getDrawable(
                        App.context,
                        if (step == 0) R.drawable.icon_button_rounded_disabled else R.drawable.icon_button_rounded_arrow_right
                    )
                )
                view.rotation = (if (step == 0) 0 else 180).toFloat()
            }

            R.id.ivOnboardingButtonRight -> view.setImageDrawable(
                AppCompatResources.getDrawable(
                    App.context,
                    if (step == 4 || step == 5) R.drawable.icon_button_rounded_ok else R.drawable.icon_button_rounded_arrow_right
                )
            )

            R.id.ivOnboardingCircle1 -> view.setImageDrawable(
                AppCompatResources.getDrawable(
                    App.context,
                    if (step == 0) R.drawable.icon_button_bullet_select else R.drawable.icon_button_bullet
                )
            )

            R.id.ivOnboardingCircle2 -> view.setImageDrawable(
                AppCompatResources.getDrawable(
                    App.context,
                    if (step == 1) R.drawable.icon_button_bullet_select else R.drawable.icon_button_bullet
                )
            )

            R.id.ivOnboardingCircle3 -> view.setImageDrawable(
                AppCompatResources.getDrawable(
                    App.context,
                    if (step == 2) R.drawable.icon_button_bullet_select else R.drawable.icon_button_bullet
                )
            )

            R.id.ivOnboardingCircle4 -> view.setImageDrawable(
                AppCompatResources.getDrawable(
                    App.context,
                    if (step == 3) R.drawable.icon_button_bullet_select else R.drawable.icon_button_bullet
                )
            )

            R.id.ivOnboardingCircle5 -> view.setImageDrawable(
                AppCompatResources.getDrawable(
                    App.context,
                    if (step == 4 || step == 5) R.drawable.icon_button_bullet_select else R.drawable.icon_button_bullet
                )
            )
        }
    }

    @JvmStatic
    @BindingAdapter("android:layout_weight")
    fun setLayoutWeight(iv: ImageView, weight: Float) {
        (iv.layoutParams as LinearLayout.LayoutParams).weight = weight
        iv.refreshDrawableState()
    }
}
