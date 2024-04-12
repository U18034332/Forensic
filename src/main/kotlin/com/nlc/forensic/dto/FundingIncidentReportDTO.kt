package com.nlc.forensic.dto

import java.util.Date

data class FundingIncidentReportDTO(
    val startDate: Date,
    val dateReported: Date,
    val projectNumber: String,
    val province: String,
    val caseType: String,
    val channel: String,
    val priority: String,
    val status: String,
    val organisation: String,
    val sourceDetection: String,
    val sector: String,
    val levelDetected: String,
    val allocatedDescription: String,
    val divisionDetected: String,
    val assessmentStage: Int
)
