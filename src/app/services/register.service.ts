import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from '../../environments/environment';
import { Usuario } from '../models';

const API = environment.apiURL;
const KEY = 'success';

@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  constructor(private httpClient: HttpClient) {}

  cadastrar(usuario: Usuario) {
    return this.httpClient.post(`${API}/users`, usuario);
  }

  setarCadastro() {
    localStorage.setItem(KEY, 'true');
  }

  retornarCadastro() {
    return localStorage.getItem(KEY);
  }

  limparCadastro() {
    localStorage.removeItem(KEY);
  }
}
