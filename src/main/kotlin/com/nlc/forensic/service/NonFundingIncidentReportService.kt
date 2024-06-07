package com.nlc.forensic.service

import com.nlc.forensic.dto.NonFundingIncidentReportDTO
import com.nlc.forensic.entity.NonFundingIncidentReport
import com.nlc.forensic.repository.NonFundingIncidentReportRepository
import com.nlc.forensic.repository.UserRepository
import org.springframework.stereotype.Service
import java.util.*


@Service

class NonFundingIncidentReportService(
    private val nonFundingIncidentReportRepository: NonFundingIncidentReportRepository,
    private val userRepository: UserRepository
) {
    fun createIncidentReport(reportDTO: NonFundingIncidentReportDTO)
    : NonFundingIncidentReport {
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
            "finance" -> "RP-FINANCE"
            "office of the commissioner" -> "RP-COMMISSIONER"
            "regulatory compliance" -> "RP-REG"
            "ict" -> "RP-ICT"
            "operations" -> "RP-OPERATIONS"
            else -> "RP-LEGAL"
        }
        val newReport: NonFundingIncidentReport = NonFundingIncidentReport(
            reportNumber = reportDTO.reportNumber
        )
        nonFundingIncidentReportRepository.save(newReport)
        return newReport
    }

    fun findAcceptedReportsByReportNumber(reportNumber: String): NonFundingIncidentReport? {
        return nonFundingIncidentReportRepository.findByReportNumberAndAcceptance(reportNumber, "accepted")
    }
}