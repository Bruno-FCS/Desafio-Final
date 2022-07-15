import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

import { environment } from '../../environments/environment';
import { UserService } from './user.service';

const API = environment.apiURL;

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  constructor(
    private httpClient: HttpClient,
    private userService: UserService
  ) {}

  authenticate(
    user_name: string,
    user_password: string
  ): Observable<HttpResponse<any>> {
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
          const authToken =
            response.headers.get("x-access-token") ?? '';
          this.userService.saveToken(authToken);
        })
      );
  }
}
