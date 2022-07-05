import { Veiculo } from './../veiculo/veiculo';
import { Component, HostListener, OnInit } from '@angular/core';
import { VeiculoService } from '../veiculo/veiculo.service';

declare var google: any;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  @HostListener('window:resize', ['$event'])
  sizeChange() {
    this.exibirChart('chart_1', this.connectedDados);
    this.exibirChart('chart_2', this.updatedDados);
  }

  veiculos$ = this.veiculoService.buscaVeiculos();
  veiculoId!: string;
  veiculoEscolhido!: Veiculo;

  connectedDados: any = [];
  updatedDados: any = [];

  formatedConnectedRatio = 0;
  formatedUpdatedRatio = 0;

  constructor(private veiculoService: VeiculoService) {}

  ngOnInit(): void {
    this.enviaVeiculoId('1');
  }

  enviaVeiculoId(id: string) {
    this.veiculoService.buscaVeiculoId(id).subscribe((veiculoEscolhido) => {
      this.veiculoEscolhido = veiculoEscolhido;
      const connectedRatio =
        (this.veiculoEscolhido.vehicle_connected * 100) /
        this.veiculoEscolhido.vehicle_total_volume;
      this.formatedConnectedRatio = Math.round(connectedRatio * 10) / 10;
      const connectedRemainder = 100 - connectedRatio;
      this.connectedDados = [
        ['Conectados', connectedRatio],
        ['Não conectados', connectedRemainder],
      ];
      const updatedRatio =
        (this.veiculoEscolhido.vehicle_software_updates * 100) /
        this.veiculoEscolhido.vehicle_total_volume;
      this.formatedUpdatedRatio = Math.round(updatedRatio * 10) / 10;
      const updatedRemainder = 100 - updatedRatio;
      this.updatedDados = [
        ['Atualizados', updatedRatio],
        ['Não atualizados', updatedRemainder],
      ];
      this.init();
    });
  }

  init(): void {
    if (typeof google !== 'undefined') {
      google.charts.load('current', { packages: ['corechart'] });
      setTimeout(() => {
        google.charts.setOnLoadCallback(
          this.exibirChart('chart_1', this.connectedDados)
        );
        google.charts.setOnLoadCallback(
          this.exibirChart('chart_2', this.updatedDados)
        );
      }, 500);
    }
  }

  exibirChart(id: string, dados: any): void {
    const el = document.getElementById(id);
    const chart = new google.visualization.PieChart(el);

    chart.draw(this.obterDataTable(dados), this.obterOpcoes());
  }

  obterDataTable(dados: any): any {
    const data = new google.visualization.DataTable();

    data.addColumn('string', '');
    data.addColumn('number', 'Ratio');
    data.addRows(dados);

    return data;
  }

  obterOpcoes(): any {
    return {
      height: 180,
      legend: 'none',
      pieSliceText: 'none',
      pieHole: 0.6,
      slices: {
        0: { color: '#28619f' },
        1: { color: '#e6e6e6' },
      },
    };
  }
}
