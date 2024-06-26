package com.nlc.forensic.controller

import com.google.gson.Gson
import com.nlc.forensic.constants.ResponseConstant
import com.nlc.forensic.dto.NonFundingIncidentReportDTO
import com.nlc.forensic.entity.FundingIncidentReport
import com.nlc.forensic.entity.NonFundingIncidentReport
import com.nlc.forensic.service.NonFundingIncidentReportService
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*


@RestController
@RequestMapping("/api/v1/incident-report/non-funding/")
class NonFundingIncidentReportController(
    private val nonFundingIncidentReportService: NonFundingIncidentReportService,
    private val gson: Gson
) {
    @PostMapping("create-report")
    fun createReport(@RequestBody nonFundingIncidentReportDTO: NonFundingIncidentReportDTO): ResponseEntity<String> {
        return try {
            nonFundingIncidentReportService.createIncidentReport(nonFundingIncidentReportDTO)
            ResponseEntity.ok(gson.toJson(ResponseConstant.REPORT_CREATED))

        } catch (e: Exception) {
            ResponseEntity.badRequest().body((gson.toJson(e.message)))
        }
    }


    @GetMapping("get/all")
    fun getIncidentReports(): ResponseEntity<List<NonFundingIncidentReport>> {
        return ResponseEntity.ok(nonFundingIncidentReportService.getAllNonFundingReports())
    }

    @GetMapping("get/unassigned")
    fun getUnassignedIncidentReports(): ResponseEntity<List<NonFundingIncidentReport?>> {
        return ResponseEntity.ok(nonFundingIncidentReportService.getAllUnassignedReports())
    }
}