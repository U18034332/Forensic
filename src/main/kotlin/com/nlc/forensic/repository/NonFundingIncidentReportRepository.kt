package com.nlc.forensic.repository

import com.nlc.forensic.entity.NonFundingIncidentReport
import org.springframework.data.jpa.repository.JpaRepository

interface NonFundingIncidentReportRepository: JpaRepository<NonFundingIncidentReport, Long> {
    fun findByReportNumber(reportNumber: String): NonFundingIncidentReport?
}