import { TestBed } from '@angular/core/testing';

import { RenderCategoryService } from './render-category.service';

describe('RenderCategoryService', () => {
  let service: RenderCategoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RenderCategoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
