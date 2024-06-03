package com.nlc.forensic.service

import com.nlc.forensic.dto.NonFundingIncidentReportDTO
import com.nlc.forensic.entity.NonFundingIncidentReport
import com.nlc.forensic.repository.NonFundingIncidentReportRepository
import org.springframework.stereotype.Service


@Service

class NonFundingIncidentReportService(
    private val nonFundingIncidentReportRepository: NonFundingIncidentReportRepository
) {
    fun createIncidentReport(report: NonFundingIncidentReportDTO)
    : NonFundingIncidentReport {
        val newReport: NonFundingIncidentReport = NonFundingIncidentReport(
            reportNumber = report.reportNumber
        )
        nonFundingIncidentReportRepository.save(newReport)
        return newReport
    }
}