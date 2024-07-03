package com.nlc.forensic.dto

import java.util.Date

data class NonFundingCaseDetailsDTO(
    val caseStartDate: Date,
    val caseEndDate: Date? = null,
    val caseSeverity: String
)
