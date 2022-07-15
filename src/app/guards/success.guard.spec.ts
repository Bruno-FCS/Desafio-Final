import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';

import { SuccessGuard } from './success.guard';

describe('SuccessGuard', () => {
  let guard: SuccessGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: HttpClient, useValue: HttpClient },
        { provide: Router, useValue: Router },
      ],
    });
    guard = TestBed.inject(SuccessGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
