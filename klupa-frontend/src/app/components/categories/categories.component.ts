
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Category from 'src/app/models/category.model';

@Component({
  selector: 'klp-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent {

  childCategories: Category[] = [];

  constructor(
    private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    this.route.data.subscribe(({ category, childCategories, questions }) => {
      this.childCategories = childCategories;
      if (questions && questions.length > 0) {
        this.router.navigateByUrl('/categories/' + category.id + '/questions', { replaceUrl: true });
      }
    })
  }
}
