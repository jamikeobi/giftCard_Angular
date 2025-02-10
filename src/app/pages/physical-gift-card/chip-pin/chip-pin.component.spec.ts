import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChipPinComponent } from './chip-pin.component';

describe('ChipPinComponent', () => {
  let component: ChipPinComponent;
  let fixture: ComponentFixture<ChipPinComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChipPinComponent]
    });
    fixture = TestBed.createComponent(ChipPinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
