import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { UsuarioService } from './usuario/usuario.service';

const API = environment.apiURL;

@Injectable({
  providedIn: 'root',
})
export class AutenticacaoService {
  constructor(
    private httpClient: HttpClient,
    private usuarioService: UsuarioService
  ) {}

  autenticar(user_name: string, user_password: string): Observable<HttpResponse<any>> {
    return this.httpClient
      .post(
        `${API}/users/login`,
        {
          user_name: user_name,
          user_password: user_password,
        },
        { observe: 'response' }
      )
      .pipe(
        tap((response) => {
          const autenticacaoToken =
            response.headers.get('x-access-token') ?? '';
          this.usuarioService.salvarToken(autenticacaoToken);
        })
      );
  }

  // autenticar(user_name: string, user_password: string) {
  //   return this.httpClient.post(`${API}/users/login`, {
  //     user_name: user_name,
  //     user_password: user_password,
  //   });
  // }
}
