package com.inetum.eudi_dome_wallet.ui.register

import android.os.Bundle
import android.view.View
import androidx.lifecycle.ViewModelProvider
import com.inetum.eudi_dome_wallet.R
import com.inetum.eudi_dome_wallet.databinding.ActivityRegisterStep0Binding
import com.inetum.eudi_dome_wallet.ui.base.BaseActivityK

class RegisterStep0Activity: BaseActivityK<ActivityRegisterStep0Binding, RegisterStep0ViewModel>() {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        viewModel.destination.postValue(RegisterStep1Activity::class.java)
    }

    override fun getAssociatedLayoutResource(): Int {
        return R.layout.activity_register_step_0
    }

    override fun getAssociatedViewModel(): RegisterStep0ViewModel {
        return ViewModelProvider(this)[RegisterStep0ViewModel::class.java]
    }

    override fun setViewModelToBinding(binding: ActivityRegisterStep0Binding, viewModel: RegisterStep0ViewModel) {
        binding.viewModel = viewModel
    }

    fun onClickRegister(view: View) {
        viewModel.destination.postValue(RegisterStep1Activity::class.java)

    }
}