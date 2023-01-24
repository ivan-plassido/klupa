package com.plassido.klupa.klupabackend.service;

import com.plassido.klupa.klupabackend.model.Category;
import com.plassido.klupa.klupabackend.repository.CategoryRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class CategoryService {
    private final CategoryRepository categoryRepository;

    public Category getCategoryById(String categoryId) {
        return categoryRepository.getCategoryById(categoryId);
    }

    public List<Category> getChildCategories(String parentId) {
        return categoryRepository.getChildCategories(parentId);
    }
}