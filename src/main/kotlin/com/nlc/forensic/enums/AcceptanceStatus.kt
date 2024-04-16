package com.nlc.forensic.enums

enum class AcceptanceStatus(private val status: String) {
    ACCEPTED("Accept"),
    DECLINED("Declined");
    fun getValue(): String {
        return status
    }
}