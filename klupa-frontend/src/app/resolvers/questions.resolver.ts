import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve } from "@angular/router";
import { Observable } from "rxjs";
import Question from "../models/question.model";
import { QuestionService } from "../services/question.service";

@Injectable()
export class QuestionsResolver implements Resolve<Question[]> {
    constructor(private questionService: QuestionService) { }

    resolve(route: ActivatedRouteSnapshot): Observable<Question[]> {
        return this.questionService.getCategoryQuestions(route.paramMap.get('categoryId'));
    }
}