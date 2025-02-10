import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffRewardsComponent } from './staff-rewards.component';

describe('StaffRewardsComponent', () => {
  let component: StaffRewardsComponent;
  let fixture: ComponentFixture<StaffRewardsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StaffRewardsComponent]
    });
    fixture = TestBed.createComponent(StaffRewardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
