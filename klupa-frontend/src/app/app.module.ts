import { HttpClientModule } from "@angular/common/http";
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from "@angular/fire/compat/auth";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatDialog } from '@angular/material/dialog';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MarkdownModule } from 'ngx-markdown';
import { AngularMaterialModule } from './angular-material.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignInDialogComponent } from "./components/auth/sign-in-dialog/sign-in-dialog.component";
import { SignUpDialogComponent } from "./components/auth/sign-up-dialog/sign-up-dialog.component";
import { CategoriesComponent } from './components/categories/categories.component';
import { QuestionActionsComponent } from './components/question-actions/question-actions.component';
import { QuestionsComponent } from './components/questions/questions.component';
import { FIREBASE_CONFIG } from "./environment";
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
    QuestionActionsComponent,
    SignUpDialogComponent,
    SignInDialogComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    MarkdownModule.forRoot(),
    AngularFireAuthModule,
    AngularFireModule.initializeApp(FIREBASE_CONFIG)
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
    ChildCategoriesResolver,
    MatDialog],
  bootstrap: [AppComponent]
})
export class AppModule { }
