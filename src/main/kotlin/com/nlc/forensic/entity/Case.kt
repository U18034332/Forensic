package com.nlc.forensic.entity

import jakarta.persistence.*
import org.springframework.data.annotation.CreatedDate
import org.springframework.data.annotation.LastModifiedDate
import java.time.LocalDateTime

@Entity
@Table(name = "case")
data class Case(
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    val caseID: Long = 0,
    val caseNumber: String = "",
    var description: String = "",
    var status: String = "",
    @ManyToOne
    var assignedTo: User? = null,

    @field:CreatedDate
    @Column(nullable = false, updatable = false)
    var createdDate: LocalDateTime = LocalDateTime.now(),

    @field:LastModifiedDate
    var lastModifiedDate: LocalDateTime = LocalDateTime.now()
) {
    @PrePersist
    fun prePersist() {
        createdDate = LocalDateTime.now()
    }

    @PreUpdate
    fun preUpdate() {
        lastModifiedDate = LocalDateTime.now()
    }
}
