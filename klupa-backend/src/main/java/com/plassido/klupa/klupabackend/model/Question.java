package com.plassido.klupa.klupabackend.model;


import lombok.*;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@ToString
public class Question {

    private String id;
    private String categoryId;
    private String title;
    private String question;
    private String answer;
}
