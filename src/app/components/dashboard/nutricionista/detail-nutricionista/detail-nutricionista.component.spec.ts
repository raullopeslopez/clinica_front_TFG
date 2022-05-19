import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailNutricionistaComponent } from './detail-nutricionista.component';

describe('DetailNutricionistaComponent', () => {
  let component: DetailNutricionistaComponent;
  let fixture: ComponentFixture<DetailNutricionistaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailNutricionistaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailNutricionistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
