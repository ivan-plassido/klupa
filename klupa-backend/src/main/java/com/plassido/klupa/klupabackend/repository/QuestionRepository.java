package com.plassido.klupa.klupabackend.repository;

import com.plassido.klupa.klupabackend.model.Question;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface QuestionRepository extends MongoRepository<Question, String> {
    @Query("{categoryId : '?0'}")
    List<Question> getCategoryQuestions(String categoryId);

    @Query("{_id : '?0'}")
    Question getQuestionById(String questionId);

//    @Query("{_id : '?0', favourite: true}")
//    void (String _id);
}