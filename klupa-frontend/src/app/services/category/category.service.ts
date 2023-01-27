import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import Category from '../../models/category.model';
import { CategoryServiceFactory } from './category-service.factory';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(
    private factory: CategoryServiceFactory) { }

  getChildCategories(parentId: string | null): Observable<Category[]> {
    return this.factory.getService().getChildCategories(parentId);
  }

  getCategory(categoryId: string | null): Observable<Category> {
    return this.factory.getService().getCategory(categoryId);
  }
}

export interface ICategoryService {
  getChildCategories(parentId: string | null): Observable<Category[]>;
  getCategory(categoryId: string | null): Observable<Category>;
}
