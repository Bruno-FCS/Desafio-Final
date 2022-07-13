import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuModule } from '../menu/menu.module';
import { SettingsModule } from '../settings/settings.module';
import { HeaderComponent } from './header.component';



@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule, MenuModule, SettingsModule
  ],
  exports: [HeaderComponent]
})
export class HeaderModule { }
