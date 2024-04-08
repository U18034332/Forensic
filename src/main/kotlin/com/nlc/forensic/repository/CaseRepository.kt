package com.nlc.forensic.repository

import com.nlc.forensic.entity.Case
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.data.jpa.repository.Query
import java.util.Optional

interface CaseRepository: JpaRepository<Case, Long> {
    fun findByCaseId(id: Long): Optional<Case>
    fun findByCaseNumber(caseNumber: String): Optional<Case>
    override fun count(): Long
    @Query("SELECT COUNT(c) FROM Case c WHERE c.type = :type")
    fun countByType(type: String): Int

    @Query("SELECT COUNT(c) FROM Case c WHERE c.province = :province")
    fun countByProvince(province: String): Int
}