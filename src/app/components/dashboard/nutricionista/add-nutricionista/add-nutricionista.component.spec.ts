import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNutricionistaComponent } from './add-nutricionista.component';

describe('AddNutricionistaComponent', () => {
  let component: AddNutricionistaComponent;
  let fixture: ComponentFixture<AddNutricionistaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddNutricionistaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNutricionistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
