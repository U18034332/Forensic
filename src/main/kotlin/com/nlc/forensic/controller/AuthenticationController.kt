package com.nlc.forensic.controller

import com.google.gson.Gson
import com.nlc.forensic.dto.AuthenticationResponse
import com.nlc.forensic.dto.UserLoginRequest
import com.nlc.forensic.entity.User
import com.nlc.forensic.service.AuthenticationService
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping("/api/auth/")
class AuthenticationController(private val authService: AuthenticationService) {

    @PostMapping("login")
    fun login(
        @RequestBody request: User?
    ): ResponseEntity<AuthenticationResponse> {
        if (request != null) {
            println(request.email)
            println(request.passcode)
        }
        return ResponseEntity.ok(authService.authenticate(request!!))
    }

    @PostMapping("/register")
    fun register(@RequestBody request: User): ResponseEntity<AuthenticationResponse> {
        return ResponseEntity.ok(authService.addNewUser(request))
    }
}