package com.inetum.eudi_dome_wallet.ui.home

import android.app.Activity
import android.content.Intent
import android.net.Uri
import android.os.Bundle
import android.provider.Settings
import android.util.Log
import android.view.Gravity
import android.view.View
import androidx.activity.result.ActivityResult
import androidx.activity.result.ActivityResultLauncher
import androidx.activity.result.contract.ActivityResultContracts
import androidx.coordinatorlayout.widget.CoordinatorLayout
import androidx.core.app.ActivityCompat
import androidx.core.net.toUri
import androidx.core.view.ViewCompat
import androidx.core.view.WindowCompat
import androidx.core.view.WindowInsetsCompat
import androidx.core.view.get
import androidx.core.view.updatePadding
import androidx.lifecycle.ViewModelProvider
import androidx.lifecycle.lifecycleScope
import androidx.navigation.Navigation.findNavController
import androidx.navigation.ui.AppBarConfiguration
import androidx.navigation.ui.NavigationUI.setupActionBarWithNavController
import androidx.navigation.ui.NavigationUI.setupWithNavController
import com.google.android.material.button.MaterialButton
import com.inetum.eudi_dome_wallet.App
import com.inetum.eudi_dome_wallet.BuildConfig
import com.inetum.eudi_dome_wallet.R
import com.inetum.eudi_dome_wallet.common.classes.LogLevel
import com.inetum.eudi_dome_wallet.common.constants.IntentKeys
import com.inetum.eudi_dome_wallet.common.utils.AppUtils
import com.inetum.eudi_dome_wallet.common.utils.UriUtilsK.getAllQueryParameters
import com.inetum.eudi_dome_wallet.core.controllers.uxController.PermissionManager
import com.inetum.eudi_dome_wallet.core.models.eudi.presentations.VerificationOfferEudi
import com.inetum.eudi_dome_wallet.databinding.ActivityHomeBinding
import com.inetum.eudi_dome_wallet.manager.IoCManager
import com.inetum.eudi_dome_wallet.ui.base.BaseActivityK
import com.inetum.eudi_dome_wallet.ui.base.BaseFragmentViewModel
import com.inetum.eudi_dome_wallet.ui.custom.CustomAlertDialog
import com.inetum.eudi_dome_wallet.ui.dataExchange.DataExchangeActivity
import com.inetum.eudi_dome_wallet.ui.qrcapture.CaptureActivityPortrait
import com.inetum.utils.getValueAs
import com.inetum.utils.toJsonString
import kotlinx.coroutines.launch

class MainActivity : BaseActivityK<ActivityHomeBinding, MainViewModel>() {
    private val TEXT_IDENTIFIER_EUDI_CREDENTIAL = "credential_offer_uri"
    private val TEXT_IDENTIFIER_EUDI_PRESENTATION = "openid4vp"
    private lateinit var qrResultLauncher: ActivityResultLauncher<Intent>

    override fun onCreate(savedInstanceState: Bundle?) {
        Log.d(TAG, "${AppUtils.getFunctionName()} execute")
        super.onCreate(savedInstanceState)
        WindowCompat.setDecorFitsSystemWindows(window, false)

        initializeNavigationBar()
        PermissionManager.initialize(this)
    }

    override fun onResume() {
        Log.d(TAG, "${AppUtils.getFunctionName()} execute")
        super.onResume()
    }

    override fun getAssociatedLayoutResource(): Int {
        return R.layout.activity_home
    }

    override fun attachViewListeners() {
        super.attachViewListeners()

        qrResultLauncher = this.registerForActivityResult(
            ActivityResultContracts.StartActivityForResult(), ::onQrResult
        )
    }

    override fun getAssociatedViewModel(): MainViewModel {
        return ViewModelProvider(this)[MainViewModel::class.java]
    }

    override fun attachViewModelListeners() {
        super.attachViewModelListeners()

    }

    override fun setViewModelToBinding(binding: ActivityHomeBinding, viewModel: MainViewModel) {
        binding.viewModel = viewModel
    }

    private fun initializeNavigationBar() {
        val navView = binding.bottomNavigationView
        navView.background = null
        navView.itemIconTintList = null
        navView.menu[2].setEnabled(false)

        // Apply insets to the container
        ViewCompat.setOnApplyWindowInsetsListener(binding.container) { _, insets ->
            val navBarInsets = insets.getInsets(WindowInsetsCompat.Type.navigationBars())

            // Apply bottom padding to BottomAppBar
            binding.bottomAppBar.updatePadding(bottom = navBarInsets.bottom)

            WindowInsetsCompat.CONSUMED
        }

        val appBarConfiguration: AppBarConfiguration = AppBarConfiguration.Builder(
            R.id.navigation_home,
            R.id.navigation_profile,
            R.id.navigation_logs,
            R.id.navigation_more
        ).build()

        val navController = findNavController(this, R.id.frNavHostFragment)
        setupActionBarWithNavController(this, navController, appBarConfiguration)
        setupWithNavController(navView, navController)
    }


    override fun onBackExecute() {
        if (BaseFragmentViewModel.isHomeFragment) {
            Log.d(
                TAG,
                "${AppUtils.getFunctionName()} BACK button pressed. User is in 'HOME FRAGMENT'. Confirmation needed ..."
            )
            startPopupExitApp()

        }
    }

    fun onScanQrClick(view: View) {
        launchQR()
    }

    private fun launchQR() {
        val permissions = listOf(
            PermissionManager.PERMISSIONS[0]
        )

        val blo = PermissionManager.checkPermissionBlockedOrNeverAsked(this, permissions.first())
        val shouldShowRationale =
            ActivityCompat.shouldShowRequestPermissionRationale(this, permissions.first())
        Log.d(
            TAG,
            "${AppUtils.getFunctionName()} bloqueado: $blo; shouldShowRationale: $shouldShowRationale"
        )


        if (PermissionManager.checkPermissionList(this, permissions)) {
            Log.d(TAG, "${AppUtils.getFunctionName()} == Starting scan QR ==")

            /**
             * The launch flow continues in:
             * @see onQrResult
             */
            val intent = Intent(this, CaptureActivityPortrait::class.java)
            qrResultLauncher.launch(intent)

        } else {
            PermissionManager.requestPermissionsWithRunnable(
                this, permissions, ::callbackMultiplePermissionsActivityResult
            )
        }
    }

    private fun callbackMultiplePermissionsActivityResult(permissions: List<PermissionManager.AppPermission>) {
        Log.d(TAG, "${AppUtils.getFunctionName()} execute")
        val someBlocked =
            permissions.any { it.status == PermissionManager.PermissionStatus.BLOCKED }

        if (someBlocked) {
            showPermissionDeniedDialog()
            return
        }

        if (PermissionManager.checkPermissionList(this, permissions)) {
            launchQR()
        }
    }

    private fun onQrResult(result: ActivityResult) {
        Log.d(TAG, "${AppUtils.getFunctionName()} execute: ${result}")
        if (result.resultCode == Activity.RESULT_OK) {
            val intent = result.data
            // Maneja el resultado del escaneo
            val qrResult = intent?.getStringExtra("SCAN_RESULT")
            if (qrResult != null) {
                // Procesa el resultado del código QR aquí
                handleScanQrCodeResult(qrResult)
            } else {
                Log.e(TAG, "${AppUtils.getFunctionName()} content QR null")
            }

        } else {
            // El escaneo fue cancelado
            showInfoSnackBar(App.getStringResource(R.string.qr_cancelled))
        }
    }
    private fun handleScanQrCodeResult(qrResult: String) {

        val isEudiQrCredential = qrResult.contains(TEXT_IDENTIFIER_EUDI_CREDENTIAL)
        if (isEudiQrCredential) {
            initializeEudiCredentialFlow(qrResult)
            return
        }

        val isEudiQrPresentation = qrResult.contains(TEXT_IDENTIFIER_EUDI_PRESENTATION)
        if (isEudiQrPresentation) {
            initializeEudiPresentationFlow(qrResult)
            return
        }
    }

    private fun initializeEudiCredentialFlow(result: String) {
        lifecycleScope.launch {
            try {
                val uri = result.toUri()

                val params = uri.getAllQueryParameters()

                val credentialOfferUri = params.getValueAs<String>("credential_offer_uri")

                IoCManager.getLogInputAdapter().log(
                    LogLevel.DEBUG,
                    TAG,
                    AppUtils.getFunctionName() + " credentialOfferUri: ${
                        credentialOfferUri.toJsonString(true)
                    }"
                )
                viewModel.startFlowCredentialOfferEudi(credentialOfferUri)


            } catch (e: Exception) {
                Log.e(TAG, "${AppUtils.getFunctionName()} error parsing eudi credential", e)
                showInfoSnackBar(App.getStringResource(R.string.generic_error))
            }
        }
    }

    private fun initializeEudiPresentationFlow(result: String) {
        try {

            val uri = result.toUri()

            val params = uri.getAllQueryParameters()

            val requestUri = params.getValueAs<String>("request_uri")
            val verificationOfferEudi = VerificationOfferEudi(
                verificationEndpoint = requestUri
            )
            viewModel.addToExtraBundle(IntentKeys.Eudi.PRESENTATION_REQUEST, verificationOfferEudi)
            viewModel.destination.postValue(DataExchangeActivity::class.java)
        } catch (e: Exception) {
            Log.e(TAG, "${AppUtils.getFunctionName()} error parsing eudi presentation", e)
            showInfoSnackBar(App.getStringResource(R.string.generic_error))
        }
    }

    // endregion

    // endregion

    private fun showPermissionDeniedDialog() {

        val alertDialog = CustomAlertDialog(
            context = this,
            title = App.getStringResource(R.string.popup_permission_camera_title),
            message = App.getStringResource(R.string.popup_permission_camera_subtitle),
            subTitle = "",
            positiveButtonTitle = App.getStringResource(R.string.popup_permission_camera_button),
            negativeButtonTitle = App.getStringResource(R.string.popup_permission_camera_cancel),
            icon = App.getDrawableResource(R.drawable.ic_information)
        )

        showAlertDialogTwoButton(alertDialog = alertDialog, kFunctionPositive = {
            Log.d(TAG, "${AppUtils.getFunctionName()} User press POSITIVE button")
            val intent = Intent(Settings.ACTION_APPLICATION_DETAILS_SETTINGS)
            intent.data = Uri.parse("package:${packageName}")
            startActivity(intent)
        }, kFunctionNegative = {
            Log.d(TAG, "${AppUtils.getFunctionName()} User press NEGATIVE button")
        })
    }

    private fun startPopupExitApp() {

        val alertDialog = CustomAlertDialog(
            context = this,
            title = App.getStringResource(R.string.more_popup_title),
            message = App.getStringResource(R.string.more_popup_body),
            subTitle = "",
            positiveButtonTitle = App.getStringResource(R.string.more_popup_bnt_accept),
            negativeButtonTitle = App.getStringResource(R.string.more_popup_bnt_cancel),
            icon = App.getDrawableResource(R.drawable.ic_popup_exit)
        )

        showAlertDialogTwoButton(alertDialog = alertDialog, kFunctionPositive = {
            Log.d(TAG, "${AppUtils.getFunctionName()} User press POSITIVE button")
            super.onBackExecute()
        }, kFunctionNegative = {
            Log.d(TAG, "${AppUtils.getFunctionName()} User press NEGATIVE button")
        })
    }
}