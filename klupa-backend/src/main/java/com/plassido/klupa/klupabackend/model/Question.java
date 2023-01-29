package com.plassido.klupa.klupabackend.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import org.springframework.data.mongodb.core.mapping.Document;

@Document("questions")
@AllArgsConstructor
@Getter
@Setter
@ToString
public class Question {
    private String _id;
    private String question;
    private String answer;
    private String categoryId;
}