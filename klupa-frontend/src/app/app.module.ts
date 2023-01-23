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
import { CategoryService } from './services/category.service';
import { QuestionService } from './services/question.service';

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
  providers: [CategoryService, QuestionService, CategoryResolver, QuestionsResolver, ChildCategoriesResolver],
  bootstrap: [AppComponent]
})
export class AppModule { }
