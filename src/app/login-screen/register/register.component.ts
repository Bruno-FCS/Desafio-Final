import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  user_name = '';
  user_email = '';
  user_password = '';
  user_password_confirm = '';
  user_full_name = '';
  erro = 0;

  constructor() {}

  ngOnInit(): void {}

  register() {}
}
