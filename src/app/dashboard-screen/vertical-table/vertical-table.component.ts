import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { filter, switchMap } from 'rxjs';

import { VehicleDataService } from '../../services';

@Component({
  selector: 'app-vertical-table',
  templateUrl: './vertical-table.component.html',
  styleUrls: ['./vertical-table.component.css']
})
export class VerticalTableComponent {
  inputValue!: string;
  inputTable = new FormControl();
  vehiclesData$ = this.inputTable.valueChanges.pipe(
    filter((typedValue) => typedValue.length == 20),
    switchMap((typedValue) =>
      this.vehicleDataService.findVehicleData(typedValue)
    )
  );

  constructor(private vehicleDataService: VehicleDataService) {}

  updateVehicleDataSubject() {
    this.vehicleDataService.clearVehicleDataSubject();
    this.vehicleDataService.saveVehicleData(this.inputValue);
  }

  updateSelection() {
    this.inputTable.setValue('');
  }
}
