package com.nlc.forensic.dto

import java.sql.Date

data class IncidentReportResponseDTO(
    val id: Long = 0L,
    val reportNumber: String = "",
    var acceptance: String = "",
    var dateReported: Date? = null,
    var startDate: Date? = null,
    var channel: String = "",
    var province: String = "",
    var caseType: String = "",
    var caseSubType: String = "",
    var priority: String = "",
    var status: String = "",
    var divisionDetected: String = "",
    var levelDetected: String = "",
    var allocatedDescription: String = "",
    var declineReason: String = "",
    var assignedTo: String? = "",
    var assessmentStage: Int = 0,
)
