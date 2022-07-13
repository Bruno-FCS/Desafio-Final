import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginScreenComponent } from './login-screen.component';
import { LoginComponent } from './login';
import { RegisterComponent } from './register';
import { SuccessComponent } from './success';
import { SuccessGuard } from '../guards';

const routes: Routes = [
  {
    path: '',
    component: LoginScreenComponent,
    children: [
      {
        path: '',
        component: LoginComponent,
      },
      {
        path: 'register',
        component: RegisterComponent,
      },
      {
        path: 'register-success',
        component: SuccessComponent,
        canActivate: [SuccessGuard],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginScreenRoutingModule {}
