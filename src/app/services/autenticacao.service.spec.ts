import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { AutenticacaoService } from './autenticacao.service';

describe('AutenticacaoService', () => {
  let service: AutenticacaoService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: HttpClient, useValue: HttpClient },
      ]
    });
    service = TestBed.inject(AutenticacaoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
