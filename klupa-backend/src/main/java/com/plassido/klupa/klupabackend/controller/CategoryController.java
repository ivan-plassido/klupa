package com.plassido.klupa.klupabackend.controller;

import com.plassido.klupa.klupabackend.model.Category;
import com.plassido.klupa.klupabackend.service.CategoryService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/category")
@RequiredArgsConstructor
public class CategoryController {
    private final CategoryService categoryService;

    @GetMapping("/{categoryId}")
    Category getCategoryById(@PathVariable String categoryId) {
        return categoryService.getCategoryById(categoryId);
    }

    @GetMapping({"/child-categories", "/child-categories/{parentId}"})
    List<Category> getChildCategories(@PathVariable Optional<String> parentId) {
        return parentId.isPresent() ? categoryService.getChildCategories(parentId.get()) : categoryService.getChildCategories(null);
    }
}