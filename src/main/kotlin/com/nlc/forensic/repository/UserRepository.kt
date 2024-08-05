package com.nlc.forensic.repository

import com.nlc.forensic.entity.User
import com.nlc.forensic.enums.UserRoles
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository
import java.util.Optional


@Repository
interface UserRepository: JpaRepository<User,Long> {
    fun findByEmail(email: String): Optional<User>
    fun findByRole(role: UserRoles): List<User>
}