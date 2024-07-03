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
    fun storeFile(documentUploadDTO: DocumentUploadDTO?): String {
        if (documentUploadDTO == null){
            throw IllegalArgumentException("Invalid document, please upload document.")
        }
        val fileName = documentUploadDTO.file.originalFilename ?: throw IllegalArgumentException("Invalid file")
        val fileType = documentUploadDTO.file.contentType ?: throw IllegalArgumentException("Invalid file")
        val data = documentUploadDTO.file.bytes
        val case = caseRepository.findByCaseNumber(documentUploadDTO.caseNumber).get()
        val fileEntity = File(fileName = fileName, fileType = fileType, data = data, assignedTo = case)
        fileRepository.save(fileEntity)
        return fileName
    }

    fun getFileData(fileName: String): ByteArray {
        val fileEntity = fileRepository.findByFileName(fileName)
            ?: throw IllegalArgumentException("File not found")
        return fileEntity.data
    }


}