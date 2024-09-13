package com.nlc.forensic.dto

data class UserDTO(
    val email: String,
    val firstName: String,
    val lastName: String,
    val role: String,
    val userID: String,
    val workload: Int = 0
    )
