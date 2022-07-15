import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from '../../environments/environment';
import { User } from '../models';

const API = environment.apiURL;
const KEY = 'success';

@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  constructor(private httpClient: HttpClient) {}

  register(user: User) {
    return this.httpClient.post(`${API}/users`, user);
  }

  setRegister() {
    localStorage.setItem(KEY, 'true');
  }

  returnRegister() {
    return localStorage.getItem(KEY);
  }

  clearRegister() {
    localStorage.removeItem(KEY);
  }
}
