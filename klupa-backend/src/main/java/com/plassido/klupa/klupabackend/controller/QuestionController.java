package com.plassido.klupa.klupabackend.controller;

import com.plassido.klupa.klupabackend.model.Question;
import com.plassido.klupa.klupabackend.service.QuestionService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/question/category-questions")
@RequiredArgsConstructor
public class QuestionController {

    private final QuestionService questionService;

    @GetMapping("/{categoryId}")
    @CrossOrigin
    List<Question> getCategoryQuestions(@PathVariable String categoryId) {
        return questionService.getCategoryQuestions(categoryId);
    }
    @PostMapping("/toggleFavorite")
    @CrossOrigin
    void toggleFavorite(@RequestBody String questionId) {
        questionService.toggleFavorite(questionId);
    }
}