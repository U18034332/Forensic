package com.nlc.forensic.entity

import jakarta.persistence.*


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
)