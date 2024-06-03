package com.nlc.forensic.entity

import jakarta.persistence.*
import java.sql.Date
import java.util.*


@Entity
@Table(name = "NonFundingIncidentReport")
data class NonFundingIncidentReport(
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "non_funding_report_id")
    val id: Long = 0L,
    val reportNumber: String = "",
    var acceptance: String = "",
    var declineReason: String = "",
    var channel: String,
    var province: String,
    var caseType: String,
    var priority: String,
    var status: String,
    var detectionDivision: String,
    val description: String,
    var detectionLevel: String,
    var assessmentStage: Int,
    var dateReported: Date? = null,
    var startDate: Date? = null,
)