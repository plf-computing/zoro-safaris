import { TestBed } from '@angular/core/testing';

import { SafarisService } from './safaris.service';

describe('SafarisService', () => {
  let service: SafarisService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SafarisService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
