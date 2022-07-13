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
import { ModalInserirComponent } from './modal-inserir/modal-inserir.component';
import { MensagemModule } from '../componentes/mensagem/mensagem.module';
import { ModalDeletarComponent } from './modal-deletar/modal-deletar.component';
import { TabelaVerticalComponent } from './tabela-vertical/tabela-vertical.component';
import { HeaderModule } from '../componentes/header/header.module';

@NgModule({
  declarations: [
    DashboardComponent,
    CartaoComponent,
    TabelaComponent,
    ModalAtualizarComponent,
    ModalInserirComponent,
    ModalDeletarComponent,
    TabelaVerticalComponent
  ],
  imports: [
    CommonModule,
    DashboardScreenRoutingModule,
    MenuModule,
    SettingsModule,
    MensagemModule,
    FormsModule,
    ReactiveFormsModule,
    HeaderModule
  ],
})
export class DashboardScreenModule {}
