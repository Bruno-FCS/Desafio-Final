import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  updated = false;
  changed = false;

  constructor() {}

  ngOnInit(): void {}

  updateUpdatedStatus(updated: boolean) {
    this.updated = updated;
  }

  updateChangedStatus(changed: boolean) {
    this.changed = changed;
  }

  closeWindow(fieldId: string) {
    document.getElementById(fieldId)?.classList.add('fade-out');
    if (fieldId == 'alert-1') {
      setTimeout(() => {
        this.updated = false;
      }, 500);
    }
    if (fieldId == 'alert-2') {
      setTimeout(() => {
        this.changed = false;
      }, 500);
    }
  }
}
