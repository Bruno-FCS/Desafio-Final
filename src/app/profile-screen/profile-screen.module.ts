import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { HeaderModule } from '../componentes';
import { ProfileScreenRoutingModule } from './profile-screen-routing.module';
import { ProfileComponent } from './profile';
import { MenuModule } from '../componentes';
import { SettingsModule } from '../componentes';
import { MensagemModule } from '../componentes';
import { UpdateFormComponent } from './update-form';
import { PasswordFormComponent } from './password-form';

@NgModule({
  declarations: [ProfileComponent, UpdateFormComponent, PasswordFormComponent],
  imports: [
    CommonModule,
    ProfileScreenRoutingModule,
    MenuModule,
    SettingsModule,
    MensagemModule,
    ReactiveFormsModule,
    HeaderModule
  ],
})
export class ProfileScreenModule {}
