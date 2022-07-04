import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  changed = false;

  constructor() {}

  ngOnInit(): void {}

  updateChangedStatus(changed: boolean) {
    this.changed = changed;
  }

  closeWindow() {
    document.getElementById('alert')?.classList.add('fade-out');
    setTimeout(() => {
      this.changed = false;
    }, 900);
  }
}
