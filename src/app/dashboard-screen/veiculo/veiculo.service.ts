import { pluck } from 'rxjs';
import { environment } from './../../../environments/environment';
import { Veiculo, VeiculosAPI } from './veiculo';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const API = environment.apiURL;

@Injectable({
  providedIn: 'root',
})
export class VeiculoService {
  constructor(
    private httpClient: HttpClient
  ) {}

  buscaVeiculos() {
    return this.httpClient
      .get<VeiculosAPI>(`${API}/vehicles`)
      .pipe(pluck('vehicles'));
  }

  buscaVeiculoId(vehicle_id: string) {
    return this.httpClient.get<Veiculo>(`${API}/vehicles/${vehicle_id}`);
  }
}
