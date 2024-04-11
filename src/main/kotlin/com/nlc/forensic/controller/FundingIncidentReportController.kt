package com.nlc.forensic.controller

import com.nlc.forensic.constants.ResponseConstant
import com.nlc.forensic.dto.FundingIncidentReportDTO
import com.nlc.forensic.entity.FundingIncidentReport
import com.nlc.forensic.service.FundingIncidentReportService
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController


@RestController
@RequestMapping("/api/v1/incident-report/funding/")
class FundingIncidentReportController(
    private val fundingIncidentReportService: FundingIncidentReportService
) {
    @GetMapping("get/all")
    fun getIncidentReports(): ResponseEntity<List<FundingIncidentReport>> {
        return ResponseEntity.ok(fundingIncidentReportService.getAllFundingReports())
    }

    @PostMapping("create")
    fun createReport(fundingIncidentReportDTO: FundingIncidentReportDTO): ResponseEntity<String> {
        if (fundingIncidentReportDTO.projectNumber.isBlank()) {
            return ResponseEntity.badRequest().body(ResponseConstant.REQUIRED_PARAMETERS_NOT_SET)
        }
        fundingIncidentReportService.createFundingIncidentReport(fundingIncidentReportDTO)
        return ResponseEntity.ok(ResponseConstant.REPORT_CREATED)
    }
}