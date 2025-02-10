import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HaveBiggerBudgetComponent } from './have-bigger-budget.component';

describe('HaveBiggerBudgetComponent', () => {
  let component: HaveBiggerBudgetComponent;
  let fixture: ComponentFixture<HaveBiggerBudgetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HaveBiggerBudgetComponent]
    });
    fixture = TestBed.createComponent(HaveBiggerBudgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
