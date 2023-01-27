import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RENDER_API_URL } from 'src/app/environment';
import Category from 'src/app/models/category.model';
import { ICategoryService } from './category.service';

@Injectable({
  providedIn: 'root'
})
export class RenderCategoryService implements ICategoryService {

  constructor(private http: HttpClient) { }

  getChildCategories(parentId: string | null): Observable<Category[]> {
    return this.http.get<Category[]>(RENDER_API_URL + '/api/category/child-categories' + (parentId ? '/' + parentId : ''));
  }

  getCategory(categoryId: string | null): Observable<Category> {
    return this.http.get<Category>(RENDER_API_URL + '/api/category/' + categoryId);
  }
}
