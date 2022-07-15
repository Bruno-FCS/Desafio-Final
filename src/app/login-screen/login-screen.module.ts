import { NgxCaptchaModule } from 'ngx-captcha';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AuthenticationModule } from '../authentication';
import { LoginScreenRoutingModule } from './login-screen-routing.module';
import { LoginScreenComponent } from './login-screen.component';
import { LoginComponent } from './login';
import { MessageModule } from '../components';
import { RegisterComponent } from './register';
import { SuccessComponent } from './success';

@NgModule({
  declarations: [
    LoginScreenComponent,
    LoginComponent,
    RegisterComponent,
    SuccessComponent,
  ],
  imports: [
    CommonModule,
    LoginScreenRoutingModule,
    FormsModule,
    MessageModule,
    AuthenticationModule,
    ReactiveFormsModule,
    NgxCaptchaModule,
  ],
  exports: [LoginScreenComponent],
})
export class LoginScreenModule {}
