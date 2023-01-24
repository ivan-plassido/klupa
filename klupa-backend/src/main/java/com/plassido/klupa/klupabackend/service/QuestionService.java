package com.plassido.klupa.klupabackend.service;

import com.plassido.klupa.klupabackend.data.QuestionDummyData;
import com.plassido.klupa.klupabackend.model.Question;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class QuestionService {

    private QuestionDummyData questionDummyData;

    public QuestionService(QuestionDummyData questionDummyData) {
        this.questionDummyData = questionDummyData;
    }

    //    private final QuestionRepository questionRepository;
//    public QuestionService(QuestionRepository questionRepository) {
//        this.questionRepository = questionRepository;
//    }

    public List<Question> getCategoryQuestions(String categoryId) {
        return questionDummyData.getCategoryQuestions(categoryId);
//        return questionRepository.getCategoryQuestions(categoryId);
    }
}