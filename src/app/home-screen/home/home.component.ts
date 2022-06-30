import { Component } from '@angular/core';
import { UsuarioService } from 'src/app/autenticacao/usuario/usuario.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  usuario$ = this.usuarioService.retornarUsuario();

  constructor(private usuarioService: UsuarioService) {}
}
