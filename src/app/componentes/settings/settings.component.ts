import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { UsuarioService } from '../../services';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css'],
})
export class SettingsComponent {
  mostraSettings = false;
  usuario$ = this.usuarioService.retornarUsuario();

  constructor(private usuarioService: UsuarioService, private router: Router) {}

  abrirSettings() {
    this.mostraSettings = !this.mostraSettings;
  }

  logout() {
    this.usuarioService.logout();
    this.router.navigate(['']);
  }
}
