import { TestBed } from '@angular/core/testing';

import { TestModelService } from './test-model.service';

describe('TestModelService', () => {
  let service: TestModelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TestModelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
