import { HttpClient } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';

import { ModalAtualizarComponent } from './modal-atualizar.component';

describe('ModalAtualizarComponent', () => {
  let component: ModalAtualizarComponent;
  let fixture: ComponentFixture<ModalAtualizarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModalAtualizarComponent],
      providers: [FormBuilder, { provide: HttpClient, useValue: HttpClient }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalAtualizarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
