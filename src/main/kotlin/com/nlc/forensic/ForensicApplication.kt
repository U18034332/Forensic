package com.nlc.forensic

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication
import io.github.cdimascio.dotenv.Dotenv

@SpringBootApplication

class ForensicApplication

fun main(args: Array<String>) {
	runApplication<ForensicApplication>(*args)
}
