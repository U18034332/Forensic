package com.nlc.forensic.repository

import com.nlc.forensic.entity.FundingIncidentReport
import com.nlc.forensic.entity.NonFundingIncidentReport
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.data.jpa.repository.Query
import org.springframework.stereotype.Repository


@Repository
interface FundingIncidentReportRepository: JpaRepository<FundingIncidentReport, Long> {
    fun findByReportNumber(reportNumber: String): FundingIncidentReport?
    fun findByAcceptance(acceptance: String): List<FundingIncidentReport>
    //fun findByAssignedToIsNullAndDeclineReasonIsEmpty(): List<FundingIncidentReport>
    @Query("SELECT n FROM FundingIncidentReport n WHERE n.assignedTo IS NULL AND n.declineReason = ''")
    fun findByAssignedToIsNullAndDeclineReasonIsEmpty(): List<FundingIncidentReport>
}