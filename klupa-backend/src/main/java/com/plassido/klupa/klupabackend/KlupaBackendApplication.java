package com.plassido.klupa.klupabackend;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.data.mongo.MongoDataAutoConfiguration;
import org.springframework.boot.autoconfigure.mongo.MongoAutoConfiguration;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;

@SpringBootApplication(exclude = {
		MongoAutoConfiguration.class,
		MongoDataAutoConfiguration.class})
@Configuration
@ComponentScan(basePackages = "com.plassido.klupa.klupabackend")
public class KlupaBackendApplication {

	public static void main(String[] args) {
		SpringApplication.run(KlupaBackendApplication.class, args);
	}

}