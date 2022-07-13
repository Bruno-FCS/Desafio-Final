import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';

import { AutenticacaoGuard } from './autenticacao.guard';

describe('AutenticacaoGuard', () => {
  let guard: AutenticacaoGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: Router, useValue: Router },
      ]
    });
    guard = TestBed.inject(AutenticacaoGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
