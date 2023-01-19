import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesComponent } from './components/categories/categories.component';
import { QuestionsComponent } from './components/questions/questions.component';
import { CategoryResolver } from './resolvers/category.resolver';
import { ChildCategoriesResolver } from './resolvers/child-categories.resolver';
import { QuestionsResolver } from './resolvers/questions.resolver';

const routes: Routes = [

  {
    path: '', component: CategoriesComponent,
    resolve: { childCategories: ChildCategoriesResolver }
  },
  {
    path: 'categories/:categoryId', component: CategoriesComponent,
    resolve: { category: CategoryResolver, childCategories: ChildCategoriesResolver, questions: QuestionsResolver }
  },
  {
    path: 'categories/:categoryId/questions', component: QuestionsComponent,
    resolve: { category: CategoryResolver, questions: QuestionsResolver }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
