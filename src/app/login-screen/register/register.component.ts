import { Usuario } from './../../autenticacao/usuario/usuario';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegisterService } from './register.service';
import { FormValidations } from './form.validator';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;
  error = 0;

  constructor(
    private formBuilder: FormBuilder,
    private registerService: RegisterService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      user_name: [null, [Validators.required, Validators.minLength(5)]],
      user_email: [null, [Validators.required, Validators.email]],
      user_full_name: [null, Validators.required],
      user_password: [null, [Validators.required, Validators.minLength(6)]],
      user_password_confirm: [
        null,
        [FormValidations.equalsTo('user_password')],
      ],
    });
  }

  register() {
    if (this.registerForm.valid) {
      const user = this.registerForm.getRawValue() as Usuario;
      this.registerService.cadastrar(user).subscribe(
        () => {
          this.router.navigate(['']);
        },
        (error) => {
          if(error.status == 400){
            this.error = 1
          }
        }
      );
    }
  }
}
