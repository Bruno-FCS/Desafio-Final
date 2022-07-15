import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { VehicleData } from '../../models';
import { VehicleDataService } from '../../services';

@Component({
  selector: 'app-insert-modal',
  templateUrl: './insert-modal.component.html',
  styleUrls: ['./insert-modal.component.css'],
})
export class InsertModalComponent implements OnInit {
  insertForm!: FormGroup;
  showInsertModal = false;
  error = false;

  @Output() windowClosed = new EventEmitter();

  vehicledata_vin!: string;
  vehicledata_odometer!: string;
  vehicledata_fuel_level!: string;
  vehicledata_status!: string;
  vehicledata_lat!: string;
  vehicledata_long!: string;
  vehicledata_battery_status!: string;
  vehicledata_tire_pressure!: string;

  constructor(
    private formBuilder: FormBuilder,
    private vehicleDataService: VehicleDataService
  ) {}

  ngOnInit(): void {
    this.insertForm = this.formBuilder.group({
      vehicledata_vin: [
        null,
        [
          Validators.required,
          Validators.minLength(20),
          Validators.maxLength(20),
        ],
      ],
      vehicledata_odometer: [null, Validators.required],
      vehicledata_fuel_level: [null, Validators.required],
      vehicledata_status: [null, Validators.required],
      vehicledata_lat: [null, Validators.required],
      vehicledata_long: [null, Validators.required],
      vehicledata_battery_status: [null, Validators.required],
      vehicledata_tire_pressure: [null, Validators.required],
    });
  }

  openInsertModal() {
    this.insertForm.reset();
    this.showInsertModal = !this.showInsertModal;
    this.error = false;
  }

  insert() {
    if (this.insertForm.valid) {
      const vehicleData = this.insertForm.getRawValue() as VehicleData;
      this.vehicleDataService.insert(vehicleData).subscribe(
        () => {
          this.openInsertModal();
          this.windowClosed.emit();
        },
        (error) => {
          this.error = true;
        }
      );
    }
  }
}
