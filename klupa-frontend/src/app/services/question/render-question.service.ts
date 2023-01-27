import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { RENDER_API_URL } from 'src/app/environment';
import Question from 'src/app/models/question.model';
import { IQuestionService } from './question.service';

@Injectable({
  providedIn: 'root'
})
export class RenderQuestionService implements IQuestionService {

  constructor(private http: HttpClient) { }

  getCategoryQuestions(categoryId: string | null): Observable<Question[]> {
    return this.http.get<Question[]>(RENDER_API_URL + '/api/question/category-questions/' + categoryId).pipe(
      catchError(() => {
        return of([]);
      })
    );
  }
}
