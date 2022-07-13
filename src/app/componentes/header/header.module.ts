import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuModule } from '../menu';
import { SettingsModule } from '../settings';
import { HeaderComponent } from './header.component';

@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule, MenuModule, SettingsModule
  ],
  exports: [HeaderComponent]
})
export class HeaderModule { }
