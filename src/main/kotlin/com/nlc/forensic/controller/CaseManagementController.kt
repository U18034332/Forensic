package com.nlc.forensic.controller

import com.nlc.forensic.constants.ResponseConstant
import com.nlc.forensic.entity.Case
import com.nlc.forensic.service.CaseManagementService
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*


@RestController
@RequestMapping("api/v1/case_management/cases/")
class CaseManagementController(private val caseManagementService: CaseManagementService) {

    @PostMapping("create")
    fun createCase(@RequestBody case: Case): ResponseEntity<String> {
        return try {
            caseManagementService.createNewCase(case)
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


}