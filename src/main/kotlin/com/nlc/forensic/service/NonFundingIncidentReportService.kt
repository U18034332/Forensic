package com.nlc.forensic.service

import com.nlc.forensic.constants.ResponseConstant
import com.nlc.forensic.dto.CaseAcceptanceDTO
import com.nlc.forensic.dto.NonFundingIncidentReportDTO
import com.nlc.forensic.dto.IncidentReportResponseDTO
import com.nlc.forensic.entity.NonFundingIncidentReport
import com.nlc.forensic.enums.UserRoles
import com.nlc.forensic.repository.NonFundingIncidentReportRepository
import com.nlc.forensic.repository.UserRepository
import org.springframework.security.core.context.SecurityContextHolder
import org.springframework.stereotype.Service
import java.security.InvalidParameterException
import java.util.*


@Service

class NonFundingIncidentReportService(
    private val nonFundingIncidentReportRepository: NonFundingIncidentReportRepository,
    private val userRepository: UserRepository
) {

    fun createIncidentReport(reportDTO: NonFundingIncidentReportDTO): NonFundingIncidentReport? {
        if(reportDTO.reportNumber != "") {
            val existingReport = nonFundingIncidentReportRepository.findByReportNumber(reportDTO.reportNumber)
            if (existingReport != null) {
                existingReport.startDate = reportDTO.startDate
                existingReport. dateReported = reportDTO.dateReported
                existingReport.province = reportDTO.province
                existingReport.caseType = reportDTO.caseType
                existingReport.caseSubType = reportDTO.caseSubType
                existingReport.channel = reportDTO.channel
                existingReport.priority = reportDTO.priority
                existingReport.status = reportDTO.status
                existingReport.divisionDetected = reportDTO.divisionDetected
                existingReport.allocatedDescription = reportDTO.allocatedDescription
                existingReport.levelDetected = reportDTO.levelDetected
                existingReport.assessmentStage = reportDTO.assessmentStage
                nonFundingIncidentReportRepository.save(existingReport)
                return existingReport;
            }
        }

        with(reportDTO) {
            requireNotNull(dateReported) { "Date reported cannot be null" }
            requireNotNull(startDate) { "Start date cannot be null" }
        }

        val reportPrefix = when (reportDTO.divisionDetected.lowercase(Locale.getDefault())) {
            "finance" -> "RP-FIN"
            "office of the commissioner" -> "RP-COMM"
            "regulatory compliance" -> "RP-RC"
            "ict" -> "RP-ICT"
            "operations" -> "RP-OPS"
            else -> "RP-LG"
        }

        val newReport = reportDTO.startDate?.let { startDate ->
            reportDTO.dateReported?.let { dateReported ->
                NonFundingIncidentReport(
                    reportNumber = generateReportNumberFromDatabaseId(reportPrefix),
                    startDate = startDate,
                    dateReported = dateReported,
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

        return newReport?.apply {
            nonFundingIncidentReportRepository.save(this)
        }
    }

    fun findAcceptedReportsByReportNumber(reportNumber: String): NonFundingIncidentReport? {
        return nonFundingIncidentReportRepository.findByReportNumberAndAcceptance(reportNumber, "accepted")
    }

    fun getAllAssessedFilledReports(): List<IncidentReportResponseDTO> {
        return nonFundingIncidentReportRepository
            .findByAssignedToIsNotNullORDeclineReasonIsNotEmpty()
            .takeIf { it.isNotEmpty() }
            ?.map { ir ->
                IncidentReportResponseDTO(
                    id = ir.id,
                    reportNumber = ir.reportNumber,
                    acceptance = ir.acceptance,
                    dateReported = ir.dateReported,
                    startDate = ir.startDate,
                    channel = ir.channel,
                    province = ir.province,
                    caseType = ir.caseType,
                    caseSubType = ir.caseSubType,
                    priority = ir.priority,
                    status = ir.status,
                    divisionDetected = ir.divisionDetected,
                    levelDetected = ir.levelDetected,
                    allocatedDescription = ir.allocatedDescription,
                    declineReason = ir.declineReason,
                    assignedTo = ir.assignedTo?.email
                )
            } ?: emptyList()
    }

    fun evaluateReport(acceptanceDTO: CaseAcceptanceDTO) {
        require(acceptanceDTO.reportNumber.isNotBlank()) {
            throw InvalidParameterException(ResponseConstant.REPORT_UPDATE_FAIL)
        }

        val updatedCase = nonFundingIncidentReportRepository.findByReportNumber(acceptanceDTO.reportNumber)
            ?: throw InvalidParameterException("The report number is invalid.")

        if (acceptanceDTO.allocateTo.isNotBlank()) {
            val user = userRepository.findByEmail(acceptanceDTO.allocateTo)
            if (user.isEmpty) {
                throw InvalidParameterException("Invalid user email. Please check the email and allocate")
            }
            updatedCase.apply {
                assignedTo = user.get()
                acceptance = "Recommended"
            }
        } else {
            updatedCase.apply {
                status = "Closed"
                assignedTo = null
                acceptance = "Not Recommended"
                declineReason = acceptanceDTO.declineReason
            }
        }
        nonFundingIncidentReportRepository.save(updatedCase)
    }

    fun getAllNonFundingReports(): List<NonFundingIncidentReport> {
        return nonFundingIncidentReportRepository.findAll()
    }

    fun getAllUnassignedReports(): List<IncidentReportResponseDTO?> {
        return nonFundingIncidentReportRepository
            .findByAssignedToIsNullAndDeclineReasonIsEmpty()
            .takeIf { it.isNotEmpty() }
            ?.map { ir ->
                IncidentReportResponseDTO(
                    id = ir.id,
                    reportNumber = ir.reportNumber,
                    acceptance = ir.acceptance,
                    dateReported = ir.dateReported,
                    startDate = ir.startDate,
                    channel = ir.channel,
                    province = ir.province,
                    caseType = ir.caseType,
                    caseSubType = ir.caseSubType,
                    priority = ir.priority,
                    status = ir.status,
                    divisionDetected = ir.divisionDetected,
                    levelDetected = ir.levelDetected,
                    allocatedDescription = ir.allocatedDescription,
                    declineReason = ir.declineReason,
                    assignedTo = ir.assignedTo?.email
                )
            } ?: emptyList()
    }

    fun generateReportNumberFromDatabaseId(prefix: String): String {
        val latestReportId = nonFundingIncidentReportRepository.count()
        return "${prefix}-${latestReportId + 1}"
    }

    fun getIncidentReportByReportNumber(reportNumber: String): NonFundingIncidentReport? {
        require(reportNumber.isNotBlank()) { "The report number cannot be empty" }
        return nonFundingIncidentReportRepository.findByReportNumber(reportNumber)
    }

    fun getReportsAssignedToCurrentUser(): List<IncidentReportResponseDTO> {
        // Retrieve the logged-in user's email
        val loggedInUserEmail = SecurityContextHolder.getContext().authentication.name
        val user = userRepository.findByEmail(loggedInUserEmail)
            .orElseThrow { IllegalArgumentException("Logged-in user not found in the system") }

        // Check if the user has an admin role
        val isAdmin = user.role == UserRoles.ADMIN

        // Fetch reports based on the user's role
        val reports = if (isAdmin) {
            nonFundingIncidentReportRepository.findAll()
        } else {
            nonFundingIncidentReportRepository.findByAssignedTo(user)
        }

        // Map the reports to IncidentReportResponseDTO
        return reports.map { ir ->
            IncidentReportResponseDTO(
                id = ir.id,
                reportNumber = ir.reportNumber,
                acceptance = ir.acceptance,
                dateReported = ir.dateReported,
                startDate = ir.startDate,
                channel = ir.channel,
                province = ir.province,
                caseType = ir.caseType,
                caseSubType = ir.caseSubType,
                priority = ir.priority,
                status = ir.status,
                divisionDetected = ir.divisionDetected,
                levelDetected = ir.levelDetected,
                allocatedDescription = ir.allocatedDescription,
                declineReason = ir.declineReason,
                assignedTo = ir.assignedTo?.email
            )
        }
    }

}
