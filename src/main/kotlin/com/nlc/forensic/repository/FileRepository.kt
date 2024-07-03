package com.nlc.forensic.repository

import com.nlc.forensic.entity.File
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository


@Repository
interface FileRepository : JpaRepository<File, Long> {
    fun findByFileName(fileName: String): File?
}