import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import Category from '../models/category.model';

// TODO: current implementation is relying on loading of all categories and filtering, reimplement these methods if necessary after endpoints become available
@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private CATEGORIES_ENDPOINT = "/assets/categories.json"; // TODO: replace mock after backend is finished

  constructor(private http: HttpClient) { }

  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(this.CATEGORIES_ENDPOINT);
  }

  getChildCategories(parentId: string | null): Observable<Category[]> {
    return this.getCategories().pipe(
      map(categories => categories.filter(category => category.parentId === parentId))
    );
  }

  getCategory(categoryId: string | null): Observable<Category> {
    return this.getCategories().pipe(map(categories => categories.filter(category => category.id === categoryId)[0]));
  }
}
