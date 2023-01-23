import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import Question from '../models/question.model';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  private QUESTIONS_ENDPOINT = "/assets/questions/"; // TODO: replace mock after backend is finished

  constructor(private http: HttpClient) { }

  getCategoryQuestions(categoryId: string | null): Observable<Question[]> {
    const path = this.QUESTIONS_ENDPOINT + categoryId + '.json';
    return this.http.get<Question[]>(path).pipe(
      catchError(() => {
        return of([]);
      })
    );
  }
}
