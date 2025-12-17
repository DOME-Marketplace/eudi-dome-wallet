package com.inetum.eudi_dome_wallet.ui.base

import android.text.TextUtils
import android.view.View
import android.view.View.OnFocusChangeListener
import android.widget.EditText
import com.google.android.material.textfield.TextInputLayout
import com.inetum.eudi_dome_wallet.App
import com.inetum.eudi_dome_wallet.R

object BaseViewsUtils {

    /**
     * Creates an `OnFocusChangeListener` for an `EditText` and a `TextInputLayout` to handle focus changes.
     *
     * @param et The `EditText` to update based on focus changes.
     * @param til The `TextInputLayout` associated with the `EditText`.
     * @return An `OnFocusChangeListener` that updates the background drawable of the `EditText`
     * and manages helper text visibility based on the focus state and error conditions.
     */
    fun createFocusChangeListener(et: EditText, til: TextInputLayout): OnFocusChangeListener {
        return OnFocusChangeListener { _: View, hasFocus: Boolean ->
            val _tilIdName = getTilIdName(til)
            if (hasFocus) {
                showHelperTextWhenTxtInputIsFocused(til, _tilIdName)

                et.background = if (!til.error.isNullOrEmpty())
                    App.getDrawableResource(R.drawable.text_input_back_error)
                else
                    App.getDrawableResource(R.drawable.text_input_back_focused)
            } else {
                if (!til.error.isNullOrEmpty()) {
                    et.background = App.getDrawableResource(R.drawable.text_input_back_error)
                } else {
                    hideHelperTextWhenTxtInputIsUnfocused(til, _tilIdName)

                    et.background = if (!et.text.isNullOrEmpty())
                        App.getDrawableResource(R.drawable.text_input_filled)
                    else
                        App.getDrawableResource(R.drawable.text_input_shape)
                }
            }
        }
    }

    private fun hideHelperTextWhenTxtInputIsUnfocused(til: TextInputLayout, _tilIdName: String) {
        if (til_registerPwdCheck(til, _tilIdName) || til_backupPwdCheck(til, _tilIdName)) {
            til.helperText = null
            return
        }

        if (til_nicknameCheck(til, _tilIdName)) {
            til.helperText = null
        }
    }

    private fun showHelperTextWhenTxtInputIsFocused(til: TextInputLayout, _tilIdName: String) {
        if (til_registerPwdCheck(til, _tilIdName) || til_backupPwdCheck(til, _tilIdName)) {
            til.helperText = App.getStringResource(R.string.register_pwd_composition)
            return
        }

        if (til_nicknameCheck(til, _tilIdName)) {
            til.helperText = App.getStringResource(R.string.register_form_nick_maxlength)
        }
    }

    private fun getTilIdName(til: TextInputLayout?): String {
        var _til_fullTxtID = ""
        var _tilID = ""
        if (til != null) {
            _til_fullTxtID = til.resources.getResourceName(til.id)
            _tilID = _til_fullTxtID.substring(_til_fullTxtID.lastIndexOf("/") + 1)
        }
        return _tilID
    }

    /** Comprueba si tiene el foco y si es el primer text view del registro (password) para mostrar
     * el helper text cuando se haga focus  */
    private fun til_registerPwdCheck(til: TextInputLayout?, _tilID: String): Boolean {
        return til != null && til.error == null && !TextUtils.isEmpty(_tilID) && _tilID == "til_RegisterPwd"
    }

    /** Comprueba si tiene el foco y si es el primer text view del registro (nickname) para mostrar
     * el helper text cuando se haga focus  */
    private fun til_nicknameCheck(til: TextInputLayout?, _tilID: String): Boolean {
        return til != null && til.error == null && !TextUtils.isEmpty(_tilID) && _tilID == "til_RegisterNick"
    }

    private fun til_backupPwdCheck(til: TextInputLayout?, _tilID: String): Boolean {
        return til != null && til.error == null && !TextUtils.isEmpty(_tilID) && _tilID == "til_BackupPwd"
    }
}