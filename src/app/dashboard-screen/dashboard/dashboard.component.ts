import { Veiculo } from './../veiculo/veiculo';
import { Component, OnInit } from '@angular/core';
import { VeiculoService } from '../veiculo/veiculo.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit{
  veiculos$ = this.veiculoService.buscaVeiculos();
  veiculoId!: string;
  veiculoEscolhido!: Veiculo;

  constructor(private veiculoService: VeiculoService) {}

  ngOnInit(): void {
    this.enviaVeiculoId('1')
  }

  enviaVeiculoId(id: string) {
    this.veiculoService.buscaVeiculoId(id).subscribe((veiculoEscolhido) => {
      this.veiculoEscolhido = veiculoEscolhido;
    });
  }
}
