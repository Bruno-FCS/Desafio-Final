import { Injectable } from '@angular/core';
import jwtDecode from 'jwt-decode';
import { BehaviorSubject } from 'rxjs';

import { TokenService } from './token.service';
import { User } from '../models';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private userSubject = new BehaviorSubject<User>({
    user_id: '',
    user_name: '',
    user_password: '',
    user_email: '',
    user_full_name: '',
    user_join_date: '',
  });

  constructor(private tokenService: TokenService) {
    if (this.tokenService.hasToken()) {
      this.decodeJWT();
    }
  }

  private decodeJWT() {
    const token = this.tokenService.returnToken();
    const user = jwtDecode(token) as User;
    this.userSubject.next(user);
  }

  returnUser() {
    return this.userSubject.asObservable();
  }

  saveToken(token: string) {
    this.tokenService.deleteToken();
    this.tokenService.saveToken(token);
    this.decodeJWT();
  }

  logout() {
    this.tokenService.deleteToken();
    this.userSubject.next({
      user_id: '',
      user_name: '',
      user_password: '',
      user_email: '',
      user_full_name: '',
      user_join_date: '',
    });
  }

  isLoggedIn() {
    return this.tokenService.hasToken();
  }
}
