import { Injectable } from '@angular/core';

const KEY = 'token';

@Injectable({
  providedIn: 'root',
})
export class TokenService {
  returnToken() {
    return localStorage.getItem(KEY) ?? '';
  }

  saveToken(token: string) {
    localStorage.setItem(KEY, token);
  }

  deleteToken() {
    if (this.hasToken()) {
      localStorage.removeItem(KEY);
    }
  }

  hasToken(): boolean {
    return !!this.returnToken();
  }
}
