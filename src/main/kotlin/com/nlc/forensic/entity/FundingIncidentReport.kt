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
    var id: Long,
    val reportNumber: String,
    var acceptance: String,
    var dateReported: String,
    var channel: String,
    var province: String,
    var caseType: String,
    var priority: String,
    var status: String,
    var detectionDivision: String,
    var detectionLevel: String,
    var assessmentStage: Int,
    var startDate: Date,
    var lastModifiedBy: LastModifiedBy
)