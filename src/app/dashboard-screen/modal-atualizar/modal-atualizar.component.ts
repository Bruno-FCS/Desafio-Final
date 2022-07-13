import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { VeiculoData } from '../../models';
import { VeiculoDataService } from '../../services';

@Component({
  selector: 'app-modal-atualizar',
  templateUrl: './modal-atualizar.component.html',
  styleUrls: ['./modal-atualizar.component.css'],
})
export class ModalAtualizarComponent implements OnInit {
  veiculoData$ = this.veiculoDataService.retornarVeiculoData();

  updateForm!: FormGroup;
  mostraModalAtualizar = false;
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
    private veiculoDataService: VeiculoDataService
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

  abrirModalAtualizar() {
    this.updateForm.reset();
    this.mostraModalAtualizar = !this.mostraModalAtualizar;
    this.error = false;
  }

  update() {
    if (this.updateForm.valid) {
      const vehicleData = this.updateForm.getRawValue() as VeiculoData;
      this.veiculoDataService.update(vehicleData).subscribe(
        () => {
          this.abrirModalAtualizar();
          this.windowClosed.emit();
        },
        (error) => {
          if (error.status == 400) {
            this.error = true;
          }
        }
      );
    }
  }
}
