package com.plassido.klupa.klupabackend.model;

import lombok.*;
import org.springframework.lang.Nullable;
@Data
@NoArgsConstructor
@Getter
@Setter
@ToString
public class Category {

    private String id;
    @Nullable
    private String parentId;
    private String name;
    private String description;

    public Category(String id, @Nullable String parentId, String name, String description) {
        this.id = id;
        this.parentId = parentId;
        this.name = name;
        this.description = description;
    }
}
