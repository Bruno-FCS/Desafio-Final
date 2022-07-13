import { pluck } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from '../../environments/environment';
import { Veiculo, VeiculosAPI } from '../models';

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
