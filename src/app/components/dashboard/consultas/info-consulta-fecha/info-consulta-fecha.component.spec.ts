import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoConsultaFechaComponent } from './info-consulta-fecha.component';

describe('InfoConsultaFechaComponent', () => {
  let component: InfoConsultaFechaComponent;
  let fixture: ComponentFixture<InfoConsultaFechaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoConsultaFechaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoConsultaFechaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
