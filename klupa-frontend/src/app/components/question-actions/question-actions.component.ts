import { Component, Input } from '@angular/core';
import Question from 'src/app/models/question.model';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'klp-question-actions',
  templateUrl: './question-actions.component.html',
  styleUrls: ['./question-actions.component.scss']
})
export class QuestionActionsComponent {

  @Input()
  question: Question;

  constructor(public firebase: FirebaseService) { }

  setAsFavorite(e: Event) {
    this.question.favorite = !this.question.favorite;
    e.stopPropagation(); //TODO: find a better way
  }
}
