import { HttpClient } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';

import { UpdateFormComponent } from './update-form.component';

describe('UpdateFormComponent', () => {
  let component: UpdateFormComponent;
  let fixture: ComponentFixture<UpdateFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpdateFormComponent],
      providers: [FormBuilder, { provide: HttpClient, useValue: HttpClient }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
