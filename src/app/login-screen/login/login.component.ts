import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from '../../services';
import { RegisterService } from '../../services';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  user_name = '';
  user_password = '';
  error = false;

  constructor(
    private authenticationService: AuthenticationService,
    private registerService: RegisterService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.registerService.clearRegister();
  }

  login() {
    this.authenticationService
      .authenticate(this.user_name, this.user_password)
      .subscribe(
        () => {
          this.router.navigate(['home']);
        },
        () => {
          this.error = true;
        }
      );
  }
}
