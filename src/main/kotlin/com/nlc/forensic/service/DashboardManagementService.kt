package com.nlc.forensic.service

import com.nlc.forensic.constants.Provinces
import com.nlc.forensic.dto.CaseWidgetsDTO
import com.nlc.forensic.dto.TotalByProvinceDTO
import com.nlc.forensic.entity.Case
import com.nlc.forensic.repository.CaseRepository
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Service
import java.lang.IllegalArgumentException


@Service
class DashboardManagementService {
    @Autowired
    private lateinit var caseRepository: CaseRepository

    fun totalCases(): Long {
        return caseRepository.count()
    }

    fun totalCasesPerProvince(): TotalByProvinceDTO {
        return TotalByProvinceDTO(
            caseRepository.countByProvince(Provinces.MP),
            caseRepository.countByProvince(Provinces.GP),
            caseRepository.countByProvince(Provinces.LP),
            caseRepository.countByProvince(Provinces.NW),
            caseRepository.countByProvince(Provinces.FS),
            caseRepository.countByProvince(Provinces.KZN),
            caseRepository.countByProvince(Provinces.NC),
            caseRepository.countByProvince(Provinces.EC),
            caseRepository.countByProvince(Provinces.WC)
        )
    }

    fun casesWidgetsSummary(): CaseWidgetsDTO {
        return CaseWidgetsDTO(
            123456,
            5,
            2,
            10
        )
    }
}