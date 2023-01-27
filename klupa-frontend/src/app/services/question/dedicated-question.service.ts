import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import Question from 'src/app/models/question.model';
import { IQuestionService } from './question.service';

@Injectable({
  providedIn: 'root'
})
export class DedicatedQuestionService implements IQuestionService {

  constructor(private http: HttpClient) { }

  getCategoryQuestions(categoryId: string | null): Observable<Question[]> {
    return of([]);
  }
}
