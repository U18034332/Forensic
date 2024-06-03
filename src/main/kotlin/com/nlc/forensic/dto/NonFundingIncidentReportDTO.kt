package com.nlc.forensic.dto

import java.sql.Date


data class NonFundingIncidentReportDTO(
    var reportNumber: String = "",
    var dateReported: Date? = null,
    var startDate: Date? = null,
    var channel: String = "",
    var province: String = "",
    var caseType: String = "",
    var priority: String = "",
    var status: String = "",
    var divisionDetected: String = "",
    var levelDetected: String = "",
    var allocatedDescription: String = "",
    var assessmentStage: Int = 0
    )