import { TestBed } from '@angular/core/testing';

import { DedicatedCategoryService } from './dedicated-category.service';

describe('DedicatedCategoryService', () => {
  let service: DedicatedCategoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DedicatedCategoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
