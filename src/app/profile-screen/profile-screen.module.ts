import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { HeaderModule } from '../components';
import { ProfileScreenRoutingModule } from './profile-screen-routing.module';
import { ProfileComponent } from './profile';
import { MenuModule } from '../components';
import { SettingsModule } from '../components';
import { MessageModule } from '../components';
import { UpdateFormComponent } from './update-form';
import { PasswordFormComponent } from './password-form';

@NgModule({
  declarations: [ProfileComponent, UpdateFormComponent, PasswordFormComponent],
  imports: [
    CommonModule,
    ProfileScreenRoutingModule,
    MenuModule,
    SettingsModule,
    MessageModule,
    ReactiveFormsModule,
    HeaderModule
  ],
})
export class ProfileScreenModule {}
