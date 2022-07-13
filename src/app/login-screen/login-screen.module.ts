import { NgxCaptchaModule } from 'ngx-captcha';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AutenticacaoModule } from '../autenticacao';
import { LoginScreenRoutingModule } from './login-screen-routing.module';
import { LoginScreenComponent } from './login-screen.component';
import { LoginComponent } from './login';
import { MensagemModule } from '../componentes';
import { RegisterComponent } from './register';
import { SuccessComponent } from './success';

@NgModule({
  declarations: [LoginScreenComponent, LoginComponent, RegisterComponent, SuccessComponent],
  imports: [
    CommonModule,
    LoginScreenRoutingModule,
    FormsModule,
    MensagemModule,
    AutenticacaoModule,
    ReactiveFormsModule,
    NgxCaptchaModule
  ],
  exports: [LoginScreenComponent],
})
export class LoginScreenModule {}
