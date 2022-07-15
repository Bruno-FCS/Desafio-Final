import { BehaviorSubject, pluck } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { VehicleData, VehiclesDataAPI } from '../models';

const API = environment.apiURL;

@Injectable({
  providedIn: 'root',
})
export class VehicleDataService {
  private vehicleDataSubject = new BehaviorSubject<VehicleData>({
    vehicledata_id: '',
    vehicledata_vin: '',
    vehicledata_odometer: '',
    vehicledata_tire_pressure: '',
    vehicledata_status: '',
    vehicledata_battery_status: '',
    vehicledata_fuel_level: '',
    vehicledata_lat: '',
    vehicledata_long: '',
  });

  constructor(private httpClient: HttpClient) {}

  findVehicleData(value?: string) {
    return this.httpClient
      .get<VehiclesDataAPI>(`${API}/vehiclesdata/${value}`)
      .pipe(pluck('vehicledata'));
  }

  insert(vehicleData: VehicleData) {
    return this.httpClient.post(`${API}/vehiclesdata`, vehicleData);
  }

  delete(vehicleData: VehicleData) {
    return this.httpClient.delete(`${API}/vehiclesdata/${vehicleData.vehicledata_vin}`);
  }

  update(vehicleData: VehicleData) {
    return this.httpClient.put(`${API}/vehiclesdata/update`, vehicleData);
  }

  saveVehicleData(vehicledata_vin: string) {
    if (vehicledata_vin == '') {
      vehicledata_vin = 'null';
    }
    this.httpClient
      .get<any>(`${API}/vehiclesdata/${vehicledata_vin}`)
      .subscribe((value) => {
        this.vehicleDataSubject.next(value.vehicledata[0]);
      });
  }

  returnVehicleData() {
    return this.vehicleDataSubject.asObservable();
  }

  clearVehicleDataSubject() {
    this.vehicleDataSubject.next({
      vehicledata_id: '',
      vehicledata_vin: '',
      vehicledata_odometer: '',
      vehicledata_tire_pressure: '',
      vehicledata_status: '',
      vehicledata_battery_status: '',
      vehicledata_fuel_level: '',
      vehicledata_lat: '',
      vehicledata_long: '',
    });
  }
}
