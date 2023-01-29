package com.plassido.klupa.klupabackend.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.UUID;

@Document("favoriteQuestions")
@AllArgsConstructor
@Getter
@Setter
@ToString
public class FavoriteQuestion {
    private String _id;
    private String questionId;
    private String categoryId;
    private String userEmail;

}