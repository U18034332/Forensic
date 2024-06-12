package com.nlc.forensic.repository

import com.nlc.forensic.entity.NonFundingIncidentReport
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository


@Repository
interface NonFundingIncidentReportRepository: JpaRepository<NonFundingIncidentReport, Long> {
    fun findByReportNumber(reportNumber: String): NonFundingIncidentReport?
    fun findByReportNumberAndAcceptance(reportNumber: String, s: String): NonFundingIncidentReport?
}