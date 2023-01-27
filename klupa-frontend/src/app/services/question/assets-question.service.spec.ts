import { TestBed } from '@angular/core/testing';

import { AssetsQuestionService } from './assets-question.service';

describe('AssetsQuestionService', () => {
  let service: AssetsQuestionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AssetsQuestionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
