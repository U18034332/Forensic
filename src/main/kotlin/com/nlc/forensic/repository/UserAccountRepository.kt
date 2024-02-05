package com.nlc.forensic.repository

import com.nlc.forensic.entity.UserAccount
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository

@Repository
interface UserAccountRepository: JpaRepository<UserAccount, Long> {
}