package com.plassido.klupa.klupabackend.repository;

import com.plassido.klupa.klupabackend.model.Category;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CategoryRepository {
    Category getCategoryById(String categoryId);

    List<Category> getChildCategories(String parentId);
}