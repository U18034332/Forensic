package com.nlc.forensic.controller

import com.nlc.forensic.dto.UserDTO
import com.nlc.forensic.service.UserService
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController


@RestController
@RequestMapping("api/v1/users")
class UserController(private val userService: UserService) {
    @GetMapping("get/user")
    fun getUser(): ResponseEntity<UserDTO?>{
        return ResponseEntity.ok(userService.getLoggedInUserDetails())
    }
}