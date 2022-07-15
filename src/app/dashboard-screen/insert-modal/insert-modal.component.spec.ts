import { HttpClient } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';

import { InsertModalComponent } from './insert-modal.component';

describe('InsertModalComponent', () => {
  let component: InsertModalComponent;
  let fixture: ComponentFixture<InsertModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InsertModalComponent],
      providers: [FormBuilder, { provide: HttpClient, useValue: HttpClient }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
