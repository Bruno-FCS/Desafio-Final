import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { DashboardScreenRoutingModule } from './dashboard-screen-routing.module';
import { DashboardComponent } from './dashboard';
import { MenuModule } from '../components';
import { SettingsModule } from '../components';
import { CardComponent } from './card';
import { HorizontalTableComponent } from './horizontal-table';
import { UpdateModalComponent } from './update-modal';
import { InsertModalComponent } from './insert-modal';
import { MessageModule } from '../components';
import { DeleteModalComponent } from './delete-modal';
import { VerticalTableComponent } from './vertical-table';
import { HeaderModule } from '../components';

@NgModule({
  declarations: [
    DashboardComponent,
    CardComponent,
    HorizontalTableComponent,
    UpdateModalComponent,
    InsertModalComponent,
    DeleteModalComponent,
    VerticalTableComponent,
  ],
  imports: [
    CommonModule,
    DashboardScreenRoutingModule,
    MenuModule,
    SettingsModule,
    MessageModule,
    FormsModule,
    ReactiveFormsModule,
    HeaderModule,
  ],
})
export class DashboardScreenModule {}
