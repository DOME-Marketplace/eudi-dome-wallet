package com.inetum.eudi_dome_wallet.ui.infoKeys

import android.content.ClipData
import android.content.ClipboardManager
import android.content.Context
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.ImageView
import android.widget.TextView
import android.widget.Toast
import androidx.recyclerview.widget.RecyclerView
import com.inetum.eudi_dome_wallet.R

sealed class ListItem {
    data class Header(val title: String) : ListItem()
    data class Content(val label: String, val value: String) : ListItem()
}

class RecyclerKeysAdapter(private val context: Context, private val items: List<ListItem>) :
    RecyclerView.Adapter<RecyclerView.ViewHolder>() {

    companion object {
        private const val TYPE_HEADER = 0
        private const val TYPE_CONTENT = 1
    }

    override fun getItemViewType(position: Int): Int {
        return when (items[position]) {
            is ListItem.Header -> TYPE_HEADER
            is ListItem.Content -> TYPE_CONTENT
        }
    }

    override fun onCreateViewHolder(parent: ViewGroup, viewType: Int): RecyclerView.ViewHolder {
        return when (viewType) {
            TYPE_HEADER -> {
                val view = LayoutInflater.from(context).inflate(R.layout.item_header_keys, parent, false)
                HeaderViewHolder(view)
            }
            TYPE_CONTENT -> {
                val view = LayoutInflater.from(context).inflate(R.layout.item_body_keys, parent, false)
                ContentViewHolder(view)
            }
            else -> throw IllegalArgumentException("Invalid view type")
        }
    }

    override fun onBindViewHolder(holder: RecyclerView.ViewHolder, position: Int) {
        when (holder) {
            is HeaderViewHolder -> holder.bind(items[position] as ListItem.Header)
            is ContentViewHolder -> holder.bind(items[position] as ListItem.Content)
        }
    }

    override fun getItemCount(): Int {
        return items.size
    }

    inner class HeaderViewHolder(itemView: View) : RecyclerView.ViewHolder(itemView) {
        private val headerTextView: TextView = itemView.findViewById(R.id.tv_header_name)

        fun bind(item: ListItem.Header) {
            headerTextView.text = item.title
        }
    }

    inner class ContentViewHolder(itemView: View) : RecyclerView.ViewHolder(itemView) {
        private val labelTextView: TextView = itemView.findViewById(R.id.tv_label_name)
        private val valueTextView: TextView = itemView.findViewById(R.id.tv_key_label)
        private val copyButton: ImageView = itemView.findViewById(R.id.ib_copy_value)

        fun bind(item: ListItem.Content) {
            labelTextView.text = item.label
            valueTextView.text = item.value

            copyButton.setOnClickListener {
                copyToClipboard(item.label, item.value)
            }
        }

        private fun copyToClipboard(label: String, text: String) {
            val labelText = label.replace("\n", " ")
            val clipboard = context.getSystemService(Context.CLIPBOARD_SERVICE) as ClipboardManager
            val clip = ClipData.newPlainText(labelText, text)
            clipboard.setPrimaryClip(clip)
            if(labelText == "DID")
                Toast.makeText(context, "$labelText copied", Toast.LENGTH_SHORT).show()
            else
                Toast.makeText(context, "$labelText copied", Toast.LENGTH_SHORT).show()
        }
    }
}
