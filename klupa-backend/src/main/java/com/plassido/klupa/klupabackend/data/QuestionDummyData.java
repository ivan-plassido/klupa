package com.plassido.klupa.klupabackend.data;

import com.plassido.klupa.klupabackend.model.Question;

import java.util.ArrayList;
import java.util.List;

public class QuestionDummyData {

    public Question createQuestion(String id, String categoryId, String title, String question, String answer) {
        return new Question(id, categoryId, title, question, answer);
    }

    public List<Question> createQuestions() {
        List<Question> questions = new ArrayList<>();
        Question q1 = createQuestion("1", "1", "HashMap", "What is Hash Map?", "answer 1");
        Question q2 = createQuestion("2", "1", "HashTree", "What is Hash Tree?", "answer 2");
        Question q3 = createQuestion("3", "1", "ArrayList", "What is Array List?", "answer 3");

        Question q4 = createQuestion("4", "2", "Polymorphism", "What is Polymorphism?", "answer 4");
        Question q5 = createQuestion("5", "2", "Encapsulation", "What is Encapsulation?", "answer 5");
        Question q6 = createQuestion("6", "2", "Inheritance", "What is Inheritance?", "answer 6");

        questions.add(q1);
        questions.add(q2);
        questions.add(q3);
        questions.add(q4);
        questions.add(q5);
        questions.add(q6);

        return questions;
    }

    public List<Question> getCategoryQuestions(String categoryId) {
        return createQuestions().stream().filter(q -> categoryId.equals(q.getCategoryId()))
                .toList();
    }
}