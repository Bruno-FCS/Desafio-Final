import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { VehicleData } from '../../models';
import { VehicleDataService } from '../../services';

@Component({
  selector: 'app-update-modal',
  templateUrl: './update-modal.component.html',
  styleUrls: ['./update-modal.component.css'],
})
export class UpdateModalComponent implements OnInit {
  vehicleData$ = this.vehicleDataService.returnVehicleData();

  updateForm!: FormGroup;
  showUpdateModal = false;
  error = false;

  @Output() windowClosed = new EventEmitter();

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
    this.updateForm = this.formBuilder.group({
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

  openUpdateModal() {
    this.updateForm.reset();
    this.showUpdateModal = !this.showUpdateModal;
    this.error = false;
  }

  update() {
    if (this.updateForm.valid) {
      const vehicleData = this.updateForm.getRawValue() as VehicleData;
      this.vehicleDataService.update(vehicleData).subscribe(
        () => {
          this.openUpdateModal();
          this.windowClosed.emit();
        },
        (error) => {
          this.error = true;
        }
      );
    }
  }
}
