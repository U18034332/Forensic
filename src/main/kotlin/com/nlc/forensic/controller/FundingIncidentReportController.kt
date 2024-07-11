package com.nlc.forensic.controller

import com.google.gson.Gson
import com.nlc.forensic.constants.ResponseConstant
import com.nlc.forensic.dto.CaseAcceptanceDTO
import com.nlc.forensic.dto.FundingIncidentReportDTO
import com.nlc.forensic.entity.FundingIncidentReport
import com.nlc.forensic.entity.NonFundingIncidentReport
import com.nlc.forensic.service.FundingIncidentReportService
import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*


@RestController
@RequestMapping("/api/v1/admin-only/incident-report/funding/")
class FundingIncidentReportController(
    private val fundingIncidentReportService: FundingIncidentReportService,
    private val gson: Gson
) {
    @GetMapping("get/all")
    fun getIncidentReports(): ResponseEntity<List<FundingIncidentReport>> {
        return ResponseEntity.ok(fundingIncidentReportService.getAllFundingReports())
    }

    @GetMapping("get/declined")
    fun getDeclinedReports(): ResponseEntity<List<FundingIncidentReport>> {
        return ResponseEntity.ok(fundingIncidentReportService.getAllTheDeclinedReports())
    }

    @PostMapping("create-report")
    fun createReport(@RequestBody fundingIncidentReportDTO: FundingIncidentReportDTO): ResponseEntity<String> {
        return try {
            fundingIncidentReportService.createFundingIncidentReport(fundingIncidentReportDTO)
            ResponseEntity.ok(gson.toJson(ResponseConstant.REPORT_CREATED))

        } catch (e: Exception) {
            ResponseEntity.badRequest().body((gson.toJson(e.message)))
        }
    }

    @PostMapping("assessment")
    fun reportAcceptance(@RequestBody acceptanceDTO: CaseAcceptanceDTO): ResponseEntity<String> {
        return try {
            fundingIncidentReportService.evaluateReport(acceptanceDTO)
            ResponseEntity.ok(gson.toJson(ResponseConstant.REPORT_ACCEPTANCE))

        } catch (e: Exception) {
            ResponseEntity.badRequest().body((gson.toJson(e.message)))
        }
    }

    @GetMapping("get-report")
    fun getByReportNumber(@RequestParam reportNumber: String): ResponseEntity<Any> {
        return try {
            val report = fundingIncidentReportService.getReportByReportNumber(reportNumber)
            if (report != null) {
                ResponseEntity.ok(report)
            } else {
                ResponseEntity.status(HttpStatus.NOT_FOUND).body("Report not found for report number: $reportNumber")
            }
        } catch (e: IllegalArgumentException) {
            ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Invalid report number: $reportNumber")
        } catch (e: Exception) {
            ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("An unexpected error occurred: ${e.message}")
        }
    }

    @GetMapping("get/unassigned")
    fun getUnassignedIncidentReports(): ResponseEntity<List<FundingIncidentReport?>> {
        return ResponseEntity.ok(fundingIncidentReportService.getAllUnassignedReports())
    }

}