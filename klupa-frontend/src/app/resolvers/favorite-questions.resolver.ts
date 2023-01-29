import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve } from "@angular/router";
import { Observable } from "rxjs";
import Question from "../models/question.model";
import { QuestionService } from "../services/question/question.service";

@Injectable()
export class FavoriteQuestionsResolver implements Resolve<Question[]> {
    constructor(private questionService: QuestionService) { }

    resolve(route: ActivatedRouteSnapshot): Observable<Question[]> {
        return this.questionService.getFavoriteQuestions(route.paramMap.get('categoryId'));
    }
}