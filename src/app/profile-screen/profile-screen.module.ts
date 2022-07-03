import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileScreenRoutingModule } from './profile-screen-routing.module';
import { ProfileComponent } from './profile/profile.component';
import { MenuModule } from '../componentes/menu/menu.module';
import { SettingsModule } from '../componentes/settings/settings.module';

@NgModule({
  declarations: [ProfileComponent],
  imports: [
    CommonModule,
    ProfileScreenRoutingModule,
    MenuModule,
    SettingsModule,
  ],
})
export class ProfileScreenModule {}
