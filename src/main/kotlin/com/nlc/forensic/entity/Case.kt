package com.nlc.forensic.entity

import jakarta.persistence.*
import org.springframework.data.annotation.CreatedDate
import org.springframework.data.annotation.LastModifiedDate
import java.time.LocalDateTime

@Entity
@Table(name = "cases")
data class Case(
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    val caseId: Long = 0,
    val caseNumber: String = "",
    var type: String = "",
    var status: String = "",
    var province: String = "",
    var channel: String = "",
    var complexity: String = "",
    @ManyToOne
    @JoinColumn(name = "assigned_user")
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
