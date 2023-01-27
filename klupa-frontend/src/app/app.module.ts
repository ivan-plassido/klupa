import { HttpClientModule } from "@angular/common/http";
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MarkdownModule } from 'ngx-markdown';
import { AngularMaterialModule } from './angular-material.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { QuestionActionsComponent } from './components/question-actions/question-actions.component';
import { QuestionsComponent } from './components/questions/questions.component';
import { CategoryResolver } from './resolvers/category.resolver';
import { ChildCategoriesResolver } from './resolvers/child-categories.resolver';
import { QuestionsResolver } from './resolvers/questions.resolver';
import { AssetsCategoryService } from "./services/category/assets-category.service";
import { CategoryServiceFactory } from "./services/category/category-service.factory";
import { CategoryService } from './services/category/category.service';
import { DedicatedCategoryService } from "./services/category/dedicated-category.service";
import { RenderCategoryService } from "./services/category/render-category.service";
import { AssetsQuestionService } from "./services/question/assets-question.service";
import { DedicatedQuestionService } from "./services/question/dedicated-question.service";
import { QuestionServiceFactory } from "./services/question/question-service.factory";
import { QuestionService } from "./services/question/question.service";
import { RenderQuestionService } from "./services/question/render-question.service";

@NgModule({
  declarations: [
    AppComponent,
    CategoriesComponent,
    QuestionsComponent,
    QuestionActionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    MarkdownModule.forRoot()
  ],
  providers: [
    CategoryService,
    CategoryServiceFactory,
    DedicatedCategoryService,
    RenderCategoryService,
    AssetsCategoryService,
    QuestionService,
    QuestionServiceFactory,
    DedicatedQuestionService,
    RenderQuestionService,
    AssetsQuestionService,
    CategoryResolver,
    QuestionsResolver,
    ChildCategoriesResolver],
  bootstrap: [AppComponent]
})
export class AppModule { }
