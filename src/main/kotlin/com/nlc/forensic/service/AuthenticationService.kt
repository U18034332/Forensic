package com.nlc.forensic.service

import com.nlc.forensic.dto.AuthenticationResponse
import com.nlc.forensic.entity.JwtToken
import com.nlc.forensic.entity.User
import com.nlc.forensic.repository.JwtTokenRepository
import com.nlc.forensic.repository.UserRepository
import org.springframework.security.authentication.AuthenticationManager
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken
import org.springframework.security.crypto.password.PasswordEncoder
import org.springframework.stereotype.Service

@Service
class AuthenticationService(private val userRepository: UserRepository,
    private val jwtService: JwtService,
    private val passwordEncoder: PasswordEncoder,
    private val tokenRepository: JwtTokenRepository,
    private val authenticationManager: AuthenticationManager

) {
    fun addNewUser(request: User): AuthenticationResponse{
        // Check if user already exists. If exists then authenticate the user
        if (request.email?.let { userRepository.findByEmail(it).isPresent } == true) {
            return AuthenticationResponse(null, "User already exists")
        }

        val user = User(
            firstName = request.firstName,
            lastName = request.lastName,
            email = request.email,
            passcode = passwordEncoder.encode(request.passcode),
            role = request.role
        )

        val savedUser = userRepository.save(user)

        val jwt = jwtService.generateToken(savedUser)

        saveUserToken(jwt, savedUser)

        return AuthenticationResponse(jwt, "User registration was successful")

    }

    fun authenticate(request: User): AuthenticationResponse {
        authenticationManager.authenticate(
            UsernamePasswordAuthenticationToken(
                request.username,
                request.password
            )
        )

        val user = request.username.let { request.username?.let { it1 -> userRepository.findByEmail(it1).orElseThrow() } }
        val jwt = user?.let { jwtService.generateToken(it) }

        if (user != null) {
            revokeAllTokenByUser(user)
        }
        if (user != null) {
            if (jwt != null) {
                saveUserToken(jwt, user)
            }
        }

        return AuthenticationResponse(jwt, "User login was successful")
    }

    private fun revokeAllTokenByUser(user: User) {
        val validTokens = user.id.let { tokenRepository.findAllTokensByUser(it) }
        if (validTokens.isEmpty()) {
            return
        }

        validTokens.forEach { it.loggedOut = true }

        validTokens.let {
            tokenRepository.saveAll(it)
        }
    }


    private fun saveUserToken(jwt: String, user: User) {
        val token = JwtToken(token = jwt, loggedOut = false, user = user)
        tokenRepository.save(token)
    }

}