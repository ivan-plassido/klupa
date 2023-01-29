import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import Question from 'src/app/models/question.model';
import { IQuestionService } from './question.service';

@Injectable({
  providedIn: 'root'
})
// TODO: implement this
export class DedicatedQuestionService implements IQuestionService {

  constructor(private http: HttpClient) { }

  getCategoryQuestions(categoryId: string | null): Observable<Question[]> {
    return of([]);
  }

  getFavoriteQuestions(categoryId: string): Observable<Question[]> {
    return of([]);
  }

  addFavoriteQuestion(questionId: string | null): Observable<any> {
    return of(null);
  }
  deleteFavoriteQuestion(questionId: string | null): Observable<any> {
    return of(null);
  }
}
