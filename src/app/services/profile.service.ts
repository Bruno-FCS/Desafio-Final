import { Observable, tap } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { Usuario } from '../models';
import { UsuarioService } from './usuario.service';

const API = environment.apiURL;

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  constructor(private httpClient: HttpClient, private usuarioService: UsuarioService) {}

  atualizarDados(usuario: Usuario): Observable<HttpResponse<any>> {
    return this.httpClient
      .put(`${API}/users/${usuario.user_id}`, usuario, { observe: 'response' })
      .pipe(
        tap((response) => {
          const autenticacaoToken =
            response.headers.get('x-access-token') ?? '';
          this.usuarioService.salvarToken(autenticacaoToken);
        })
      );
  }

  alterarSenha(usuario: Usuario){
    return this.httpClient
      .put(`${API}/users/change-password/${usuario.user_id}`, usuario)
  }
}
