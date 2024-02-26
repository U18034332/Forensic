package com.nlc.forensic.service

import com.nlc.forensic.repository.CaseRepository
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Service


@Service
class CaseManagementService {
    @Autowired
    private lateinit var caseRepository: CaseRepository

    fun totalCases(): Long{
        return caseRepository.count()
    }
}