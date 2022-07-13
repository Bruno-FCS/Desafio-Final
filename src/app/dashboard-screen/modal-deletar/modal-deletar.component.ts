import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { VeiculoData } from '../../models';
import { VeiculoDataService } from '../../services';

@Component({
  selector: 'app-modal-deletar',
  templateUrl: './modal-deletar.component.html',
  styleUrls: ['./modal-deletar.component.css'],
})
export class ModalDeletarComponent implements OnInit {
  veiculoData$ = this.veiculoDataService.retornarVeiculoData();

  deleteForm!: FormGroup;
  mostraModalDeletar = false;
  error = false;

  @Output() windowClosed = new EventEmitter();

  vehicledata_vin!: string;

  constructor(
    private formBuilder: FormBuilder,
    private veiculoDataService: VeiculoDataService
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

  abrirModalDeletar() {
    this.deleteForm.reset();
    this.mostraModalDeletar = !this.mostraModalDeletar;
    this.error = false;
  }

  delete() {
    if (this.deleteForm.valid) {
      const vehicleData = this.deleteForm.getRawValue() as VeiculoData;
      this.veiculoDataService.delete(vehicleData).subscribe(
        () => {
          this.abrirModalDeletar();
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
