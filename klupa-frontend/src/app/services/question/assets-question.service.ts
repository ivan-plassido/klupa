import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import Question from 'src/app/models/question.model';
import { SourceService } from '../source.service';
import { IQuestionService } from './question.service';

@Injectable({
  providedIn: 'root'
})
export class AssetsQuestionService implements IQuestionService {

  constructor(private http: HttpClient, private source: SourceService) { }

  getCategoryQuestions(categoryId: string | null): Observable<Question[]> {
    const path = 'assets/questions/' + categoryId + '.json';
    return this.http.get<Question[]>(path).pipe(
      catchError(() => {
        return of([]);
      })
    );
  }
}
