import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { VehicleDataService } from './vehicle-data.service';

describe('VehicleDataService', () => {
  let service: VehicleDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{ provide: HttpClient, useValue: HttpClient }],
    });
    service = TestBed.inject(VehicleDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
