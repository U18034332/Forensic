package com.nlc.forensic.entity

import jakarta.persistence.*


@Entity
@Table(name = "document_manager")
data class File(
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "doc_id")
    val id: Long = 0L,
    @ManyToOne
    @JoinColumn(name = "case_number")
    var assignedTo: Case? = null,
    val fileName: String,
    val fileType: String,
    val data: ByteArray
) {
    override fun equals(other: Any?): Boolean {
        if (this === other) return true
        if (javaClass != other?.javaClass) return false

        other as File

        if (id != other.id) return false
        if (fileName != other.fileName) return false
        if (fileType != other.fileType) return false
        if (!data.contentEquals(other.data)) return false

        return true
    }

    override fun hashCode(): Int {
        var result = id.hashCode()
        result = 31 * result + fileName.hashCode()
        result = 31 * result + fileType.hashCode()
        result = 31 * result + data.contentHashCode()
        return result
    }
}
