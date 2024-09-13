package com.nlc.forensic.dto


data class CaseAcceptanceDTO(
    var reportNumber: String,
    var allocateTo: String="",
    var declineReason: String = ""
)
