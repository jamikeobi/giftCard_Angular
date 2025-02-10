import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorporateGiftCardComponent } from './corporate-gift-card.component';

describe('CorporateGiftCardComponent', () => {
  let component: CorporateGiftCardComponent;
  let fixture: ComponentFixture<CorporateGiftCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CorporateGiftCardComponent]
    });
    fixture = TestBed.createComponent(CorporateGiftCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
