import { filter, switchMap } from 'rxjs';
import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

import { VehicleDataService } from '../../services';

@Component({
  selector: 'app-horizontal-table',
  templateUrl: './horizontal-table.component.html',
  styleUrls: ['./horizontal-table.component.css'],
})
export class HorizontalTableComponent {
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
