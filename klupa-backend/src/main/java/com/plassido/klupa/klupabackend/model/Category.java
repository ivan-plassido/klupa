package com.plassido.klupa.klupabackend.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.lang.Nullable;
@Document("categories")
@AllArgsConstructor
@Getter
@Setter
@ToString
public class Category {
    private String _id;
    @Nullable
    private String parentId;
    private String name;
}
