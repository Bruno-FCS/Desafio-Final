import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { DashboardScreenRoutingModule } from './dashboard-screen-routing.module';
import { DashboardComponent } from './dashboard';
import { MenuModule } from '../componentes';
import { SettingsModule } from '../componentes';
import { CartaoComponent } from './cartao';
import { TabelaComponent } from './tabela';
import { ModalAtualizarComponent } from './modal-atualizar';
import { ModalInserirComponent } from './modal-inserir';
import { MensagemModule } from '../componentes';
import { ModalDeletarComponent } from './modal-deletar';
import { TabelaVerticalComponent } from './tabela-vertical';
import { HeaderModule } from '../componentes';

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
