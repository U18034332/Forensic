package com.nlc.forensic.entity

import jakarta.persistence.*
import org.springframework.security.core.GrantedAuthority
import org.springframework.security.core.userdetails.UserDetails


@Entity
@Table(name="users")
data class User(
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    var userId: Int? = null,

    @Column(unique=true)
    var email: String = "",

    var passcode: String = "",

    @ManyToMany(fetch=FetchType.EAGER)
    @JoinTable(
        name="user_role_junction",
        joinColumns = [JoinColumn(name="user_id")],
        inverseJoinColumns = [JoinColumn(name="role_id")]
    )
    var authorities: Set<Roles> = HashSet()
) : UserDetails {
    override fun getAuthorities(): Collection<out GrantedAuthority> {
        return authorities
    }

    override fun getPassword(): String {
        return passcode
    }

    override fun getUsername(): String {
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

