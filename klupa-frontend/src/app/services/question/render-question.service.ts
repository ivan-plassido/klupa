import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { RENDER_API_URL } from 'src/app/environment';
import Question from 'src/app/models/question.model';
import { FirebaseService } from '../firebase.service';
import { IQuestionService } from './question.service';

@Injectable({
  providedIn: 'root'
})
export class RenderQuestionService implements IQuestionService {

  constructor(private http: HttpClient, private firebase: FirebaseService) { }

  getCategoryQuestions(categoryId: string | null): Observable<Question[]> {
    return this.http.get<Question[]>(RENDER_API_URL + '/api/question/category-questions/' + categoryId).pipe(
      catchError(() => {
        return of([]);
      })
    );
  }

  getFavoriteQuestions(categoryId: string): Observable<Question[]> {
    const userEmail = this.getUserEmail();
    if (userEmail) {
      return this.http.get<Question[]>(`${RENDER_API_URL}/api/question/category-questions/favorite/${categoryId}/${userEmail}`);
    } else {
      return of([]);
    }
  }
  addFavoriteQuestion(questionId: string | null): Observable<any> {
    const email = this.getUserEmail();
    if (email) {
      return this.http.post<void>(`${RENDER_API_URL}/api/question/category-questions/favorite/${questionId}`, email);
    } else {
      return of(null);
    }
  }
  deleteFavoriteQuestion(questionId: string | null): Observable<any> {
    const email = this.getUserEmail();
    if (email) {
      return this.http.delete<void>(`${RENDER_API_URL}/api/question/category-questions/favorite/${questionId}/${email}`);
    } else {
      return of(null);
    }
  }

  private getUserEmail(): string | null {
    let user = this.firebase.user;
    if (!user) {
      const storedUser = localStorage.getItem('user');
      if (storedUser) {
        user = JSON.parse(storedUser);
      }
    }
    return user ? user.email : null;
  }
}
