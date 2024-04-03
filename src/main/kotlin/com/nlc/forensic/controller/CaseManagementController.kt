package com.nlc.forensic.controller

import com.nlc.forensic.entity.Case
import com.nlc.forensic.service.CaseManagementService
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController


@RestController
@RequestMapping("api/v1/case_management/")
class CaseManagementController(private val caseManagementService: CaseManagementService) {

    @PostMapping("create")
    fun createCase(case: Case): ResponseEntity<String> {
        if (case == null) {
            return ResponseEntity.badRequest().body("Case could not be created.")
        }
        caseManagementService.createNewCase(case)
        return ResponseEntity.ok("Case created.")
    }

}