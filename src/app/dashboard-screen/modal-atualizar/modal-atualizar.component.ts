import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { VeiculoData } from '../veiculo/veiculo-data';

@Component({
  selector: 'app-modal-atualizar',
  templateUrl: './modal-atualizar.component.html',
  styleUrls: ['./modal-atualizar.component.css'],
})
export class ModalAtualizarComponent implements OnInit {
  mostraModalAtualizar = false;
  updateForm!: FormGroup;
  error = false;

  constructor(private formBuilder: FormBuilder) {}

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
    this.mostraModalAtualizar = !this.mostraModalAtualizar;
  }

  update() {
    if (this.updateForm.valid) {
      const vehicleData = this.updateForm.getRawValue() as VeiculoData;
      console.log(vehicleData)
    }
  }
}
