import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';

import { LoginGuard } from './login.guard';

describe('LoginGuard', () => {
  let guard: LoginGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: Router, useValue: Router },
      ]
    });
    guard = TestBed.inject(LoginGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
