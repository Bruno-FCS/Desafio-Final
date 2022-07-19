import { Component, HostListener, OnInit } from '@angular/core';

import { Vehicle } from '../../models';
import { VehicleService } from '../../services';

declare var google: any;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  @HostListener('window:resize', ['$event'])
  sizeChange() {
    this.showChart('chart_1', this.connectedData);
    this.showChart('chart_2', this.updatedData);
  }

  vehicles$ = this.vehicleService.findVehicles();
  vehicleId!: string;
  chosenVehicle!: Vehicle;

  connectedData: any = [];
  updatedData: any = [];

  formatedConnectedRatio = 0;
  formatedUpdatedRatio = 0;

  constructor(private vehicleService: VehicleService) {}

  ngOnInit(): void {
    this.sendVehicleId('4');
  }

  sendVehicleId(id: string) {
    this.vehicleService.findVehiclesById(id).subscribe((chosenVehicle) => {
      this.chosenVehicle = chosenVehicle;
      const connectedRatio =
        (this.chosenVehicle.vehicle_connected * 100) /
        this.chosenVehicle.vehicle_total_volume;
      this.formatedConnectedRatio = Math.round(connectedRatio * 10) / 10;
      const connectedRemainder = 100 - connectedRatio;
      this.connectedData = [
        ['Conectados', connectedRatio],
        ['Não conectados', connectedRemainder],
      ];
      const updatedRatio =
        (this.chosenVehicle.vehicle_software_updates * 100) /
        this.chosenVehicle.vehicle_total_volume;
      this.formatedUpdatedRatio = Math.round(updatedRatio * 10) / 10;
      const updatedRemainder = 100 - updatedRatio;
      this.updatedData = [
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
          this.showChart('chart_1', this.connectedData)
        );
        google.charts.setOnLoadCallback(
          this.showChart('chart_2', this.updatedData)
        );
      }, 500);
    }
  }

  showChart(id: string, data: any): void {
    const el = document.getElementById(id);
    const chart = new google.visualization.PieChart(el);

    chart.draw(this.getDataTable(data), this.getOptions());
  }

  getDataTable(data: any): any {
    const dataTable = new google.visualization.DataTable();

    dataTable.addColumn('string', '');
    dataTable.addColumn('number', 'Ratio');
    dataTable.addRows(data);

    return dataTable;
  }

  getOptions(): any {
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
