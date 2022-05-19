import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacturacionNutricionistaMensualComponent } from './facturacion-nutricionista-mensual.component';

describe('FacturacionNutricionistaMensualComponent', () => {
  let component: FacturacionNutricionistaMensualComponent;
  let fixture: ComponentFixture<FacturacionNutricionistaMensualComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacturacionNutricionistaMensualComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FacturacionNutricionistaMensualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
