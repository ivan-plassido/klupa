import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from "@angular/common/http";
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTableModule } from '@angular/material/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { CategoryResolver } from './resolvers/category.resolver';
import { ChildCategoriesResolver } from './resolvers/child-categories.resolver';
import { QuestionsResolver } from './resolvers/questions.resolver';
import { CategoryService } from './services/category.service';
import { QuestionService } from './services/question.service';
import { QuestionsComponent } from './components/questions/questions.component';

@NgModule({
  declarations: [
    AppComponent,
    CategoriesComponent,
    QuestionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatProgressSpinnerModule,
    MatPaginatorModule
  ],
  providers: [CategoryService, QuestionService, CategoryResolver, QuestionsResolver, ChildCategoriesResolver],
  bootstrap: [AppComponent]
})
export class AppModule { }
