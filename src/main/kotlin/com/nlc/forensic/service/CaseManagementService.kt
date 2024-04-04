package com.nlc.forensic.service

import com.nlc.forensic.constants.ResponseConstant
import com.nlc.forensic.entity.Case
import com.nlc.forensic.repository.CaseRepository
import org.springframework.stereotype.Service


@Service
class CaseManagementService(private val caseRepository: CaseRepository) {
    fun createNewCase(case: Case): Case {
        if (case.channel.isBlank() || case.status.isBlank() ||
            case.complexity.isBlank() || case.type.isBlank() ||
            case.province.isBlank()
            ) {
            throw IllegalArgumentException(ResponseConstant.CASE_FAIL)
        }
        caseRepository. save(case)
        return case
    }

    fun getAllCases(): List<Case> {
        return caseRepository.findAll()
    }

    fun update(case: Case): Case {
        val exitingCase = caseRepository.findByCaseNumber(case.caseNumber)
        if (exitingCase.isEmpty) {
            throw IllegalArgumentException(ResponseConstant.CASE_UPDATE_FAIL)
        }
        exitingCase.get().assignedTo = case.assignedTo
        exitingCase.get().channel = case.channel
        exitingCase.get().complexity = case.complexity
        exitingCase.get().province = case.province
        exitingCase.get().status = case.status
        exitingCase.get().type = case.type
        caseRepository.save(exitingCase.get())
        return case
    }
}