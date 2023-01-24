package com.plassido.klupa.klupabackend.repository;

import com.plassido.klupa.klupabackend.model.Question;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface QuestionRepository {

    List<Question> getCategoryQuestions(String categoryId);
}