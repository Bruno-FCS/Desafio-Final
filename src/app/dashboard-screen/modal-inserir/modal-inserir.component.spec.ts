import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalInserirComponent } from './modal-inserir.component';

describe('ModalInserirComponent', () => {
  let component: ModalInserirComponent;
  let fixture: ComponentFixture<ModalInserirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalInserirComponent ]
    })
    .compileComponents();
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
