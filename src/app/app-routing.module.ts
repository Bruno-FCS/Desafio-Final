import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AutenticacaoGuard } from './guards';
import { LoginGuard } from './guards';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  {
    path: 'login',
    loadChildren: () =>
      import('./login-screen').then(
        (m) => m.LoginScreenModule
      ),
    canLoad: [LoginGuard],
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./home-screen').then(
        (m) => m.HomeScreenModule
      ),
    canLoad: [AutenticacaoGuard],
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./dashboard-screen').then(
        (m) => m.DashboardScreenModule
      ),
    canLoad: [AutenticacaoGuard],
  },
  {
    path: 'profile',
    loadChildren: () =>
      import('./profile-screen').then(
        (m) => m.ProfileScreenModule
      ),
    canLoad: [AutenticacaoGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
