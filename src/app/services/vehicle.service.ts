import { pluck } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from '../../environments/environment';
import { Vehicle, VehiclesAPI } from '../models';

const API = environment.apiURL;

@Injectable({
  providedIn: 'root',
})
export class VehicleService {
  constructor(private httpClient: HttpClient) {}

  findVehicles() {
    return this.httpClient
      .get<VehiclesAPI>(`${API}/vehicles`)
      .pipe(pluck('vehicles'));
  }

  findVehiclesById(vehicle_id: string) {
    return this.httpClient.get<Vehicle>(`${API}/vehicles/${vehicle_id}`);
  }
}
