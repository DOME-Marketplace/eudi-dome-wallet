package com.inetum.eudi_dome_wallet.ui.selectTechnology.adapter

import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.RadioButton
import android.widget.TextView
import androidx.recyclerview.widget.RecyclerView
import com.inetum.eudi_dome_wallet.R

class RadioButtonAdapter(
    private val items: List<Item>,
    private val listener: (Item) -> Unit
) : RecyclerView.Adapter<RadioButtonAdapter.RadioButtonViewHolder>() {

    private var selectedPosition: Int = RecyclerView.NO_POSITION

    init {
        selectedPosition = items.indexOfFirst { it.isSelected }
    }

    override fun onCreateViewHolder(parent: ViewGroup, viewType: Int): RadioButtonViewHolder {
        val view = LayoutInflater.from(parent.context).inflate(R.layout.item_radio_button, parent, false)
        return RadioButtonViewHolder(view)
    }

    override fun onBindViewHolder(holder: RadioButtonViewHolder, position: Int) {
        val item = items[position]
        holder.bind(item)

        holder.radioButton.isChecked = position == selectedPosition

        holder.radioButton.setOnClickListener {
            updateSelectedItem(position)
            listener(item)
        }

        holder.itemView.setOnClickListener {
            updateSelectedItem(position)
            listener(item)
        }
    }

    override fun getItemCount(): Int = items.size

    private fun updateSelectedItem(position: Int) {
        if (selectedPosition != position) {
            if (selectedPosition != RecyclerView.NO_POSITION) {
                items[selectedPosition].isSelected = false
                notifyItemChanged(selectedPosition)
            }
            items[position].isSelected = true
            notifyItemChanged(position)
            selectedPosition = position
        }
    }

    class RadioButtonViewHolder(itemView: View) : RecyclerView.ViewHolder(itemView) {
        val radioButton: RadioButton = itemView.findViewById(R.id.rb_item)
        val textView: TextView = itemView.findViewById(R.id.tv_item_text)

        fun bind(item: Item) {
            textView.text = item.name
        }
    }
}

data class Item(
    val id: Int,
    val name: String,
    var isSelected: Boolean = false
)