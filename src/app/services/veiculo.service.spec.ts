import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { VeiculoService } from './veiculo.service';

describe('VeiculoService', () => {
  let service: VeiculoService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: HttpClient, useValue: HttpClient },
      ]
    });
    service = TestBed.inject(VeiculoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
