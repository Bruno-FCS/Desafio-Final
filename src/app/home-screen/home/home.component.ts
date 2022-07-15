import { Component } from '@angular/core';

import { UserService } from '../../services';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  user$ = this.userService.returnUser();

  constructor(private userService: UserService) {}
}
