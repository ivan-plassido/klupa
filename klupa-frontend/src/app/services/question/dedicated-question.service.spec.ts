import { TestBed } from '@angular/core/testing';

import { DedicatedQuestionService } from './dedicated-question.service';

describe('DedicatedQuestionService', () => {
  let service: DedicatedQuestionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DedicatedQuestionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
