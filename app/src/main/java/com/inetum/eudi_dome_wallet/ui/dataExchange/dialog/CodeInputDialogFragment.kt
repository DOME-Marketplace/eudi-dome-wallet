package com.inetum.eudi_dome_wallet.ui.dataExchange.dialog

import android.os.Bundle
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import androidx.fragment.app.DialogFragment
import androidx.fragment.app.Fragment
import com.inetum.eudi_dome_wallet.databinding.FragmentCodeInputDialogBinding

/**
 * A simple [Fragment] subclass.
 * Use the [CodeInputDialogFragment.newInstance] factory method to
 * create an instance of this fragment.
 */
class CodeInputDialogFragment : DialogFragment() {
    private var _binding: FragmentCodeInputDialogBinding? = null
    private val binding get() = _binding!!

    private var onCodeEnteredListener: ((String) -> Unit)? = null

    fun setOnCodeEnteredListener(listener: (String) -> Unit) {
        onCodeEnteredListener = listener
    }

    override fun onCreateView(
        inflater: LayoutInflater, container: ViewGroup?,
        savedInstanceState: Bundle?
    ): View {
        isCancelable = false
        _binding = FragmentCodeInputDialogBinding.inflate(inflater, container, false)
        return binding.root
    }

    override fun onDestroyView() {
        super.onDestroyView()
        _binding = null
    }

    override fun onViewCreated(view: View, savedInstanceState: Bundle?) {
        super.onViewCreated(view, savedInstanceState)

        binding.btnConfirm.setOnClickListener {
            val code = binding.etInputCode.text.toString().trim()
            if (code.isNotEmpty()) {
                onCodeEnteredListener?.invoke(code)
                dismiss()
            } else {
                binding.tlInputCode.error = "Insert the code"
            }

        }
    }

    companion object {
        @JvmStatic
        fun newInstance(): CodeInputDialogFragment = CodeInputDialogFragment()
    }
}