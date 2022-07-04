import { Observable, tap } from 'rxjs';
import { Usuario } from './../../autenticacao/usuario/usuario';
import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { UsuarioService } from 'src/app/autenticacao/usuario/usuario.service';

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
}
