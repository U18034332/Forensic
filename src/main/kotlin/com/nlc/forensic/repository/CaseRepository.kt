package com.nlc.forensic.repository

import com.nlc.forensic.entity.Case
import org.springframework.data.jpa.repository.JpaRepository
import java.util.Optional

interface CaseRepository: JpaRepository<Case, Long> {
    fun findByCaseId(id: Long): Optional<Case>
    fun findByCaseNumber(caseNumber: String): Optional<Case>
    override fun count(): Long
    fun findByStatus(statusList: String): List<Case>
}