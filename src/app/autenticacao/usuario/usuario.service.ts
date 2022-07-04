import { Usuario } from './usuario';
import { Injectable } from '@angular/core';
import jwtDecode from 'jwt-decode';
import { TokenService } from '../token.service';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  private usuarioSubject = new BehaviorSubject<Usuario>({
    user_id: '',
    user_name: '',
    user_password: '',
    user_email: '',
    user_full_name: '',
    user_join_date: '',
  });

  constructor(private tokenService: TokenService) {
    if (this.tokenService.possuiToken()) {
      this.decodificarJWT();
    }
  }

  private decodificarJWT() {
    const token = this.tokenService.retornarToken();
    const usuario = jwtDecode(token) as Usuario;
    this.usuarioSubject.next(usuario);
  }

  retornarUsuario() {
    return this.usuarioSubject.asObservable();
  }

  salvarToken(token: string) {
    this.tokenService.excluirToken();
    this.tokenService.salvarToken(token);
    this.decodificarJWT();
  }

  logout() {
    this.tokenService.excluirToken();
    this.usuarioSubject.next({
      user_id: '',
      user_name: '',
      user_password: '',
      user_email: '',
      user_full_name: '',
      user_join_date: '',
    });
  }

  estaLogado() {
    return this.tokenService.possuiToken();
  }
}
