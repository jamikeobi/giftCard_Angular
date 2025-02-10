import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerIncentivesComponent } from './customer-incentives.component';

describe('CustomerIncentivesComponent', () => {
  let component: CustomerIncentivesComponent;
  let fixture: ComponentFixture<CustomerIncentivesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustomerIncentivesComponent]
    });
    fixture = TestBed.createComponent(CustomerIncentivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
