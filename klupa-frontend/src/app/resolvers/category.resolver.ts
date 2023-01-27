import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve } from "@angular/router";
import { Observable } from "rxjs";
import Category from "../models/category.model";
import { CategoryService } from "../services/category/category.service";

@Injectable()
export class CategoryResolver implements Resolve<Category | boolean> {
    constructor(private categoryService: CategoryService) { }

    resolve(route: ActivatedRouteSnapshot): Observable<Category> | boolean {
        const categoryId = route.paramMap.get('categoryId');
        if (categoryId) {
            return this.categoryService.getCategory(route.paramMap.get('categoryId'));
        }
        return true;
    }
}