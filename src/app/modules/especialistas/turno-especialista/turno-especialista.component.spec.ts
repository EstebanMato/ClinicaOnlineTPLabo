import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TurnoEspecialistaComponent } from './turno-especialista.component';

describe('TurnoEspecialistaComponent', () => {
  let component: TurnoEspecialistaComponent;
  let fixture: ComponentFixture<TurnoEspecialistaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TurnoEspecialistaComponent]
    });
    fixture = TestBed.createComponent(TurnoEspecialistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
