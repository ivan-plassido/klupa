import { TestBed } from '@angular/core/testing';

import { RenderQuestionService } from './render-question.service';

describe('RenderQuestionService', () => {
  let service: RenderQuestionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RenderQuestionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
