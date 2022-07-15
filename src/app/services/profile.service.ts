import { Observable, tap } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { User } from '../models';
import { UserService } from './user.service';

const API = environment.apiURL;

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  constructor(
    private httpClient: HttpClient,
    private userService: UserService
  ) {}

  updateData(user: User): Observable<HttpResponse<any>> {
    return this.httpClient
      .put(`${API}/users/${user.user_id}`, user, { observe: 'response' })
      .pipe(
        tap((response) => {
          const authToken =
            response.headers.get('x-access-token') ?? '';
          this.userService.saveToken(authToken);
        })
      );
  }

  changePassword(user: User) {
    return this.httpClient.put(
      `${API}/users/change-password/${user.user_id}`,
      user
    );
  }
}
