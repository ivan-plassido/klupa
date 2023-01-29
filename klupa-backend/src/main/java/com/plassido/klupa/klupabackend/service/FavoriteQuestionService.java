package com.plassido.klupa.klupabackend.service;

import com.plassido.klupa.klupabackend.model.FavoriteQuestion;
import com.plassido.klupa.klupabackend.model.Question;
import com.plassido.klupa.klupabackend.repository.FavoriteQuestionRepository;
import com.plassido.klupa.klupabackend.repository.QuestionRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class FavoriteQuestionService {

    private final FavoriteQuestionRepository favoriteQuestionRepository;
    private final QuestionRepository questionRepository;

    public List<FavoriteQuestion> getFavoriteQuestions(String categoryId, String userEmail) {
        return favoriteQuestionRepository.getFavoriteQuestions(categoryId, userEmail);
    }

    public void addFavoriteQuestion(String questionId, String userEmail) {
        FavoriteQuestion existingQuestion = favoriteQuestionRepository.getQuestionByQuestionIdAndEmail(questionId, userEmail);
        if (existingQuestion != null) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST);
        }
        Question question = questionRepository.getQuestionById(questionId);
        FavoriteQuestion favoriteQuestion = new FavoriteQuestion(UUID.randomUUID().toString(), question.get_id(), question.getCategoryId(), userEmail);
        favoriteQuestionRepository.insert(favoriteQuestion);
    }

    public void deleteFavoriteQuestion(String questionId, String userEmail) {
        final var existingQuestion = favoriteQuestionRepository.getQuestionByQuestionIdAndEmail(questionId, userEmail);

        favoriteQuestionRepository.deleteByQuestionIdAndUserEmail(questionId, userEmail);
    }
}
