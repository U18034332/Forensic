package com.nlc.forensic.service

import com.nlc.forensic.constants.ResponseConstant
import com.nlc.forensic.dto.NonFundingCaseDetailsDTO
import com.nlc.forensic.entity.Case
import com.nlc.forensic.repository.CaseRepository
import com.nlc.forensic.repository.NonFundingIncidentReportRepository
import org.springframework.stereotype.Service


@Service
class CaseManagementService(
    private val caseRepository: CaseRepository,
    private val nonFundingIncidentReportRepository: NonFundingIncidentReportRepository
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
}