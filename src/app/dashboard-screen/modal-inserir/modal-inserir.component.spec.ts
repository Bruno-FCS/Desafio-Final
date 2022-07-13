import { HttpClient } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';

import { ModalInserirComponent } from './modal-inserir.component';

describe('ModalInserirComponent', () => {
  let component: ModalInserirComponent;
  let fixture: ComponentFixture<ModalInserirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModalInserirComponent],
      providers: [FormBuilder, { provide: HttpClient, useValue: HttpClient }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalInserirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
