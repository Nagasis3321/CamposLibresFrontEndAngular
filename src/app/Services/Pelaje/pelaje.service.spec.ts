import { TestBed } from '@angular/core/testing';

import { PelajeService } from './pelaje.service';

describe('PelajeService', () => {
  let service: PelajeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PelajeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
