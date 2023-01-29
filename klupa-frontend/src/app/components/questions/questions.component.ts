import { animate, state, style, transition, trigger } from '@angular/animations';
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import Category from 'src/app/models/category.model';
import FavoriteQuestion from 'src/app/models/favorite-question.model';
import Question from 'src/app/models/question.model';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'klp-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class QuestionsComponent implements AfterViewInit {

  @ViewChild('allPaginator', { static: false }) allPaginator: MatPaginator;
  @ViewChild('favoritePaginator', { static: false }) favoritePaginator: MatPaginator;

  questionsArray: Question[];
  favoriteQuestionsArray: Question[];
  categoryQuestions: MatTableDataSource<Question[]> | any;
  favoriteQuestions: MatTableDataSource<Question[]> | any;
  isSignedIn = false;
  questionColumns: string[] = ['question'];
  allQuestionColumns: string[] = ['question', 'actions'];
  expandedRow: Question | null;
  selectedCategory: Category;
  allQuestionsPageSize = localStorage.getItem('all-questions-page-size') ? Number(localStorage.getItem('all-questions-page-size')) : 10;
  favoriteQuestionsPageSize = localStorage.getItem('favorite-questions-page-size') ? Number(localStorage.getItem('favorite-questions-page-size')) : 10;


  constructor(
    private route: ActivatedRoute,
    private firebase: FirebaseService) {
    if (this.firebase.isSignedIn) {
      this.isSignedIn = true;
    }
  }

  ngOnInit() {
    this.route.data.subscribe(({ category, questions, favoriteQuestions }) => {
      this.selectedCategory = category;
      this.questionsArray = questions;
      this.favoriteQuestionsArray = this.questionsArray.filter((q: Question) => {
        return favoriteQuestions.some((fq: FavoriteQuestion) => {
          const matched = q._id === fq.questionId;
          if (matched) {
            q.favorite = true;
          }
          return matched;
        });
      });
      this.categoryQuestions = new MatTableDataSource(this.questionsArray);
      this.favoriteQuestions = new MatTableDataSource(this.favoriteQuestionsArray);
    });
  }

  ngAfterViewInit() {
    this.categoryQuestions.paginator = this.allPaginator;
    this.favoriteQuestions.paginator = this.favoritePaginator;
  }

  onPage(event: PageEvent, allQuestions: boolean) {
    if (allQuestions) {
      localStorage.setItem('all-questions-page-size', event.pageSize.toString());
    } else {
      localStorage.setItem('favorite-questions-page-size', event.pageSize.toString());
    }
  }

  onFavoriteToggle(question: Question) {
    if (question.favorite) {
      this.favoriteQuestionsArray = [question, ...this.favoriteQuestionsArray];
    } else {
      this.favoriteQuestionsArray = this.favoriteQuestionsArray.filter((fq) => { return fq._id !== question._id });
    }
    this.favoriteQuestions = new MatTableDataSource(this.favoriteQuestionsArray);
    this.favoriteQuestions.paginator = this.favoritePaginator;
  }

}
