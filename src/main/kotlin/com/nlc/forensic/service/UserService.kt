package com.nlc.forensic.service

import com.nlc.forensic.repository.UserRepository
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.security.core.userdetails.UserDetails
import org.springframework.security.core.userdetails.UserDetailsService
import org.springframework.security.core.userdetails.UsernameNotFoundException

class UserService: UserDetailsService {

    @Autowired
    private lateinit var userRepository: UserRepository

    @Throws(UsernameNotFoundException::class)
    override fun loadUserByUsername(username: String): UserDetails {
        println("In the user details service") // For verification

        return userRepository.findByEmail(username)
            .orElseThrow { UsernameNotFoundException("user is not valid") }
    }
}