import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { FormValidations } from '../../validators';
import { RegisterService } from '../../services';
import { Usuario } from '../../models';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;
  error = false;

  constructor(
    private formBuilder: FormBuilder,
    private registerService: RegisterService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.registerService.limparCadastro();

    this.registerForm = this.formBuilder.group({
      user_name: [null, [Validators.required, Validators.minLength(5)]],
      user_email: [null, [Validators.required, Validators.email]],
      user_full_name: [null, Validators.required],
      user_password: [null, [Validators.required, Validators.minLength(6)]],
      user_password_confirm: [
        null,
        [Validators.required, FormValidations.equalsTo('user_password')],
      ],
      checkbox: [false, Validators.requiredTrue],
    });
  }

  register() {
    if (this.registerForm.valid) {
      const user = this.registerForm.getRawValue() as Usuario;
      this.registerService.cadastrar(user).subscribe(
        () => {
          this.registerService.setarCadastro();
          this.router.navigate(['login/register-success']);
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
