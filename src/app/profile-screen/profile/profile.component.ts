import { Usuario } from './../../autenticacao/usuario/usuario';
import { tap } from 'rxjs';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/autenticacao/usuario/usuario.service';
import { FormValidations } from 'src/app/login-screen/register/form.validator';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  usuario$ = this.usuarioService.retornarUsuario();

  updateForm!: FormGroup;
  error = 0;

  passwordForm!: FormGroup;

  user_id!: any;
  user_name!: string;
  user_email!: string;
  user_full_name!: string;

  user_former_password!: string;
  user_password!: string;
  user_password_confirm!: string;

  constructor(
    private usuarioService: UsuarioService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.updateForm = this.formBuilder.group({
      user_id: [null],
      user_name: [null, [Validators.required, Validators.minLength(5)]],
      user_email: [null, [Validators.required, Validators.email]],
      user_full_name: [null, Validators.required],
    });

    this.passwordForm = this.formBuilder.group({
      user_id: [null],
      user_former_password: [
        null,
        [Validators.required, Validators.minLength(6)],
      ],
      user_password: [null, [Validators.required, Validators.minLength(6)]],
      user_password_confirm: [
        null,
        [Validators.required, FormValidations.equalsTo('user_password')],
      ],
    });
  }

  update() {
    if (this.updateForm.valid) {
      const user = this.updateForm.getRawValue() as Usuario;
      console.log(user);
    }
  }

  changePassword() {
    if (this.passwordForm.valid) {
      const user = this.passwordForm.getRawValue() as Usuario;
      console.log(user);
    }
  }
}
