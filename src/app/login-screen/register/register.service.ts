import { environment } from './../../../environments/environment';
import { Usuario } from './../../autenticacao/usuario/usuario';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const API = environment.apiURL;

@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  constructor(private httpClient: HttpClient) {}

  cadastrar(usuario: Usuario) {
    console.log(usuario)
    return this.httpClient.post(`${API}/users`, usuario);
  }
}
