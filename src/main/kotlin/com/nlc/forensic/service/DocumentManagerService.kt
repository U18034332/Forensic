package com.nlc.forensic.service

import com.nlc.forensic.dto.DocumentUploadDTO
import com.nlc.forensic.entity.File
import com.nlc.forensic.repository.CaseRepository
import com.nlc.forensic.repository.FileRepository
import org.springframework.stereotype.Service


@Service
class DocumentManagerService(
    private val fileRepository: FileRepository,
    private val caseRepository: CaseRepository
) {
    fun storeFiles(documentUploadDTOs: List<DocumentUploadDTO>?): List<String> {
        if (documentUploadDTOs.isNullOrEmpty()) {
            throw IllegalArgumentException("Invalid documents, please upload at least one document.")
        }

        val savedFileNames = mutableListOf<String>()

        documentUploadDTOs.forEach { documentUploadDTO ->
            val fileName = documentUploadDTO.file.originalFilename
                ?: throw IllegalArgumentException("Invalid file: missing original filename")
            val fileType = documentUploadDTO.file.contentType
                ?: throw IllegalArgumentException("Invalid file: missing content type")
            val data = documentUploadDTO.file.bytes
            val case = caseRepository.findByCaseNumber(documentUploadDTO.caseNumber)
                .orElseThrow { IllegalArgumentException("Invalid case number: ${documentUploadDTO.caseNumber}") }

            val fileEntity = File(fileName = fileName, fileType = fileType, data = data, assignedTo = case)
            fileRepository.save(fileEntity)

            savedFileNames.add(fileName)
        }

        return savedFileNames
    }


    fun getFileData(fileName: String): ByteArray {
        val fileEntity = fileRepository.findByFileName(fileName)
            ?: throw IllegalArgumentException("File not found")
        return fileEntity.data
    }


}