import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaxFreeComponent } from './tax-free.component';

describe('TaxFreeComponent', () => {
  let component: TaxFreeComponent;
  let fixture: ComponentFixture<TaxFreeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TaxFreeComponent]
    });
    fixture = TestBed.createComponent(TaxFreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
