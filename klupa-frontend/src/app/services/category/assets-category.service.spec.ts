import { TestBed } from '@angular/core/testing';
import { AssetsCategoryService } from './assets-category.service';


describe('AssetsCategoryService', () => {
  let service: AssetsCategoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AssetsCategoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
