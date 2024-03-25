package com.nlc.forensic.controller

import com.nlc.forensic.service.CaseManagementService
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PathVariable
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController


@RestController
@RequestMapping("/api/v1/dashboard/")
class CaseManagementController(private val caseManagementService: CaseManagementService) {
    @GetMapping("total")
    fun getTotalNumberOfCases(): ResponseEntity<Long>{
        return ResponseEntity.ok(caseManagementService.totalCases())
    }

    @GetMapping("province/{province}")
    fun getTotalByProvince(@PathVariable province: String): ResponseEntity<Int> {
        return ResponseEntity.ok(caseManagementService.totalCasesPerProvince(province))
    }
}