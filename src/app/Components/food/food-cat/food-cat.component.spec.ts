import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodCatComponent } from './food-cat.component';

describe('FoodCatComponent', () => {
  let component: FoodCatComponent;
  let fixture: ComponentFixture<FoodCatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoodCatComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FoodCatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
