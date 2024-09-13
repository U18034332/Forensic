package com.nlc.forensic.controller

import com.nlc.forensic.dto.DocumentUploadDTO
import com.nlc.forensic.service.DocumentManagerService
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RequestParam
import org.springframework.web.bind.annotation.RestController
import org.springframework.web.multipart.MultipartFile


@RestController
@RequestMapping("api/v1/document-management/")
class DocumentManagementController(
    private val documentManagerService: DocumentManagerService
) {
    @PostMapping("upload")
    fun uploadFiles(@RequestParam("files") files: List<MultipartFile>,
                    @RequestParam("caseNumber") caseNumber: String): ResponseEntity<String> {
        return try {
            val documentUploadDTOs = files.map { DocumentUploadDTO(it, caseNumber) }
            val fileNames = documentManagerService.storeFiles(documentUploadDTOs)
            ResponseEntity.ok().body("Files ${fileNames.joinToString(", ")} uploaded successfully")

        } catch (e: Exception) {
            ResponseEntity.badRequest().body(e.message)
        }
    }

}