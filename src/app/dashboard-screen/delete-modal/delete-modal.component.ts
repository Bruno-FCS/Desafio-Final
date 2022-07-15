import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { VehicleData } from '../../models';
import { VehicleDataService } from '../../services';

@Component({
  selector: 'app-delete-modal',
  templateUrl: './delete-modal.component.html',
  styleUrls: ['./delete-modal.component.css'],
})
export class DeleteModalComponent implements OnInit {
  vehicleData$ = this.vehicleDataService.returnVehicleData();

  deleteForm!: FormGroup;
  showDeleteModal = false;
  error = false;

  @Output() windowClosed = new EventEmitter();

  vehicledata_vin!: string;

  constructor(
    private formBuilder: FormBuilder,
    private vehicleDataService: VehicleDataService
  ) {}

  ngOnInit(): void {
    this.deleteForm = this.formBuilder.group({
      vehicledata_vin: [
        null,
        [
          Validators.required,
          Validators.minLength(20),
          Validators.maxLength(20),
        ],
      ],
    });
  }

  openDeleteModal() {
    this.deleteForm.reset();
    this.showDeleteModal = !this.showDeleteModal;
    this.error = false;
  }

  delete() {
    if (this.deleteForm.valid) {
      const vehicleData = this.deleteForm.getRawValue() as VehicleData;
      this.vehicleDataService.delete(vehicleData).subscribe(
        () => {
          this.openDeleteModal();
          this.windowClosed.emit();
        },
        (error) => {
          this.error = true;
        }
      );
    }
  }
}
