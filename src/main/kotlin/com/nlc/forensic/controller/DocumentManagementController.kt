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
    fun uploadFile(@RequestParam("file") file: MultipartFile,
                   @RequestParam("caseNumber") caseNumber: String): ResponseEntity<String> {
        return try {
            val documentUploadDTO = DocumentUploadDTO(file, caseNumber)
            val fileName = documentManagerService.storeFile(documentUploadDTO)
            ResponseEntity.ok().body("File $fileName uploaded successfully")

        } catch (e: Exception) {
            ResponseEntity.badRequest().body(e.message)
        }
    }

}