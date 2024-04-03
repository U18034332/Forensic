package com.nlc.forensic.service

import com.nlc.forensic.entity.Case
import com.nlc.forensic.repository.CaseRepository
import org.springframework.stereotype.Service


@Service
class CaseManagementService(private val caseRepository: CaseRepository) {
    fun createNewCase(case: Case): Case {
        caseRepository.save(case)
        return case
    }
}