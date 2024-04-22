package com.nlc.forensic.service

import com.nlc.forensic.constants.ResponseConstant
import com.nlc.forensic.dto.AuthenticationResponse
import com.nlc.forensic.dto.PasswordDTO
import com.nlc.forensic.dto.UserDTO
import com.nlc.forensic.entity.JwtToken
import com.nlc.forensic.entity.User
import com.nlc.forensic.repository.JwtTokenRepository
import com.nlc.forensic.repository.UserRepository
import org.springframework.security.authentication.AuthenticationManager
import org.springframework.security.authentication.BadCredentialsException
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
        // Check if the email is provided
        if (request.email.isNullOrBlank()) {
            return AuthenticationResponse(null, ResponseConstant.EMAIL_NOT_PROVIDED)
        }

        // Check if user already exists. If exists then authenticate the user
        if (userRepository.findByEmail(request.email!!).isPresent) {
            println(userRepository.findByEmail(request.email!!))
            return AuthenticationResponse(null, ResponseConstant.USER_ALREADY_EXIST)
        }

        // Check if other required parameters are provided
        if (request.role?.name.isNullOrBlank() ||
            request.firstName.isNullOrBlank() ||
            request.lastName.isNullOrBlank() ||
            request.passcode.isNullOrBlank()
        ) {
            return AuthenticationResponse(null, ResponseConstant.REQUIRED_PARAMETERS_NOT_SET)
        }

        val user = User(
            firstName = request.firstName!!,
            lastName = request.lastName!!,
            email = request.email!!,
            passcode = passwordEncoder.encode(request.passcode!!),
            role = request.role!!
        )

        val savedUser = userRepository.save(user)

        val jwt = jwtService.generateToken(savedUser)

        saveUserToken(jwt, savedUser)

        return AuthenticationResponse(jwt, "User registration was successful")


    }

    fun authenticate(request: User): AuthenticationResponse {
        try {
            authenticationManager.authenticate(
                UsernamePasswordAuthenticationToken(
                    request.username,
                    request.password
                )
            )
        } catch (exception: BadCredentialsException) {
            return AuthenticationResponse(null, ResponseConstant.INVALID_CREDENTIALS)
        }


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

    fun generateRandomPassword(length: Int): String {
        val chars = ('a'..'z') + ('A'..'Z') + ('0'..'9')
        return (1..length)
            .map { chars.random() }
            .joinToString("")
    }

    fun updateUserPassword(request: String): PasswordDTO? {
        val user = userRepository.findByEmail(request)
        val newPasscode = generateRandomPassword(16)
        user.get().passcode = passwordEncoder.encode(newPasscode)
        userRepository.save(user.get())
        return user.get().email?.let { PasswordDTO(it, newPasscode) }
    }
}