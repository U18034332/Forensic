package com.nlc.forensic.service

import com.nlc.forensic.constants.ResponseConstant
import com.nlc.forensic.dto.CaseAcceptanceDTO
import com.nlc.forensic.dto.NonFundingIncidentReportDTO
import com.nlc.forensic.entity.FundingIncidentReport
import com.nlc.forensic.entity.NonFundingIncidentReport
import com.nlc.forensic.repository.NonFundingIncidentReportRepository
import com.nlc.forensic.repository.UserRepository
import org.springframework.stereotype.Service
import java.security.InvalidParameterException
import java.util.*


@Service

class NonFundingIncidentReportService(
    private val nonFundingIncidentReportRepository: NonFundingIncidentReportRepository,
    private val userRepository: UserRepository
) {
    fun createIncidentReport(reportDTO: NonFundingIncidentReportDTO)
    : NonFundingIncidentReport? {
        with(reportDTO) {
            requireNotNull(dateReported)
            requireNotNull(startDate)
            require(priority.isNotBlank())
            require(province.isNotBlank())
            require(channel.isNotBlank())
            require(caseType.isNotBlank())
            require(divisionDetected.isNotBlank())
            require(levelDetected.isNotBlank())
            require(priority.isNotBlank())
            require(allocatedDescription.isNotBlank())
        }

        val reportPrefix = when (reportDTO.divisionDetected.lowercase(Locale.getDefault())) {
            "finance" -> "RP-FIN"
            "office of the commissioner" -> "RP-COMM"
            "regulatory compliance" -> "RP-RC"
            "ict" -> "RP-ICT"
            "operations" -> "RP-OPS"
            else -> "RP-LG"
        }
        val newReport: NonFundingIncidentReport? = reportDTO.startDate?.let {
            reportDTO.dateReported?.let { it1 ->
                NonFundingIncidentReport (
                    reportNumber = generateReportNumberFromDatabaseId(reportPrefix),
                    startDate = it,
                    dateReported = it1,
                    province = reportDTO.province,
                    caseType = reportDTO.caseType,
                    caseSubType = reportDTO.caseSubType,
                    channel = reportDTO.channel,
                    priority = reportDTO.priority,
                    status = reportDTO.status,
                    divisionDetected = reportDTO.divisionDetected,
                    allocatedDescription = reportDTO.allocatedDescription,
                    levelDetected = reportDTO.levelDetected,
                    assessmentStage = reportDTO.assessmentStage
                )
            }
        }
        if (newReport != null) {
            nonFundingIncidentReportRepository.save(newReport)
        }
        return newReport
    }


    fun findAcceptedReportsByReportNumber(reportNumber: String): NonFundingIncidentReport? {
        return nonFundingIncidentReportRepository.findByReportNumberAndAcceptance(reportNumber, "accepted")
    }


    fun evaluateReport(acceptanceDTO: CaseAcceptanceDTO) {
        require(acceptanceDTO.acceptance.isNotBlank() && acceptanceDTO.reportNumber.isNotBlank()) {
            throw InvalidParameterException(ResponseConstant.REPORT_UPDATE_FAIL)
        }

        val updatedCase = nonFundingIncidentReportRepository.findByReportNumber(acceptanceDTO.reportNumber)
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
        nonFundingIncidentReportRepository.save(updatedCase)
    }


    fun getAllNonFundingReports(): List<NonFundingIncidentReport> {
        return nonFundingIncidentReportRepository.findAll()
    }

    fun getAllUnassignedReports(): List<NonFundingIncidentReport?> {
        return nonFundingIncidentReportRepository.findByAssignedToIsNullAndDeclineReasonIsEmpty()
    }


    fun generateReportNumberFromDatabaseId(prefix: String): String {
        val latestReportId = nonFundingIncidentReportRepository.count()
        return "${prefix}-${latestReportId + 1}"
    }

    fun getIncidentReportByReportNumber(reportNumber: String): NonFundingIncidentReport? {
        if (reportNumber.isEmpty()) {
            throw IllegalArgumentException("The report number can not be empty")
        }
        return nonFundingIncidentReportRepository.findByReportNumber(reportNumber)
    }
}