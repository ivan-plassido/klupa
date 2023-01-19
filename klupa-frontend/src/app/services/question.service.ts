import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import Question from '../models/question.model';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  private QUESTIONS_ENDPOINT = "/assets/questions.json"; // TODO: replace mock after backend is finished

  constructor(private http: HttpClient) { }

  getQuestions(): Observable<Question[]> {
    return this.http.get<Question[]>(this.QUESTIONS_ENDPOINT);
  }

  getCategoryQuestions(categoryId: string | null): Observable<Question[]> {
    return this.getQuestions().pipe(
      map(questions => questions.filter(question => question.categoryId === categoryId))
    );
  }
}
