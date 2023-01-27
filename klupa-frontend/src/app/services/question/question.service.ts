import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import Question from 'src/app/models/question.model';
import { QuestionServiceFactory } from './question-service.factory';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(private factory: QuestionServiceFactory) { }

  getCategoryQuestions(categoryId: string | null): Observable<Question[]> {
    return this.factory.getService().getCategoryQuestions(categoryId);
  }
}

export interface IQuestionService {
  getCategoryQuestions(categoryId: string | null): Observable<Question[]>;
}
