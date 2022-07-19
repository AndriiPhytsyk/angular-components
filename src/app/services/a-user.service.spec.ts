import { TestBed } from '@angular/core/testing';

import { AUserService } from './a-user.service';

describe('AUserService', () => {
  let service: AUserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AUserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
