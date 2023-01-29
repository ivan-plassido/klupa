package com.plassido.klupa.klupabackend.service;

import com.plassido.klupa.klupabackend.model.Question;
import com.plassido.klupa.klupabackend.repository.QuestionRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class QuestionService {

    private final QuestionRepository questionRepository;

    public List<Question> getCategoryQuestions(String categoryId) {
        return questionRepository.getCategoryQuestions(categoryId);
    }
}