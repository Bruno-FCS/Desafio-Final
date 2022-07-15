import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { FormValidations } from '../../validators';
import { ProfileService } from '../../services';
import { User } from '../../models';
import { UserService } from '../../services';

@Component({
  selector: 'app-password-form',
  templateUrl: './password-form.component.html',
  styleUrls: ['./password-form.component.css'],
})
export class PasswordFormComponent implements OnInit {
  user$ = this.userService.returnUser();

  passwordForm!: FormGroup;
  error = false;

  @Output() changedEvent = new EventEmitter<boolean>();
  changed = false;

  user_id!: any;
  user_former_password!: string;
  user_password!: string;
  user_password_confirm!: string;

  constructor(
    private userService: UserService,
    private profileService: ProfileService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.passwordForm = this.formBuilder.group({
      user_id: [null],
      user_former_password: [
        '',
        [Validators.required, Validators.minLength(6)],
      ],
      user_password: [null, [Validators.required, Validators.minLength(6)]],
      user_password_confirm: [
        null,
        [Validators.required, FormValidations.equalsTo('user_password')],
      ],
    });
  }

  changePassword() {
    if (this.passwordForm.valid) {
      const user = this.passwordForm.getRawValue() as User;
      this.profileService.changePassword(user).subscribe(
        () => {
          this.changed = true;
          this.changedEvent.emit(this.changed);
          this.resetFields();
          this.error = false;
        },
        (error) => {
          this.error = true;
        }
      );
    }
  }

  resetFields() {
    this.passwordForm.get('user_former_password')?.reset();
    this.passwordForm.get('user_password')?.reset();
    this.passwordForm.get('user_password_confirm')?.reset();
  }
}
