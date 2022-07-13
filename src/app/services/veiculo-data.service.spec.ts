import { TestBed } from '@angular/core/testing';

import { VeiculoDataService } from './veiculo-data.service';

describe('VeiculoDataService', () => {
  let service: VeiculoDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VeiculoDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
