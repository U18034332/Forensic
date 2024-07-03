package com.nlc.forensic.repository

import com.nlc.forensic.entity.FundingIncidentReport
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository


@Repository
interface FundingIncidentReportRepository: JpaRepository<FundingIncidentReport, Long> {
    fun findByReportNumber(reportNumber: String): FundingIncidentReport?
    fun findByAcceptance(acceptance: String): List<FundingIncidentReport>
}