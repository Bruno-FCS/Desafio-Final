import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from '../../services';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css'],
})
export class SettingsComponent {
  showSettings = false;
  user$ = this.userService.returnUser();

  constructor(private userService: UserService, private router: Router) {}

  openSettings() {
    this.showSettings = !this.showSettings;
  }

  logout() {
    this.userService.logout();
    this.router.navigate(['']);
  }
}
