package com.nlc.forensic.entity

import jakarta.persistence.*
import org.springframework.security.core.GrantedAuthority


@Entity
@Table(name = "roles")
class Roles: GrantedAuthority {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "role_id")
    private val roleId: Int? = null
    private val authority: String = ""
    override fun getAuthority(): String {
        TODO("Not yet implemented")
    }
}