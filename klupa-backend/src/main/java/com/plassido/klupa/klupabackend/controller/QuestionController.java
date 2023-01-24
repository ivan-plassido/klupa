package com.plassido.klupa.klupabackend.controller;

import com.plassido.klupa.klupabackend.model.Question;
import com.plassido.klupa.klupabackend.service.QuestionService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/question/category-questions")
@RequiredArgsConstructor
public class QuestionController {

    @Autowired
    private final QuestionService questionService;

    @GetMapping("/{categoryId}")
    List<Question> getCategoryQuestions(@PathVariable String categoryId) {
        return questionService.getCategoryQuestions(categoryId);
    }
}