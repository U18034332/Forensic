package com.nlc.forensic.controller

import com.nlc.forensic.constants.ResponseConstant
import com.nlc.forensic.dto.IncidentReportResponseDTO
import com.nlc.forensic.dto.NonFundingCaseDetailsDTO
import com.nlc.forensic.entity.Case
import com.nlc.forensic.entity.NonFundingIncidentReport
import com.nlc.forensic.repository.NonFundingIncidentReportRepository
import com.nlc.forensic.service.CaseManagementService
import com.nlc.forensic.service.NonFundingIncidentReportService
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*


@RestController
@RequestMapping("api/v1/case_management/cases/")
class CaseManagementController(
    private val caseManagementService: CaseManagementService,
    private val nonFundingIncidentReportService: NonFundingIncidentReportService
    ) {

    @PostMapping("create")
    fun createCase(@RequestBody reportNumber: String, nonFundingCaseDetailsDTO: NonFundingCaseDetailsDTO): ResponseEntity<String> {
        return try {
            caseManagementService.createNewCase(reportNumber, nonFundingCaseDetailsDTO)
            ResponseEntity.ok(ResponseConstant.CASE_CREATED)
        } catch (e: Exception) {
            ResponseEntity.badRequest().body(e.message)
        }
    }

    @GetMapping("/get/all")
    fun fetchAllCases(): ResponseEntity<List<Case>> {
        return ResponseEntity.ok().body(caseManagementService.getAllCases())
    }

    @PostMapping("/update")
    fun updateCase(@RequestBody case: Case): ResponseEntity<out Any> {
        return try {
            print(caseManagementService.update(case))
            ResponseEntity.ok().body(ResponseConstant.CASE_UPDATED)
        } catch (e: Exception) {
            ResponseEntity.badRequest().body(e.message)
        }
    }

    @GetMapping("/get-report")
    fun getReportByReportNumber(@RequestParam reportNumber: String): ResponseEntity<out Any> {
        if (reportNumber.isEmpty()) {
            return ResponseEntity.badRequest().body(ResponseConstant.REQUIRED_PARAMETERS_NOT_SET)
        }
        return ResponseEntity.ok(nonFundingIncidentReportService.findAcceptedReportsByReportNumber(reportNumber))
    }

    @GetMapping("/get/user/reports")
    fun getReportByReportNumber(): ResponseEntity<List<IncidentReportResponseDTO>> {
        return ResponseEntity.ok(nonFundingIncidentReportService.getReportsAssignedToCurrentUser())
    }

}