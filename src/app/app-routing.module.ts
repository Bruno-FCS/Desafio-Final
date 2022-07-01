import { LoginGuard } from './autenticacao/login.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutenticacaoGuard } from './autenticacao/autenticacao.guard';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  {
    path: '',
    loadChildren: () =>
      import('./login-screen/login-screen.module').then(
        (m) => m.LoginScreenModule
      ),
    canLoad: [LoginGuard],
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./home-screen/home-screen.module').then(
        (m) => m.HomeScreenModule
      ),
    canLoad: [AutenticacaoGuard],
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./dashboard-screen/dashboard-screen.module').then(
        (m) => m.DashboardScreenModule
      ),
    canLoad: [AutenticacaoGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
