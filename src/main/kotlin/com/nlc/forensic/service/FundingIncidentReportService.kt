package com.nlc.forensic.service

import com.nlc.forensic.constants.ResponseConstant
import com.nlc.forensic.dto.CaseAcceptanceDTO
import com.nlc.forensic.dto.FundingIncidentReportDTO
import com.nlc.forensic.entity.FundingIncidentReport
import com.nlc.forensic.enums.AcceptanceStatus
import com.nlc.forensic.repository.FundingIncidentReportRepository
import com.nlc.forensic.repository.UserRepository
import org.springframework.stereotype.Service
import java.security.InvalidParameterException


@Service
class FundingIncidentReportService(
    private val fundingIncidentReportRepository: FundingIncidentReportRepository,
    private val userRepository: UserRepository
) {
    fun createFundingIncidentReport(
        fundingIncidentReportDTO: FundingIncidentReportDTO)
    : FundingIncidentReport {
        if (fundingIncidentReportDTO.dateReported == null ||
            fundingIncidentReportDTO.startDate ==null ||
            fundingIncidentReportDTO.projectNumber.isBlank() ||
            fundingIncidentReportDTO.channel.isBlank() ||
            fundingIncidentReportDTO.caseType.isBlank() ||
            fundingIncidentReportDTO.divisionDetected.isBlank()||
            fundingIncidentReportDTO.levelDetected.isBlank() ||
            fundingIncidentReportDTO.organisation.isBlank() ||
            fundingIncidentReportDTO.sector.isBlank() ||
            fundingIncidentReportDTO.sourceDetection.isBlank() ||
            fundingIncidentReportDTO.priority.isBlank() ||
            fundingIncidentReportDTO.allocatedDescription.isBlank()
            ) {
            throw InvalidParameterException(ResponseConstant.REQUIRED_PARAMETERS_NOT_SET)
        }

        val newReport = FundingIncidentReport (
            startDate = fundingIncidentReportDTO.startDate!!,
            dateReported = fundingIncidentReportDTO.dateReported!!,
            projectNumber = fundingIncidentReportDTO.projectNumber,
            province = fundingIncidentReportDTO.province,
            caseType = fundingIncidentReportDTO.caseType,
            channel = fundingIncidentReportDTO.channel,
            priority = fundingIncidentReportDTO.priority,
            status = fundingIncidentReportDTO.status,
            organisation = fundingIncidentReportDTO.organisation,
            detectionDivision = fundingIncidentReportDTO.divisionDetected,
            description = fundingIncidentReportDTO.allocatedDescription,
            detectionLevel = fundingIncidentReportDTO.levelDetected,
            sector = fundingIncidentReportDTO.sector,
            assessmentStage = fundingIncidentReportDTO.assessmentStage

        )
        fundingIncidentReportRepository.save(newReport)

        return newReport
    }

    fun getAllFundingReports(): List<FundingIncidentReport> {
        return fundingIncidentReportRepository.findAll()
    }

    fun acceptOrDeclineReport(acceptanceDTO: CaseAcceptanceDTO) {
        val updatedCase = fundingIncidentReportRepository.findByReportNumber(acceptanceDTO.reportNumber)
        updatedCase.acceptance = acceptanceDTO.acceptance
        if (acceptanceDTO.acceptance == AcceptanceStatus.ACCEPTED.name) {
            val userToAllocateTo = userRepository.findByEmail(acceptanceDTO.allocateTo)
            updatedCase.assignedTo = userToAllocateTo.get()
            fundingIncidentReportRepository.save(updatedCase)
        }
        fundingIncidentReportRepository.save(updatedCase)
    }

}