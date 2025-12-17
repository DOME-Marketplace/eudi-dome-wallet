package com.inetum.eudi_dome_wallet.ui.home.fragments.more

import android.annotation.SuppressLint
import android.content.Intent
import android.os.Bundle
import android.text.Editable
import android.text.TextWatcher
import android.util.Log
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import androidx.lifecycle.ViewModelProvider
import androidx.lifecycle.lifecycleScope
import androidx.navigation.fragment.findNavController
import com.inetum.eudi_dome_wallet.App
import com.inetum.eudi_dome_wallet.R
import com.inetum.eudi_dome_wallet.common.utils.AppUtils
import com.inetum.eudi_dome_wallet.core.controllers.uxController.DataHolder
import com.inetum.eudi_dome_wallet.core.models.enums.UserEnums
import com.inetum.eudi_dome_wallet.core.models.enums.UserEnums.TechnologyType
import com.inetum.eudi_dome_wallet.databinding.FragmentMoreBinding
import com.inetum.eudi_dome_wallet.manager.IoCManager
import com.inetum.eudi_dome_wallet.ui.base.BaseFragmentK
import com.inetum.eudi_dome_wallet.ui.base.BaseFragmentViewModel
import com.inetum.eudi_dome_wallet.ui.base.BaseFragmentViewModel.FRAGMENT_ACTIVE
import com.inetum.eudi_dome_wallet.ui.base.BaseViewModel.Companion.lastInteractionTime
import com.inetum.eudi_dome_wallet.ui.base.BaseViewModel.Companion.previouslyLoggedIn
import com.inetum.eudi_dome_wallet.ui.base.BaseViewsUtils
import com.inetum.eudi_dome_wallet.ui.custom.CustomAlertDialog
import com.inetum.eudi_dome_wallet.ui.splash.SplashActivity
import kotlinx.coroutines.launch


open class MoreFragment : BaseFragmentK<FragmentMoreBinding, MoreViewModel>() {
    private val MINIMUM_NAME_LENGTH = 1
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
    }
    @SuppressLint("FragmentLiveDataObserve")
    override fun onCreateView(inflater: LayoutInflater, container: ViewGroup?, savedInstanceState: Bundle?): View {
        return super.onCreateView(inflater, container, savedInstanceState)
    }

    override fun onViewCreated(view: View, savedInstanceState: Bundle?) {
        super.onViewCreated(view, savedInstanceState)

        BaseFragmentViewModel.isHomeFragment = false
        BaseFragmentViewModel.fragmentActive = FRAGMENT_ACTIVE.MORE
    }

    override fun getAssociatedLayoutResource(): Int {
        return R.layout.fragment_more
    }

    override fun initializeView(mBinding: FragmentMoreBinding) {
        super.initializeView(mBinding)
    }

    override fun attachViewListeners() {
        super.attachViewListeners()

        binding.etRegisterNick.setOnClickListener(::onRegisterNickClick)
        binding.etRegisterNick.addTextChangedListener(object : TextWatcher {
            var beforeChange = ""

            override fun beforeTextChanged(charSequence: CharSequence, start: Int, count: Int, after: Int) {
                beforeChange = charSequence.toString()
            }

            override fun onTextChanged(charSequence: CharSequence, start: Int, count: Int, after: Int) {
                if (charSequence.length < MINIMUM_NAME_LENGTH) {
                    Log.d(TAG, "${AppUtils.getFunctionName()} Username is below minimum value!")
                    viewModel.setErrorChangingName(App.getStringResource(R.string.cfg_activity_cfg_section_editname_error_mininum_length))
                } else {
                    viewModel.setErrorChangingName("")
                    //                    Storage_Controller.saveUsername(etNickname.getText().toString().trim());
                    IoCManager.getInternalMemoryInputAdapter().saveUsername(binding.etRegisterNick.text.toString().trim { it <= ' ' })
                    Log.d(TAG, "${AppUtils.getFunctionName()} Saving new username --> " + binding.etRegisterNick.text.toString().trim { it <= ' ' })
                    //                    DataHolder.setUser_nickname(Storage_Controller.getUsername());
                    DataHolder.userNickname = IoCManager.getInternalMemoryInputAdapter().getUsername()

                }
            }

            override fun afterTextChanged(editable: Editable) {}
        })
        binding.tvLogout.setOnClickListener(::onClickLogout)
    }
    override fun getAssociatedViewModel(): MoreViewModel {
        return ViewModelProvider(this)[MoreViewModel::class.java]
    }

    override fun setViewModelToBinding(binding: FragmentMoreBinding, viewModel: MoreViewModel) {
        binding.viewModel = viewModel
    }

    override fun initializeViewModel(mViewModel: MoreViewModel) {
        super.initializeViewModel(mViewModel)
        viewModel.startUpViewModel(requireActivity().intent.extras)
        selectTechnologyText()
    }

    private fun selectTechnologyText() {
        try {
            val typeTechnology =
                IoCManager.getInternalMemoryInputAdapter().recoverTechnologyTypeFromStorage()
            if (typeTechnology == TechnologyType.EUDI_TYPE) {
                viewModel.selectTechnology.postValue(getString(R.string.cfg_activity_cfg_section_option_btn_eudi))
                val technologyType =
                    IoCManager.getInternalMemoryInputAdapter().recoverTechnologyTypeFromStorage()
                if (technologyType == UserEnums.TechnologyType.EUDI_TYPE) {
                    Log.d(TAG, "${AppUtils.getFunctionName()} technologyType Eudi")
                    lifecycleScope.launch {
                        try {
                            IoCManager.getEudiDidInputAdapter().initializeEudiDidAndKeys()
                        } catch (e: Exception) {
                            Log.e(
                                TAG,
                                "${(object {}.javaClass.enclosingMethod?.name ?: "Unknown function")}() ${e.message}",
                                e
                            )
                        }
                    }
                }
            }
        } catch (e: Exception) {
            Log.e(TAG, "Error: $e")
        }
    }

    override fun attachViewModelListeners() {
        super.attachViewModelListeners()
        viewModel.errorUser.observe(getViewLifecycleOwner(), ::onErrorUserChanged)

        viewModel.biometricOptionValue.observe(getViewLifecycleOwner(), ::onBiometricOptionValueChanged)

        viewModel.closeFragment.observe(viewLifecycleOwner) { shouldClose ->
            if (shouldClose) {
                closeFragment()
            }
        }
    }
    private fun onErrorUserChanged(errorUser: String) {
        binding.tilRegisterNick.error = errorUser.ifEmpty { null }

        binding.etRegisterNick.background = if (errorUser.isEmpty()) {
            if (binding.etRegisterNick.isFocused) {
                App.getDrawableResource(R.drawable.text_input_back_focused)
            } else {
                App.getDrawableResource(R.drawable.text_input_shape)
            }
        } else {
            App.getDrawableResource(R.drawable.text_input_back_error)
        }
    }

    private fun onBiometricOptionValueChanged(biometricOption: Boolean) {
        if (java.lang.Boolean.TRUE == viewModel.phoneHasBiometrics.getValue()) {
            Log.d(TAG, "Updating use of biometric --> $biometricOption")
            IoCManager.getInternalMemoryInputAdapter().setUserWantsToUseBiometricAuthentication(biometricOption)
        }
    }
    private fun onRegisterNickClick(view: View) {
        BaseViewsUtils.createFocusChangeListener(
            binding.etRegisterNick,
            binding.tilRegisterNick
        )
    }

    private fun onClickLogout(view: View) {
        CustomAlertDialog(
            requireContext(),
            App.getStringResource(R.string.more_popup_body),
            App.getStringResource(R.string.more_popup_title),
            "",
            App.getStringResource(R.string.more_popup_bnt_accept),
            App.getStringResource(R.string.more_popup_bnt_cancel),
            App.getDrawableResource(R.drawable.ic_popup_exit)
        ).showCustom(
            kFunctionPositive = {
                closeFragment()
            },
            kFunctionNegative = {
                Log.d(TAG, "${AppUtils.getFunctionName()} CANCEL Null")
            }
        )
    }
    private fun closeFragment() {
        lastInteractionTime = 0L
        previouslyLoggedIn = false

        findNavController().navigateUp()
        parentFragmentManager.beginTransaction().remove(this).commit()
        val intent = Intent(activity, SplashActivity::class.java)
        intent.setFlags(Intent.FLAG_ACTIVITY_NEW_TASK or Intent.FLAG_ACTIVITY_CLEAR_TASK)
        startActivity(intent)
    }
}