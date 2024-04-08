package com.nlc.forensic.controller

import com.nlc.forensic.dto.CaseWidgetsDTO
import com.nlc.forensic.dto.TotalByProvinceDTO
import com.nlc.forensic.service.DashboardManagementService
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController


@RestController
@RequestMapping("/api/v1/dashboard/total/")
class DashboardManagementController(private val caseManagementService: DashboardManagementService) {
    @GetMapping("widgets")
    fun getTotalNumberOfCases(): ResponseEntity<CaseWidgetsDTO>{
        return ResponseEntity.ok(caseManagementService.casesWidgetsSummary())
    }

    @GetMapping("provinces")
    fun getTotalByProvince(): ResponseEntity<TotalByProvinceDTO> {
        return ResponseEntity.ok(caseManagementService.totalCasesPerProvince())
    }
}