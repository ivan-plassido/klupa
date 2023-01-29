import { Component, EventEmitter, Input, Output } from '@angular/core';
import { finalize } from 'rxjs';
import Question from 'src/app/models/question.model';
import { FirebaseService } from 'src/app/services/firebase.service';
import { QuestionServiceFactory } from 'src/app/services/question/question-service.factory';

@Component({
  selector: 'klp-question-actions',
  templateUrl: './question-actions.component.html',
  styleUrls: ['./question-actions.component.scss']
})
export class QuestionActionsComponent {

  @Input()
  question: Question;

  @Output() favoriteToggle = new EventEmitter<Question>();

  loading = false;

  constructor(public firebase: FirebaseService, private serviceFactory: QuestionServiceFactory) { }

  toggleFavorite(e: Event) {
    if (!this.loading) {
      this.loading = true;
      if (this.question.favorite) {
        this.serviceFactory.getService().deleteFavoriteQuestion(this.question._id)
          .pipe(finalize(() => this.loading = false))
          .subscribe(() => {
            this.question.favorite = false;
            this.favoriteToggle.emit(this.question);
          });
      } else {
        this.serviceFactory.getService().addFavoriteQuestion(this.question._id)
          .pipe(finalize(() => this.loading = false))
          .subscribe(() => {
            this.question.favorite = true;
            this.favoriteToggle.emit(this.question);
          });
      }
    }
    e.stopPropagation(); //TODO: find a better way
  }

}
