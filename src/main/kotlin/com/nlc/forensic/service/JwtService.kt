package com.nlc.forensic.service

import com.nlc.forensic.entity.User
import io.jsonwebtoken.Jwts
import org.springframework.stereotype.Service
import java.util.*
import javax.crypto.SecretKey
import javax.crypto.spec.SecretKeySpec


@Service
class JwtService {
    var SECRET_KEY = "6358ade95baf127c630dab499fb1bb69e69b7068ac5452f3911ba658d950f1a6"

    fun generateToken(user: User):String{
        var token = Jwts
            .builder()
            .setSubject(user.email)
            .setIssuedAt(Date(System.currentTimeMillis()))
            .setExpiration(Date(System.currentTimeMillis() + 60*60*100))
            .signWith(getSigningKey())
            .compact()

        return token
    }

    private fun getSigningKey(): SecretKey {
        val keyBytes = Base64.getUrlDecoder().decode(SECRET_KEY)
        return SecretKeySpec(keyBytes, "HmacSHA256")
    }

}