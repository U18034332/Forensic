package com.nlc.forensic.repository

import com.nlc.forensic.entity.FundingIncidentReport
import org.springframework.data.jpa.repository.JpaRepository

interface FundingIncidentReportRepository: JpaRepository<FundingIncidentReport, Long> {
}