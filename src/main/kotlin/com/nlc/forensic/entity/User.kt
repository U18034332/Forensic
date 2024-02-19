package com.nlc.forensic.entity

import com.nlc.forensic.enums.UserRoles
import jakarta.persistence.*
import org.springframework.security.core.authority.SimpleGrantedAuthority
import org.springframework.security.core.userdetails.UserDetails


@Entity
@Table(name="users")
data class User(
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id")
    var id: Int? = null,

    @Column(name = "first_name")
var firstName: String? = null,

@Column(name = "last_name")
var lastName: String? = null,

@Column(name = "username")
var email: String? = null,

@Column(name = "password")
var passcode: String? = null,

@Enumerated(value = EnumType.STRING)
var role: UserRoles? = null

) : UserDetails {
    override fun getAuthorities(): List<SimpleGrantedAuthority> {
       return listOf(SimpleGrantedAuthority(role?.name))
    }

    override fun getPassword(): String? {
        return passcode
    }

    override fun getUsername(): String? {
        return email
    }

    override fun isAccountNonExpired(): Boolean {
        return true
    }

    override fun isAccountNonLocked(): Boolean {
        return true
    }

    override fun isCredentialsNonExpired(): Boolean {
        return true
    }

    override fun isEnabled(): Boolean {
        return true
    }
}

