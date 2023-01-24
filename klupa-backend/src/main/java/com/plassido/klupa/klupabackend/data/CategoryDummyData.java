package com.plassido.klupa.klupabackend.data;

import com.plassido.klupa.klupabackend.model.Category;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;
@Component
public class CategoryDummyData {

    public CategoryDummyData() {
    }

    public Category createCategory(String id, String parentId, String name, String description) {
        return new Category(id, parentId, name, description);
    }

    public List<Category> createCategories() {
        List<Category> categories = new ArrayList<>();
        Category cat1 = createCategory("1", null, "JAVA", "");
        Category subcat1 = createCategory("1", "1", "Collections", "");
        Category subcat2 = createCategory("2", "1", "OOP", "");
        Category subcat3 = createCategory("3", "1", "Access Modifiers", "");

        categories.add(cat1);
        categories.add(subcat1);
        categories.add(subcat2);
        categories.add(subcat3);

        return categories;
    }

    public Category getCategoryById(String categoryId) {
        List<Category> categories = createCategories();
        Category category = categories.stream().filter(cat -> categoryId.equals(cat.getId()))
                .findAny()
                .orElse(null);
        return category;
    }

    public List<Category> getChildCategories(String parentId) {
        return createCategories().stream().filter(cat -> parentId.equals(cat.getParentId()))
                .toList();
    }
}