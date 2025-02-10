import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BikBonusesComponent } from './bik-bonuses.component';

describe('BikBonusesComponent', () => {
  let component: BikBonusesComponent;
  let fixture: ComponentFixture<BikBonusesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BikBonusesComponent]
    });
    fixture = TestBed.createComponent(BikBonusesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
