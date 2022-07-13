import { HttpClient } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';

import { ModalDeletarComponent } from './modal-deletar.component';

describe('ModalDeletarComponent', () => {
  let component: ModalDeletarComponent;
  let fixture: ComponentFixture<ModalDeletarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModalDeletarComponent],
      providers: [FormBuilder, { provide: HttpClient, useValue: HttpClient }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalDeletarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
