package com.nlc.forensic.repository

import com.nlc.forensic.entity.NonFundingIncidentReport
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.data.jpa.repository.Query
import org.springframework.stereotype.Repository


@Repository
interface NonFundingIncidentReportRepository: JpaRepository<NonFundingIncidentReport, Long> {
    fun findByReportNumber(reportNumber: String): NonFundingIncidentReport?
    fun findByReportNumberAndAcceptance(reportNumber: String, s: String): NonFundingIncidentReport?
    @Query("SELECT n FROM NonFundingIncidentReport n WHERE n.assignedTo IS NULL AND n.declineReason = ''")
    fun findByAssignedToIsNullAndDeclineReasonIsEmpty(): List<NonFundingIncidentReport>
    @Query("SELECT n FROM NonFundingIncidentReport n WHERE n.assignedTo IS NOT NULL OR n.declineReason <> ''")
    fun findByAssignedToIsNotNullORDeclineReasonIsNotEmpty(): List<NonFundingIncidentReport>
//    @Query(value = "SELECT * FROM Non_Funding_Incident_Report WHERE assigned_user IS NULL", nativeQuery = true)
//    fun getReportsWithUnassignedUsers(): List<NonFundingIncidentReport?>?
}