import { TestBed } from '@angular/core/testing';

import { PhoneKeyService } from './phone-key.service';

describe('PhoneKeyService', () => {
  let service: PhoneKeyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PhoneKeyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
