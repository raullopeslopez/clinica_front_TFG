import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditNutricionistaComponent } from './edit-nutricionista.component';

describe('EditNutricionistaComponent', () => {
  let component: EditNutricionistaComponent;
  let fixture: ComponentFixture<EditNutricionistaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditNutricionistaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditNutricionistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
