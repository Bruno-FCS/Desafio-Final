import { VeiculoData, VeiculosDataAPI } from './veiculo-data';
import { BehaviorSubject, pluck } from 'rxjs';
import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const API = environment.apiURL;

@Injectable({
  providedIn: 'root',
})
export class VeiculoDataService {
  private veiculoDataSubject = new BehaviorSubject<VeiculoData>({
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

  buscaVeiculosData(valor?: string) {
    return this.httpClient
      .get<VeiculosDataAPI>(`${API}/vehiclesdata/${valor}`)
      .pipe(pluck('vehicleData'));
  }

  insert(veiculoData: VeiculoData) {
    return this.httpClient.post(`${API}/vehiclesdata`, veiculoData);
  }

  delete(veiculoData: VeiculoData) {
    return this.httpClient.delete(`${API}/vehiclesdata/${veiculoData.vehicledata_vin}`);
  }

  update(veiculoData: VeiculoData) {
    return this.httpClient.put(`${API}/vehiclesdata/update`, veiculoData);
  }

  guardarVeiculoData(vehicledata_vin: string) {
    if (vehicledata_vin == '') {
      vehicledata_vin = 'null';
    }
    this.httpClient
      .get<any>(`${API}/vehiclesdata/${vehicledata_vin}`)
      .subscribe((value) => {
        this.veiculoDataSubject.next(value.vehicleData[0]);
      });
  }

  retornarVeiculoData() {
    return this.veiculoDataSubject.asObservable();
  }

  limparVeiculoDataSubject() {
    this.veiculoDataSubject.next({
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
