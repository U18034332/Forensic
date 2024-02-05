package com.nlc.forensic.dto

data class UserAccountDTO(
    val id: Long,
    val username: String,
    val password: String,
    val role: String
)
