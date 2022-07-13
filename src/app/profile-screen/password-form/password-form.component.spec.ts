import { HttpClient } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';

import { PasswordFormComponent } from './password-form.component';

describe('PasswordFormComponent', () => {
  let component: PasswordFormComponent;
  let fixture: ComponentFixture<PasswordFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PasswordFormComponent],
      providers: [FormBuilder, { provide: HttpClient, useValue: HttpClient }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PasswordFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
