import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileScreenRoutingModule } from './profile-screen-routing.module';
import { ProfileComponent } from './profile/profile.component';
import { MenuModule } from '../componentes/menu/menu.module';
import { SettingsModule } from '../componentes/settings/settings.module';
import { MensagemModule } from '../componentes/mensagem/mensagem.module';
import { ReactiveFormsModule } from '@angular/forms';
import { UpdateFormComponent } from './update-form/update-form.component';
import { PasswordFormComponent } from './password-form/password-form.component';

@NgModule({
  declarations: [ProfileComponent, UpdateFormComponent, PasswordFormComponent],
  imports: [
    CommonModule,
    ProfileScreenRoutingModule,
    MenuModule,
    SettingsModule,
    MensagemModule,
    ReactiveFormsModule,
  ],
})
export class ProfileScreenModule {}
