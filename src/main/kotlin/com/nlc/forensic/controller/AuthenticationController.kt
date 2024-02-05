package com.nlc.forensic.controller

import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping("/api/v1/auth")
class AuthenticationController {
    @PostMapping("login")
    fun createAuthenticationToken(@RequestBody authBody: String){
        // TODO
    }
}