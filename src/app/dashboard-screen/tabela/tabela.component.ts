import { distinctUntilChanged, filter, switchMap } from 'rxjs';
import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { VeiculoDataService } from '../veiculo/veiculo-data.service';

@Component({
  selector: 'app-tabela',
  templateUrl: './tabela.component.html',
  styleUrls: ['./tabela.component.css'],
})
export class TabelaComponent {
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
