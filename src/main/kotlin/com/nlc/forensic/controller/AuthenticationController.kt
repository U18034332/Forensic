package com.nlc.forensic.controller

import com.google.gson.Gson
import com.nlc.forensic.dto.UserLoginRequest
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping("/api/auth")
class AuthenticationController {

    @PostMapping("login")
    fun createAuthenticationToken(@RequestBody loginRequest: UserLoginRequest): ResponseEntity<String>{
        // TODO
        val res = Gson().toJson("Login success")
        val username = loginRequest.username
        val password = loginRequest.password
        println(username)
        println(password)
        return ResponseEntity.ok(res)
    }
}