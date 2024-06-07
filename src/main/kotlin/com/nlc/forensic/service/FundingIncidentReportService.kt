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
import java.util.*


@Service
class FundingIncidentReportService(
    private val fundingIncidentReportRepository: FundingIncidentReportRepository,
    private val userRepository: UserRepository
) {
    fun createFundingIncidentReport(
        fundingIncidentReportDTO: FundingIncidentReportDTO)
            : FundingIncidentReport? {

        // Check for required parameters
        with(fundingIncidentReportDTO) {
            requireNotNull(dateReported)
            requireNotNull(startDate)
            require(projectNumber.isNotBlank())
            require(channel.isNotBlank())
            require(caseType.isNotBlank())
            require(divisionDetected.isNotBlank())
            require(levelDetected.isNotBlank())
            require(organisation.isNotBlank())
            require(sector.isNotBlank())
            require(sourceDetection.isNotBlank())
            require(priority.isNotBlank())
            require(allocatedDescription.isNotBlank())
        }

        val reportPrefix = when (fundingIncidentReportDTO.divisionDetected.lowercase(Locale.getDefault())) {
            "finance" -> "RP-FINANCE"
            "office of the commissioner" -> "RP-COMMISSIONER"
            "regulatory compliance" -> "RP-REG"
            "ict" -> "RP-ICT"
            "operations" -> "RP-OPERATIONS"
            else -> "RP-LEGAL"
        }

        val newReport: FundingIncidentReport? = fundingIncidentReportDTO.startDate?.let {
            fundingIncidentReportDTO.dateReported?.let { it1 ->
                FundingIncidentReport (
                    reportNumber = generateReportNumberFromDatabaseId(reportPrefix),
                    startDate = it,
                    dateReported = it1,
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
            }
        }

        if (newReport != null) {
            fundingIncidentReportRepository.save(newReport)
        }

        return newReport
    }


    fun getAllFundingReports(): List<FundingIncidentReport> {
        return fundingIncidentReportRepository.findAll()
    }

    fun acceptOrDeclineReport(acceptanceDTO: CaseAcceptanceDTO) {
        require(acceptanceDTO.acceptance.isNotBlank() && acceptanceDTO.reportNumber.isNotBlank()) {
            throw InvalidParameterException(ResponseConstant.REPORT_UPDATE_FAIL)
        }

        val updatedCase = fundingIncidentReportRepository.findByReportNumber(acceptanceDTO.reportNumber)
            ?: throw InvalidParameterException("The report number is invalid.")

        updatedCase.acceptance = acceptanceDTO.acceptance

        if (acceptanceDTO.acceptance.equals("accepted", ignoreCase = true)) {
            userRepository.findByEmail(acceptanceDTO.allocateTo).let { userToAllocateTo ->
                updatedCase.assignedTo = userToAllocateTo.get()
            }
        } else {
            updatedCase.status = "Closed"
            updatedCase.assignedTo = null
            updatedCase.declineReason = acceptanceDTO.reason
        }

        fundingIncidentReportRepository.save(updatedCase)
    }


    fun generateReportNumberFromDatabaseId(prefix: String): String {
        val latestReportId = fundingIncidentReportRepository.count()
        return "${prefix}-${latestReportId + 1}"
    }

    fun getAllTheDeclinedReports(): List<FundingIncidentReport> {
        return fundingIncidentReportRepository.findByAcceptance("Declined")
    }

    fun getReportByReportNumber(reportNumber: String): FundingIncidentReport? {
        if (reportNumber.isEmpty()) {
            throw IllegalArgumentException("The report number can not be empty")
        }
        return fundingIncidentReportRepository.findByReportNumber(reportNumber)
    }
}