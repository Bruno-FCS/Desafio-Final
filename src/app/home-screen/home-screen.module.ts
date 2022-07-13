import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeScreenRoutingModule } from './home-screen-routing.module';
import { HomeComponent } from './home';
import { HeaderModule } from '../componentes';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, HomeScreenRoutingModule, HeaderModule],
})
export class HomeScreenModule {}
