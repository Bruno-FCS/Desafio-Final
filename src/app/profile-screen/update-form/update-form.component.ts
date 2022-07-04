import { ProfileService } from './../profile/profile.service';
import { Usuario } from './../../autenticacao/usuario/usuario';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsuarioService } from 'src/app/autenticacao/usuario/usuario.service';

@Component({
  selector: 'app-update-form',
  templateUrl: './update-form.component.html',
  styleUrls: ['./update-form.component.css'],
})
export class UpdateFormComponent implements OnInit {
  usuario$ = this.usuarioService.retornarUsuario();

  updateForm!: FormGroup;
  error = 0;

  user_id!: any;
  user_name!: string;
  user_email!: string;
  user_full_name!: string;

  constructor(
    private usuarioService: UsuarioService,
    private profileService: ProfileService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.updateForm = this.formBuilder.group({
      user_id: [null],
      user_name: [null, [Validators.required, Validators.minLength(5)]],
      user_email: [null, [Validators.required, Validators.email]],
      user_full_name: [null, Validators.required],
    });
  }

  update() {
    if (this.updateForm.valid) {
      const user = this.updateForm.getRawValue() as Usuario;
      this.profileService.atualizarDados(user).subscribe(
        () => {
          console.log('Dados alterados com sucesso!');
        },
        (error) => {
          if (error.status == 400) {
            this.error = 1;
          }
        }
      );
    }
  }
}
