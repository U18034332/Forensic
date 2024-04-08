package com.nlc.forensic.controller

import com.nlc.forensic.constants.ResponseConstant
import com.nlc.forensic.dto.AuthenticationResponse
import com.nlc.forensic.dto.UserDTO
import com.nlc.forensic.entity.User
import com.nlc.forensic.service.AuthenticationService
import com.nlc.forensic.service.UserService
import org.springframework.http.ResponseEntity
import org.springframework.security.core.userdetails.UsernameNotFoundException
import org.springframework.web.bind.annotation.*


@RestController
@RequestMapping("api/admin_only")
class AdminController(private val authService: AuthenticationService, private val userService: UserService) {
//    @GetMapping("/admin")
//    fun getAdmin(): String{
//        return "Admin login"
//    }
    @PostMapping("/add_user")
    fun register(@RequestBody request: User): ResponseEntity<AuthenticationResponse> {
        if (authService.addNewUser(request).message == ResponseConstant.USER_ALREADY_EXIST) {
            return ResponseEntity.badRequest().body(authService.addNewUser(request))
        }
        if (authService.addNewUser(request).message == ResponseConstant.REQUIRED_PARAMETERS_NOT_SET) {
            return ResponseEntity.badRequest().body(authService.addNewUser(request))
        }
        return ResponseEntity.ok(authService.addNewUser(request))
    }


    @DeleteMapping("/remove/{email}")
    fun deleteUserByEmail(@PathVariable email: String?): ResponseEntity<String> {
        if (email.isNullOrBlank()) {
            return ResponseEntity.badRequest().body(ResponseConstant.REQUIRED_PARAMETERS_NOT_SET)
        }
        return try {
            val username = userService.loadUserByUsername(email)
            userService.deleteUser(username.username)
            ResponseEntity.ok(ResponseConstant.USER_REMOVED)
        } catch (userNotFound: UsernameNotFoundException) {
            ResponseEntity.badRequest().body(ResponseConstant.USER_NOT_EXISTS)
        }
    }

    @GetMapping("/get/all/users")
    fun getUsers(): ResponseEntity<List<UserDTO>> {
        return ResponseEntity.ok(userService.getAllUsers())
    }

}