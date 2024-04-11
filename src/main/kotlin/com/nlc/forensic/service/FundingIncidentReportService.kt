package com.nlc.forensic.service

import com.nlc.forensic.dto.FundingIncidentReportDTO
import com.nlc.forensic.entity.FundingIncidentReport
import com.nlc.forensic.repository.FundingIncidentReportRepository
import org.springframework.stereotype.Service


@Service
class FundingIncidentReportService(
    private val fundingIncidentReportRepository: FundingIncidentReportRepository
) {
    fun createFundingIncidentReport(fundingIncidentReportDTO: FundingIncidentReportDTO): FundingIncidentReport {
        val newReport = FundingIncidentReport (
            startDate = fundingIncidentReportDTO.startDate,
            dateReported = fundingIncidentReportDTO.dateReported,
            projectNumber = fundingIncidentReportDTO.projectNumber,
            province = fundingIncidentReportDTO.province,
            caseType = fundingIncidentReportDTO.caseType,
            channel = fundingIncidentReportDTO.channel,
            priority = fundingIncidentReportDTO.priority,
            status = fundingIncidentReportDTO.status,
            organisation = fundingIncidentReportDTO.organisation,
            detectionDivision = fundingIncidentReportDTO.detectionSource,
            description = fundingIncidentReportDTO.description,
            detectionLevel = fundingIncidentReportDTO.detectionLevel,
            sector = fundingIncidentReportDTO.sector,
            assessmentStage = fundingIncidentReportDTO.assessmentStage

        )
        fundingIncidentReportRepository.save(newReport)

        return newReport
    }

    fun getAllFundingReports(): List<FundingIncidentReport> {
        return fundingIncidentReportRepository.findAll()
    }

}