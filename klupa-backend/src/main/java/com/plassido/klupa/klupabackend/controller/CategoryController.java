package com.plassido.klupa.klupabackend.controller;

import com.plassido.klupa.klupabackend.model.Category;
import com.plassido.klupa.klupabackend.service.CategoryService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/category")
@RequiredArgsConstructor
public class CategoryController {
    @Autowired
    private final CategoryService categoryService;

    @GetMapping("/{categoryId}")
    Category getCategoryById(@PathVariable String categoryId) {
        return categoryService.getCategoryById(categoryId);
    }

    @GetMapping("/child-categories/{parentId}")
    List<Category> getChildCategories(@PathVariable String parentId) {
        return categoryService.getChildCategories(parentId);
    }
}