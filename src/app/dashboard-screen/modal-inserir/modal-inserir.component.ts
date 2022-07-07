import { VeiculoDataService } from '../veiculo/veiculo-data.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { VeiculoData } from '../veiculo/veiculo-data';

@Component({
  selector: 'app-modal-inserir',
  templateUrl: './modal-inserir.component.html',
  styleUrls: ['./modal-inserir.component.css'],
})
export class ModalInserirComponent implements OnInit {
  insertForm!: FormGroup;
  mostraModalInserir = false;
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
    private veiculoDataService: VeiculoDataService
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

  abrirModalInserir() {
    this.insertForm.reset();
    this.mostraModalInserir = !this.mostraModalInserir;
    this.error = false;
  }

  insert() {
    if (this.insertForm.valid) {
      const vehicleData = this.insertForm.getRawValue() as VeiculoData;
      this.veiculoDataService.insert(vehicleData).subscribe(
        () => {
          this.abrirModalInserir();
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
