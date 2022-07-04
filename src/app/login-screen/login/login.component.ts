import { RegisterService } from './../register/register.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AutenticacaoService } from 'src/app/autenticacao/autenticacao.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  user_name = '';
  user_password = '';
  error = false;

  constructor(
    private autenticacaoService: AutenticacaoService,
    private registerService: RegisterService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.registerService.limparCadastro();
  }

  logar() {
    this.autenticacaoService
      .autenticar(this.user_name, this.user_password)
      .subscribe(
        () => {
          this.router.navigate(['home']);
        },
        () => {
          this.error = true;
        }
      );
  }
}
