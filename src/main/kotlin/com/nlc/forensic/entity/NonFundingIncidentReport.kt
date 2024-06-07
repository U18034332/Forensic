package com.nlc.forensic.entity

import jakarta.persistence.*
import java.sql.Date


@Entity
@Table(name = "NonFundingIncidentReport")
data class NonFundingIncidentReport(
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "non_funding_report_id")
    val id: Long = 0L,
    val reportNumber: String = "",
    var acceptance: String = "",
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
    var declineReason: String = "",
    @ManyToOne
    @JoinColumn(name = "assigned_user")
    var assignedTo: User? = null,
    var assessmentStage: Int = 0,

)