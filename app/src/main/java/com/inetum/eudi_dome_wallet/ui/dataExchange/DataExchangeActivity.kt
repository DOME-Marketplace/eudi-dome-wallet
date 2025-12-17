package com.inetum.eudi_dome_wallet.ui.dataExchange

import android.annotation.SuppressLint
import android.os.Bundle
import android.util.Log
import android.view.View
import androidx.core.view.ViewCompat
import androidx.core.view.WindowCompat
import androidx.core.view.WindowInsetsCompat
import androidx.lifecycle.ViewModelProvider
import com.google.android.material.snackbar.Snackbar
import com.inetum.eudi_dome_wallet.App
import com.inetum.eudi_dome_wallet.R
import com.inetum.eudi_dome_wallet.common.classes.LogLevel
import com.inetum.eudi_dome_wallet.common.utils.AppUtils
import com.inetum.eudi_dome_wallet.common.utils.LiveDataUtilsK.getNonNullValue
import com.inetum.eudi_dome_wallet.databinding.ActivityDataExchangeBinding
import com.inetum.eudi_dome_wallet.manager.IoCManager
import com.inetum.eudi_dome_wallet.ui.base.BaseActivityK
import com.inetum.eudi_dome_wallet.ui.custom.CustomAlertDialog
import com.inetum.eudi_dome_wallet.ui.custom.CustomSnackBar
import com.inetum.eudi_dome_wallet.ui.dataExchange.fragment.ReceivingCredentialsFragment
import com.inetum.eudi_dome_wallet.ui.dataExchange.fragment.SendRequestedPresentationFragment

class DataExchangeActivity: BaseActivityK<ActivityDataExchangeBinding, DataExchangeViewModel>() {
    val mViewModel: DataExchangeViewModel
        get() = viewModel

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        WindowCompat.setDecorFitsSystemWindows(window, false)
        setupWindowInsets()
    }

    private fun setupWindowInsets() {
        ViewCompat.setOnApplyWindowInsetsListener(binding.flContainer) { view, windowInsets ->
            val systemBars = windowInsets.getInsets(WindowInsetsCompat.Type.systemBars())
            view.setPadding(
                systemBars.left,
                systemBars.top,
                systemBars.right,
                systemBars.bottom
            )

            windowInsets
        }
    }

    override fun getAssociatedLayoutResource(): Int {
        return R.layout.activity_data_exchange
    }

    override fun getAssociatedViewModel(): DataExchangeViewModel {
        return ViewModelProvider(this)[DataExchangeViewModel::class.java]
    }

    override fun setViewModelToBinding(binding: ActivityDataExchangeBinding, viewModel: DataExchangeViewModel) {
        binding. viewModel = viewModel
    }

    override fun attachViewModelListeners() {
        super.attachViewModelListeners()

        viewModel.dataExchangeType.observe(this, ::onDataExchangeTypeChanged)
    }
    @SuppressLint("CommitTransaction")
    private fun onDataExchangeTypeChanged(dataExchangeType: DataExchangeViewModel.DATA_EXCHANGE_CASE) {
        try{
            Log.d(TAG, "${AppUtils.getFunctionName()} dataExchangeType: $dataExchangeType")

            val fragment = when (dataExchangeType) {
                DataExchangeViewModel.DATA_EXCHANGE_CASE.RECEIVING_CREDENTIALS -> {
                    ReceivingCredentialsFragment()
                }
                DataExchangeViewModel.DATA_EXCHANGE_CASE.PRESENTATION_CREDENTIALS -> {
                    SendRequestedPresentationFragment()
                }
                else -> throw IllegalStateException("Not exist Fragment")
            }

            supportFragmentManager.beginTransaction()
                .replace(R.id.flContainer, fragment)
                .commit()
        } catch (e: Exception) {
            IoCManager.getLogInputAdapter().log(
                LogLevel.DEBUG, TAG, AppUtils.getFunctionName() +
                    " Error Presentation Load Fragment: ${e.message}")
        }

    }

    fun onClickBack(view: View) {

        showExitActivityAlertDialog()
    }

    fun onInfoRegisterEvidenceClick(view: View) {

        val customSnackBar = CustomSnackBar(
            context = this,
            message = App.getStringResource(R.string.receive_cred_info_register_evidence),
            length = Snackbar.LENGTH_INDEFINITE
        )

        showSnackBar(
            snackBar = customSnackBar,
            kFunction = { Log.d(TAG, "${AppUtils.getFunctionName()} show info snackBar") }
        )
    }

    private fun showExitActivityAlertDialog() {

        val message = when (viewModel.dataExchangeType.getNonNullValue()) {
            DataExchangeViewModel.DATA_EXCHANGE_CASE.RECEIVING_CREDENTIALS -> App.getStringResource(R.string.receive_cred_quit_msg)
            DataExchangeViewModel.DATA_EXCHANGE_CASE.PRESENTATION_CREDENTIALS -> App.getStringResource(R.string.presentation_request_quit_msg)
        }

        val alertDialog = CustomAlertDialog(
            context = this,
            title = App.getStringResource(R.string.generic_quit_action_title),
            message = message,
            subTitle = "",
            positiveButtonTitle = App.getStringResource(R.string.generic_accept_button),
            negativeButtonTitle = App.getStringResource(R.string.generic_cancel_button),
            icon = App.getDrawableResource(R.drawable.ic_alert_red)
        )

        showAlertDialogTwoButton(
            alertDialog = alertDialog,
            kFunctionPositive = {
                Log.d(TAG, "${AppUtils.getFunctionName()} User wants to exit...")
                super.onBackExecute()
            },
            kFunctionNegative = {
                Log.d(TAG, "${AppUtils.getFunctionName()} User wants to continue...")
            }
        )
    }
}