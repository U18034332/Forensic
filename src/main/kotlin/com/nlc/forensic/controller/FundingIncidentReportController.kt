package com.nlc.forensic.controller

import com.google.gson.Gson
import com.nlc.forensic.constants.ResponseConstant
import com.nlc.forensic.dto.FundingIncidentReportDTO
import com.nlc.forensic.entity.FundingIncidentReport
import com.nlc.forensic.service.FundingIncidentReportService
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController


@RestController
@RequestMapping("/api/v1/incident-report/funding/")
class FundingIncidentReportController(
    private val fundingIncidentReportService: FundingIncidentReportService,
    private val gson: Gson
) {
    @GetMapping("get/all")
    fun getIncidentReports(): ResponseEntity<List<FundingIncidentReport>> {
        return ResponseEntity.ok(fundingIncidentReportService.getAllFundingReports())
    }

    @PostMapping("create")
    fun createReport(@RequestBody fundingIncidentReportDTO: FundingIncidentReportDTO): ResponseEntity<String> {
        return try {
            fundingIncidentReportService.createFundingIncidentReport(fundingIncidentReportDTO)
            ResponseEntity.ok(gson.toJson(ResponseConstant.REPORT_CREATED))

        } catch (e: Exception) {
            ResponseEntity.badRequest().body((gson.toJson(e.message)))
        }
    }
}