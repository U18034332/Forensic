package com.nlc.forensic.service

import com.nlc.forensic.constants.ResponseConstant
import com.nlc.forensic.dto.CaseAcceptanceDTO
import com.nlc.forensic.dto.FundingIncidentReportDTO
import com.nlc.forensic.entity.FundingIncidentReport
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
            require(caseSubType.isNotBlank())
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
                    caseSubType = fundingIncidentReportDTO.caseSubType,
                    channel = fundingIncidentReportDTO.channel,
                    priority = fundingIncidentReportDTO.priority,
                    status = fundingIncidentReportDTO.status,
                    organisation = fundingIncidentReportDTO.organisation,
                    divisionDetected = fundingIncidentReportDTO.divisionDetected,
                    allocatedDescription = fundingIncidentReportDTO.allocatedDescription,
                    levelDetected = fundingIncidentReportDTO.levelDetected,
                    sector = fundingIncidentReportDTO.sector,
                    sourceDetection = fundingIncidentReportDTO.sourceDetection,
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

    fun getAllAssessedFilledReports(): List<FundingIncidentReport> {
        return fundingIncidentReportRepository.findByAssignedToIsNotNullORDeclineReasonIsNotEmpty()
    }

    fun getAllUnassignedReports(): List<FundingIncidentReport?> {
        return fundingIncidentReportRepository.findByAssignedToIsNullAndDeclineReasonIsEmpty()
    }

    fun evaluateReport(acceptanceDTO: CaseAcceptanceDTO) {
        require(acceptanceDTO.reportNumber.isNotBlank()) {
            throw InvalidParameterException(ResponseConstant.REPORT_UPDATE_FAIL)
        }

        val updatedCase = fundingIncidentReportRepository.findByReportNumber(acceptanceDTO.reportNumber)
            ?: throw InvalidParameterException("The report number is invalid.")

        if (acceptanceDTO.allocateTo.isNotBlank()) {
            val user = userRepository.findByEmail(acceptanceDTO.allocateTo)
            if(user.isEmpty) {
                throw InvalidParameterException("Invalid user email. Please check the email and allocate")
            }
            updatedCase.assignedTo = user.get()
            updatedCase.acceptance = "Recommended"
        } else {
            updatedCase.status = "Closed"
            updatedCase.assignedTo = null
            updatedCase.acceptance = "Not Recommended"
            updatedCase.declineReason = acceptanceDTO.declineReason
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