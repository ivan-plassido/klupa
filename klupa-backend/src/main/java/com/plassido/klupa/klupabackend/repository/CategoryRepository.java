package com.plassido.klupa.klupabackend.repository;

import com.plassido.klupa.klupabackend.model.Category;
import lombok.RequiredArgsConstructor;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CategoryRepository extends MongoRepository<Category, String> {

    @Query("{_id : '?0'}")
    Category getCategoryById(String categoryId);

    @Query("{parentId : '?0'}")
    List<Category> getChildCategories(String parentId);
}