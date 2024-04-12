package com.nlc.forensic.dto

import com.nlc.forensic.entity.User

data class CaseAcceptanceDTO(
    var reportNumber: String,
    var acceptance: String,
    var allocateTo: String
)
