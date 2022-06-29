import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginScreenRoutingModule } from './login-screen-routing.module';
import { LoginScreenComponent } from './login-screen.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { MensagemModule } from '../componentes/mensagem/mensagem.module';
import { RegisterComponent } from './register/register.component';


@NgModule({
  declarations: [
    LoginScreenComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    LoginScreenRoutingModule,
    FormsModule,
    MensagemModule
  ],
  exports: [
    LoginScreenComponent
  ]
})
export class LoginScreenModule { }
