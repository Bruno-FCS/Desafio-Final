import { Injectable } from '@angular/core';

const KEY = 'token';

@Injectable({
  providedIn: 'root',
})
export class TokenService {
  retornarToken() {
    return localStorage.getItem(KEY) ?? '';
  }

  salvarToken(token: string) {
    localStorage.setItem(KEY, token);
  }

  excluirToken() {
    if (this.possuiToken()) {
      localStorage.removeItem(KEY);
    }
  }

  possuiToken(): boolean {
    return !!this.retornarToken();
  }
}
