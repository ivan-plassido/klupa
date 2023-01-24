package com.plassido.klupa.klupabackend;

import com.plassido.klupa.klupabackend.repository.CategoryRepository;
import com.plassido.klupa.klupabackend.repository.QuestionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;

@SpringBootApplication
@EnableMongoRepositories
public class KlupaBackendApplication {

	@Autowired
	CategoryRepository categoryRepository;

	@Autowired
	QuestionRepository questionRepository;

	public static void main(String[] args) {
		SpringApplication.run(KlupaBackendApplication.class, args);
	}
}