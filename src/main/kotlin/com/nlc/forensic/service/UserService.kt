package com.nlc.forensic.service

import com.nlc.forensic.dto.UserDTO
import com.nlc.forensic.repository.JwtTokenRepository
import com.nlc.forensic.repository.UserRepository
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.security.core.userdetails.UserDetails
import org.springframework.security.core.userdetails.UserDetailsService
import org.springframework.security.core.userdetails.UsernameNotFoundException
import org.springframework.stereotype.Service
import com.nlc.forensic.entity.User
import com.nlc.forensic.enums.UserRoles
import org.springframework.security.core.context.SecurityContextHolder


@Service
class UserService: UserDetailsService {

    @Autowired
    private lateinit var userRepository: UserRepository
    @Autowired
    private lateinit var jwtTokenRepository: JwtTokenRepository

    @Throws(UsernameNotFoundException::class)
    override fun loadUserByUsername(username: String): UserDetails {
        return userRepository.findByEmail(username)
            .orElseThrow { UsernameNotFoundException("User is not valid") }
    }

    fun deleteUser(email: String) {
        val user = userRepository.findByEmail(email)
        val userJwtToken = jwtTokenRepository.findAllTokensByUser(user.get().id)
        for (tokens in userJwtToken) {
            jwtTokenRepository.delete(tokens)
        }
        userRepository.delete(user.get())
    }

    fun getAllUsers(): List<UserDTO> {
        val users = userRepository.findAll()
        val allUsers = mutableListOf<UserDTO>()

        if (users.isEmpty()) {
            return emptyList()
        }

        for (user in users) {
            val email = user.email
            val firstName = user.firstName
            val lastName = user.lastName

            if (email != null && firstName != null && lastName != null) {
                val userDTO = UserDTO(email, firstName, lastName, user.role.toString(), user.id.toString())
                allUsers.add(userDTO)
            }
        }

        return allUsers
    }


    fun getLoggedInUserDetails(): UserDTO? {
        val loggedInUserEmail = SecurityContextHolder.getContext().authentication.name
        val user = userRepository.findByEmail(loggedInUserEmail)
            .orElseThrow { IllegalArgumentException("Logged-in user not found in the system") }
        val loggedInUser = user.role?.let {
            user.lastName?.let { it1 ->
                user.firstName?.let { it2 ->
                    user.email?.let { it3 ->
                        UserDTO(
                            email = it3,
                            firstName = it2,
                            lastName = it1,
                            role = it.name,
                            userID = user.id.toString()
                        )
                    }
                }
            }
        }
        return loggedInUser
    }

    fun findUsersByRole(role: UserRoles): List<User> {
        return userRepository.findByRole(role)
    }

    fun findUsersWithUserRole(): List<UserDTO> {
        val users = findUsersByRole(UserRoles.USER)
        val allUsers = mutableListOf<UserDTO>()

        if (users.isEmpty()) {
            return emptyList()
        }

        for (user in users) {
            val email = user.email
            val firstName = user.firstName
            val lastName = user.lastName

            if (email != null && firstName != null && lastName != null) {
                val userDTO = UserDTO(email, firstName, lastName, user.role.toString(), user.id.toString())
                allUsers.add(userDTO)
            }
        }

        return allUsers
    }


    fun findUsersWithAdminRole(): List<UserDTO> {
        val admins = findUsersByRole(UserRoles.ADMIN)
        val allAdmins = mutableListOf<UserDTO>()

        if (admins.isEmpty()) {
            return emptyList()
        }

        for (admin in admins) {
            val email = admin.email
            val firstName = admin.firstName
            val lastName = admin.lastName

            if (email != null && firstName != null && lastName != null) {
                val adminDTO = UserDTO(email, firstName, lastName, admin.role.toString(), admin.id.toString())
                allAdmins.add(adminDTO)
            }
        }

        return allAdmins
    }

}