package com.plassido.klupa.klupabackend.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Arrays;
import java.util.List;

@RestController
@RequestMapping("/api/child-categories")
public class CategoryController {
    @GetMapping
    List<String> getChildCategories() {
        // TODO: replace this dummy implementation
        // TODO: method should accept parent category id
        return Arrays.asList("this", "is", "dummy");
    }
}
