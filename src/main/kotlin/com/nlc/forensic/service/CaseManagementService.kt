package com.nlc.forensic.service

import com.nlc.forensic.constants.ResponseConstant
import com.nlc.forensic.dto.IncidentReportResponseDTO
import com.nlc.forensic.dto.NonFundingCaseDetailsDTO
import com.nlc.forensic.entity.Case
import com.nlc.forensic.enums.UserRoles
import com.nlc.forensic.repository.CaseRepository
import com.nlc.forensic.repository.NonFundingIncidentReportRepository
import com.nlc.forensic.repository.UserRepository
import org.springframework.security.core.context.SecurityContextHolder
import org.springframework.stereotype.Service


@Service
class CaseManagementService(
    private val caseRepository: CaseRepository,
    private val nonFundingIncidentReportRepository: NonFundingIncidentReportRepository,
    private val userRepository: UserRepository
    ) {
    fun createNewCase(reportNumber: String, nonFundingCaseDetailsDTO: NonFundingCaseDetailsDTO): Case? {
        val incidentReport = nonFundingIncidentReportRepository.findByReportNumber(reportNumber)
        val case = incidentReport?.let {
            Case(
                type = it.caseType,
                caseNumber = "",
                status = incidentReport.status,
                province = incidentReport.province,
                channel = incidentReport.channel,
                severity = nonFundingCaseDetailsDTO.caseSeverity,
                assignedTo = incidentReport.assignedTo,
                priority = incidentReport.priority,
                detectionLevel = incidentReport.levelDetected,
                allocatedDescription = incidentReport.allocatedDescription,
                detectionDivision = incidentReport.divisionDetected,
                caseEndDate = nonFundingCaseDetailsDTO.caseEndDate
                )
        }


        if (case != null) {
            caseRepository. save(case)
        }
        return case
    }

    fun getAllCases(): List<Case> {
        return caseRepository.findAll()
    }

    fun update(case: Case): Case {
        val exitingCase = caseRepository.findByCaseNumber(case.caseNumber)
        if (exitingCase.isEmpty) {
            throw IllegalArgumentException(ResponseConstant.CASE_UPDATE_FAIL)
        }
        exitingCase.get().assignedTo = case.assignedTo
        exitingCase.get().channel = case.channel
        exitingCase.get().severity = case.severity
        exitingCase.get().province = case.province
        exitingCase.get().status = case.status
        exitingCase.get().type = case.type
        caseRepository.save(exitingCase.get())
        return case
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