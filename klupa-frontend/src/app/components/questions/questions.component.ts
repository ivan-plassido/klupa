import { animate, state, style, transition, trigger } from '@angular/animations';
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import Category from 'src/app/models/category.model';
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

  @ViewChild('paginator', { static: false }) paginator: MatPaginator;

  questions: MatTableDataSource<Question[]> | any;
  isSignedIn = false;
  questionColumns: string[] = ['question'];
  expandedRow: Question | null;
  selectedCategory: Category;
  pageSize = localStorage.getItem('questions-page-size') ? Number(localStorage.getItem('questions-page-size')) : 10;


  constructor(
    private route: ActivatedRoute,
    private firebase: FirebaseService) {
    if (this.firebase.isSignedIn) {
      this.isSignedIn = true;
      this.questionColumns = ['question', 'actions'];
    }
  }

  ngOnInit() {
    this.route.data.subscribe(({ category, questions }) => {
      this.selectedCategory = category;
      this.questions = new MatTableDataSource(questions);
    })
  }

  ngAfterViewInit() {
    this.questions.paginator = this.paginator;
  }

  onPage(event: PageEvent) {
    localStorage.setItem('questions-page-size', event.pageSize.toString())
  }

}
