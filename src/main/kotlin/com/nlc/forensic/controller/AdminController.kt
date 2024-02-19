package com.nlc.forensic.controller

import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController


@RestController
@RequestMapping("/")
class AdminController {
    @GetMapping("admin")
    fun getAdmin(): String{
        return "Admin login"
    }
}