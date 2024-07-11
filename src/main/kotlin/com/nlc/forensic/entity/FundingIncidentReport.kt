package com.nlc.forensic.entity

import jakarta.persistence.*
import org.springframework.data.annotation.LastModifiedBy
import java.util.Date


@Entity
@Table(name="fundingIncidentReports")
data class FundingIncidentReport(
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "funding_report_id")
    var id: Long = 0L,
    val reportNumber: String = "",
    val projectNumber: String,
    var acceptance: String = "",
    @ManyToOne
    @JoinColumn(name = "assigned_user")
    var assignedTo: User? = null,
    var declineReason: String = "",
    var dateReported: Date? = null,
    var channel: String = "",
    var province: String = "",
    var caseType: String = "",
    var caseSubType: String = "",
    var priority: String = "",
    var status: String = "",
    var organisation: String = "",
    var sector: String = "",
    var detectionDivision: String = "",
    val description: String = "",
    var detectionLevel: String = "",
    var assessmentStage: Int = 0,
    var startDate: Date? = null,
)