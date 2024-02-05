package com.nlc.forensic.entity

import jakarta.persistence.Entity
import jakarta.persistence.GeneratedValue
import jakarta.persistence.GenerationType
import jakarta.persistence.Id
import jakarta.persistence.Table

@Entity
@Table(name = "user_account")
class UserAccount(
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private val id: Int? = null,
    var email: String = "",
    var password: String = "",
    var role: String = ""
)