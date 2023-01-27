import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import Category from '../../models/category.model';
import { ICategoryService } from './category.service';

@Injectable({
  providedIn: 'root'
})
export class AssetsCategoryService implements ICategoryService {

  private CATEGORIES_ENDPOINT = 'assets/categories/categories.json';

  constructor(private http: HttpClient) { }

  getChildCategories(parentId: string | null): Observable<Category[]> {
    return this.getCategories().pipe(
      map(categories => categories.filter(category => category.parentId === parentId))
    );
  }

  getCategory(categoryId: string | null): Observable<Category> {
    return this.getCategories().pipe(map(categories => categories.filter(category => category._id === categoryId)[0]));
  }

  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(this.CATEGORIES_ENDPOINT);
  }
}
