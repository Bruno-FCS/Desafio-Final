import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { filter, switchMap } from 'rxjs';

import { VeiculoDataService } from '../../services';

@Component({
  selector: 'app-tabela-vertical',
  templateUrl: './tabela-vertical.component.html',
  styleUrls: ['./tabela-vertical.component.css']
})
export class TabelaVerticalComponent {
  inputValue!: string;
  tabelaInput = new FormControl();
  veiculosData$ = this.tabelaInput.valueChanges.pipe(
    filter((valorDigitado) => valorDigitado.length == 20),
    switchMap((valorDigitado) =>
      this.veiculoDataService.buscaVeiculosData(valorDigitado)
    )
  );

  constructor(private veiculoDataService: VeiculoDataService) {}

  atualizarVeiculoDataSubject() {
    this.veiculoDataService.limparVeiculoDataSubject();
    this.veiculoDataService.guardarVeiculoData(this.inputValue);
  }

  atualizarSelecao() {
    this.tabelaInput.setValue('');
  }
}
