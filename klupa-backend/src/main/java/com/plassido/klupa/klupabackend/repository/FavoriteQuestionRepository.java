package com.plassido.klupa.klupabackend.repository;

import com.plassido.klupa.klupabackend.model.FavoriteQuestion;
import com.plassido.klupa.klupabackend.model.Question;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface FavoriteQuestionRepository extends MongoRepository<FavoriteQuestion, String> {
    @Query("{categoryId : '?0', userEmail: '?1'}")
    List<FavoriteQuestion> getFavoriteQuestions(String categoryId, String userEmail);

    @Query("{questionId : '?0', userEmail: '?1'}")
    FavoriteQuestion getQuestionByQuestionIdAndEmail(String questionId, String userEmail);
}
