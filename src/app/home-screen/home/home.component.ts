import { Component } from '@angular/core';

import { UsuarioService } from '../../services';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  usuario$ = this.usuarioService.retornarUsuario();

  constructor(private usuarioService: UsuarioService) {}
}
