import { Usuario } from './../../autenticacao/usuario/usuario';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsuarioService } from 'src/app/autenticacao/usuario/usuario.service';
import { FormValidations } from 'src/app/login-screen/register/form.validator';

@Component({
  selector: 'app-password-form',
  templateUrl: './password-form.component.html',
  styleUrls: ['./password-form.component.css'],
})
export class PasswordFormComponent implements OnInit {
  usuario$ = this.usuarioService.retornarUsuario();

  passwordForm!: FormGroup;
  error = 0;

  user_former_password!: string;
  user_password!: string;
  user_password_confirm!: string;

  constructor(
    private usuarioService: UsuarioService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
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

  changePassword() {
    if (this.passwordForm.valid) {
      const user = this.passwordForm.getRawValue() as Usuario;
      console.log(user);
    }
  }
}
