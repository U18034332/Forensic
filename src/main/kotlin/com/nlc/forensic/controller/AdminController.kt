package com.nlc.forensic.controller

import com.nlc.forensic.constants.ResponseConstant
import com.nlc.forensic.dto.AuthenticationResponse
import com.nlc.forensic.dto.UserDTO
import com.nlc.forensic.entity.User
import com.nlc.forensic.enums.UserRoles
import com.nlc.forensic.service.AuthenticationService
import com.nlc.forensic.service.UserService
import org.springframework.http.ResponseEntity
import org.springframework.security.core.userdetails.UsernameNotFoundException
import org.springframework.web.bind.annotation.*


@RestController
@RequestMapping("api/v1/admin-only")
class AdminController(private val authService: AuthenticationService, private val userService: UserService) {
//    @GetMapping("/admin")
//    fun getAdmin(): String{
//        return "Admin login"
//    }
    @PostMapping("/add-user")
    fun register(@RequestBody request: User): ResponseEntity<AuthenticationResponse> {
        val response = authService.addNewUser(request)

        return when (response.message) {
            ResponseConstant.USER_ALREADY_EXIST,
            ResponseConstant.REQUIRED_PARAMETERS_NOT_SET -> ResponseEntity.badRequest().body(response)
            else -> ResponseEntity.ok(response)
        }
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

    @GetMapping("/users/role/user")
    fun getUsersWithUserRole(): List<UserDTO?> {
        return userService.findUsersWithUserRole()
    }

    @GetMapping("/users/role/admin")
    fun getUsersWithAdminRole(): List<UserDTO?> {
        return userService.findUsersWithAdminRole()
    }

}