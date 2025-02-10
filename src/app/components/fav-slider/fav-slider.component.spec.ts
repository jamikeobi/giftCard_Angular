import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavSliderComponent } from './fav-slider.component';

describe('FavSliderComponent', () => {
  let component: FavSliderComponent;
  let fixture: ComponentFixture<FavSliderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FavSliderComponent]
    });
    fixture = TestBed.createComponent(FavSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
