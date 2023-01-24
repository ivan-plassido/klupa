package com.plassido.klupa.klupabackend.service;

import com.plassido.klupa.klupabackend.data.CategoryDummyData;
import com.plassido.klupa.klupabackend.model.Category;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CategoryService {

    private final CategoryDummyData categoryDummyData;

    public CategoryService(CategoryDummyData categoryDummyData) {
        this.categoryDummyData = categoryDummyData;
    }

//    private final CategoryRepository categoryRepository;
//    public CategoryService(CategoryRepository categoryRepository) {
//        this.categoryRepository = categoryRepository;
//    }

    public Category getCategoryById(String categoryId) {
        return categoryDummyData.getCategoryById(categoryId);
//        return categoryRepository.getCategoryById(categoryId);
    }

    public List<Category> getChildCategories(String parentId) {
        return categoryDummyData.getChildCategories(parentId);
      //  return categoryRepository.getChildCategories(parentId);
    }
}