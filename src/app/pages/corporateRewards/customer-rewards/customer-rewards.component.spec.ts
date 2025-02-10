import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerRewardsComponent } from './customer-rewards.component';

describe('CustomerRewardsComponent', () => {
  let component: CustomerRewardsComponent;
  let fixture: ComponentFixture<CustomerRewardsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustomerRewardsComponent]
    });
    fixture = TestBed.createComponent(CustomerRewardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
