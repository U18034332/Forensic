package com.nlc.forensic.controller

import com.google.gson.Gson
import com.nlc.forensic.constants.ResponseConstant
import com.nlc.forensic.dto.AuthenticationResponse
import com.nlc.forensic.dto.UserEmailDTO
import com.nlc.forensic.entity.User
import com.nlc.forensic.repository.UserRepository
import com.nlc.forensic.service.AuthenticationService
import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping("/api/v1/auth/")
class AuthenticationController(private val authService: AuthenticationService,
                               private val userRepository: UserRepository
) {

    @PostMapping("login")
    fun login(
        @RequestBody request: User?
    ): ResponseEntity<AuthenticationResponse> {
        if (authService.authenticate(request!!).token == null) {
            return ResponseEntity
                .status(HttpStatus.UNAUTHORIZED)
                .body(AuthenticationResponse(null, ResponseConstant.INVALID_CREDENTIALS))
        }
        return ResponseEntity.ok(authService.authenticate(request))
    }

    @PostMapping("forgot_password")
    fun resetPassword(@RequestBody request: UserEmailDTO): ResponseEntity<out Any> {
        println(request)
        if (request.email.isBlank()) {
            return ResponseEntity.badRequest().body(ResponseConstant.REQUIRED_PARAMETERS_NOT_SET)
        }
        if (!userRepository.findByEmail(request.email).isPresent) {
            return ResponseEntity.badRequest().body(ResponseConstant.USER_NOT_EXISTS)
        }
        return ResponseEntity.ok(authService.updateUserPassword(request.email))
    }
}