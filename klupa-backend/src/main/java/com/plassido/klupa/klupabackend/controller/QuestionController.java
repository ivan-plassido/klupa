package com.plassido.klupa.klupabackend.controller;

import com.plassido.klupa.klupabackend.model.FavoriteQuestion;
import com.plassido.klupa.klupabackend.model.Question;
import com.plassido.klupa.klupabackend.service.FavoriteQuestionService;
import com.plassido.klupa.klupabackend.service.QuestionService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.nio.file.Path;
import java.util.List;

@RestController
@RequestMapping("/api/question/category-questions")
@RequiredArgsConstructor
public class QuestionController {

    private final QuestionService questionService;
    private final FavoriteQuestionService favoriteQuestionService;

    @GetMapping("/{categoryId}")
    @CrossOrigin
    List<Question> getCategoryQuestions(@PathVariable String categoryId) {
        return questionService.getCategoryQuestions(categoryId);
    }

    @GetMapping("/favorite/{categoryId}/{email}")
    @CrossOrigin
    List<FavoriteQuestion> getFavoriteQuestions(@PathVariable String categoryId, @PathVariable String email) {
        return favoriteQuestionService.getFavoriteQuestions(categoryId, email);
    }

    @PostMapping("/favorite/{questionId}")
    @CrossOrigin
    void addFavoriteQuestion(@PathVariable String questionId, @RequestBody String userEmail) {
        favoriteQuestionService.addFavoriteQuestion(questionId, userEmail);
    }

    @DeleteMapping("/favorite/{questionId}/{userEmail}")
    @CrossOrigin
    void deleteFavorite(@PathVariable String questionId, @PathVariable String userEmail) {
        favoriteQuestionService.deleteFavoriteQuestion(questionId, userEmail);
    }
}