import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HowToBuyComponent } from './how-to-buy.component';

describe('HowToBuyComponent', () => {
  let component: HowToBuyComponent;
  let fixture: ComponentFixture<HowToBuyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HowToBuyComponent]
    });
    fixture = TestBed.createComponent(HowToBuyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
