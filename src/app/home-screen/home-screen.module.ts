import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeScreenRoutingModule } from './home-screen-routing.module';
import { HomeComponent } from './home/home.component';
import { MenuModule } from '../componentes/menu/menu.module';
import { SettingsModule } from '../componentes/settings/settings.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, HomeScreenRoutingModule, MenuModule, SettingsModule],
})
export class HomeScreenModule {}
