package com.nlc.forensic.dto

import org.springframework.web.multipart.MultipartFile

data class DocumentUploadDTO(
    val file: MultipartFile,
    val caseNumber: String
)
