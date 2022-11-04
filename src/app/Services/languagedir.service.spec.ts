import { TestBed } from '@angular/core/testing';

import { LanguagedirService } from './languagedir.service';

describe('LanguagedirService', () => {
  let service: LanguagedirService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LanguagedirService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
