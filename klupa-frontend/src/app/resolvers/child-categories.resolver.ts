import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve } from "@angular/router";
import { Observable } from "rxjs";
import Category from "../models/category.model";
import { CategoryService } from "../services/category.service";

@Injectable()
export class ChildCategoriesResolver implements Resolve<Category[]> {
    constructor(private categoryService: CategoryService) { }

    resolve(route: ActivatedRouteSnapshot): Observable<Category[]> {
        const categoryId = route.paramMap.get('categoryId') || null;
        return this.categoryService.getChildCategories(categoryId);
    }
}