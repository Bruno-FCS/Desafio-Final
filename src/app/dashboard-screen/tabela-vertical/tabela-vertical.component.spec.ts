import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabelaVerticalComponent } from './tabela-vertical.component';

describe('TabelaVerticalComponent', () => {
  let component: TabelaVerticalComponent;
  let fixture: ComponentFixture<TabelaVerticalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabelaVerticalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TabelaVerticalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
