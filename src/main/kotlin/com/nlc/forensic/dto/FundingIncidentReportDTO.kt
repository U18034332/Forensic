package com.nlc.forensic.dto

import java.util.Date

data class FundingIncidentReportDTO(
    val startDate: Date,
    val dateReported: Date,
    val projectNumber: String,
    var province: String,
    var caseType: String,
    var channel: String,
    var priority: String,
    var status: String,
    var organisation: String,
    var detectionSource: String,
    var description: String,
    var sector: String,
    var detectionLevel: String,
    var detectionDivision: String,
    var assessmentStage: Int
)
