package com.nlc.forensic.service

import com.nlc.forensic.repository.JwtTokenRepository
import com.nlc.forensic.repository.UserRepository
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.security.core.userdetails.UserDetails
import org.springframework.security.core.userdetails.UserDetailsService
import org.springframework.security.core.userdetails.UsernameNotFoundException
import org.springframework.stereotype.Service


@Service
class UserService: UserDetailsService {

    @Autowired
    private lateinit var userRepository: UserRepository
    @Autowired
    private lateinit var jwtTokenRepository: JwtTokenRepository

    @Throws(UsernameNotFoundException::class)
    override fun loadUserByUsername(username: String): UserDetails {
        return userRepository.findByEmail(username)
            .orElseThrow { UsernameNotFoundException("User is not valid") }
    }

    fun deleteUser(email: String) {
        val user = userRepository.findByEmail(email)
        val userJwtToken = jwtTokenRepository.findAllTokensByUser(user.get().id)
        for (tokens in userJwtToken) {
            jwtTokenRepository.delete(tokens)
        }
        userRepository.delete(user.get())
    }

}