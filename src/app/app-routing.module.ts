import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthenticationGuard } from './guards';
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
    canLoad: [AuthenticationGuard],
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./dashboard-screen').then(
        (m) => m.DashboardScreenModule
      ),
    canLoad: [AuthenticationGuard],
  },
  {
    path: 'profile',
    loadChildren: () =>
      import('./profile-screen').then(
        (m) => m.ProfileScreenModule
      ),
    canLoad: [AuthenticationGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
