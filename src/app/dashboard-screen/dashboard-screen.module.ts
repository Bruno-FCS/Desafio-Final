import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardScreenRoutingModule } from './dashboard-screen-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MenuModule } from '../componentes/menu/menu.module';
import { SettingsModule } from '../componentes/settings/settings.module';
import { CartaoComponent } from './cartao/cartao.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TabelaComponent } from './tabela/tabela.component';
import { ModalAtualizarComponent } from './modal-atualizar/modal-atualizar.component';
import { MensagemModule } from '../componentes/mensagem/mensagem.module';

@NgModule({
  declarations: [
    DashboardComponent,
    CartaoComponent,
    TabelaComponent,
    ModalAtualizarComponent
  ],
  imports: [
    CommonModule,
    DashboardScreenRoutingModule,
    MenuModule,
    SettingsModule,
    MensagemModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class DashboardScreenModule { }
