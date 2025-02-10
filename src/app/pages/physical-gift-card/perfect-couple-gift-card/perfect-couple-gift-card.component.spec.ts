import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfectCoupleGiftCardComponent } from './perfect-couple-gift-card.component';

describe('PerfectCoupleGiftCardComponent', () => {
  let component: PerfectCoupleGiftCardComponent;
  let fixture: ComponentFixture<PerfectCoupleGiftCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PerfectCoupleGiftCardComponent]
    });
    fixture = TestBed.createComponent(PerfectCoupleGiftCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
