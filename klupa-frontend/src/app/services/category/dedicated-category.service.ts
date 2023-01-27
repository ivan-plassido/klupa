import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import Category from 'src/app/models/category.model';
import { ICategoryService } from './category.service';

@Injectable({
  providedIn: 'root'
})
export class DedicatedCategoryService implements ICategoryService {

  constructor(private http: HttpClient) { }

  getChildCategories(parentId: string | null): Observable<Category[]> {
    return of([]);
  }

  getCategory(categoryId: string | null): Observable<Category> {
    return of({ _id: '', name: '', parentId: '' });
  }
}
