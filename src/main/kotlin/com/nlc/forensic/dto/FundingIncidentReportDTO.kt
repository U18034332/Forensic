package com.nlc.forensic.dto

import java.util.Date

data class FundingIncidentReportDTO(
    var startDate: Date? = null,
    var dateReported: Date? = null,
    var projectNumber: String = "",
    var province: String = "",
    var caseType: String = "",
    var channel: String = "",
    var priority: String = "",
    var status: String = "",
    var organisation: String = "",
    var sourceDetection: String = "",
    var sector: String = "",
    var levelDetected: String = "",
    var allocatedDescription: String = "",
    var divisionDetected: String = "",
    var assessmentStage: Int = 0
)
