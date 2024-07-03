package com.nlc.forensic.service

import com.nlc.forensic.dto.UserDTO
import com.nlc.forensic.repository.JwtTokenRepository
import com.nlc.forensic.repository.UserRepository
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.security.core.userdetails.UserDetails
import org.springframework.security.core.userdetails.UserDetailsService
import org.springframework.security.core.userdetails.UsernameNotFoundException
import org.springframework.stereotype.Service
import com.nlc.forensic.entity.User


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

    fun getAllUsers(): List<UserDTO>? {
        val users = userRepository.findAll()
        val allUsers = mutableListOf<UserDTO>()

        if (users.isEmpty()) {
            return emptyList()
        }
        for (user in users) {
            user.email?.let { user.firstName?.let { it1 -> user.lastName?.let { it2 -> UserDTO(it, it1, it2) } } }?.let { allUsers.add(it) }
        }
        return allUsers
    }
}