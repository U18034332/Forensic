package com.nlc.forensic.controller

import com.google.gson.Gson
import com.nlc.forensic.constants.ResponseConstant
import com.nlc.forensic.dto.NonFundingIncidentReportDTO
import com.nlc.forensic.service.NonFundingIncidentReportService
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController


@RestController
@RequestMapping("/api/v1/incident-report/non-funding/")
class NonFundingIncidentReportController(
    private val nonFundingIncidentReportService: NonFundingIncidentReportService,
    private val gson: Gson
) {
    @PostMapping("create")
    fun createReport(@RequestBody nonFundingIncidentReportDTO: NonFundingIncidentReportDTO): ResponseEntity<String> {
        nonFundingIncidentReportService.createIncidentReport(nonFundingIncidentReportDTO)
        return ResponseEntity.ok(gson.toJson(ResponseConstant.REPORT_CREATED))
    }

}