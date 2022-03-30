import { TestBed } from '@angular/core/testing';

import { CofresService } from './cofres.service';

describe('CofresService', () => {
  let service: CofresService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CofresService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
