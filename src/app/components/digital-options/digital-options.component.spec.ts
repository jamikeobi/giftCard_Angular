import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DigitalOptionsComponent } from './digital-options.component';

describe('DigitalOptionsComponent', () => {
  let component: DigitalOptionsComponent;
  let fixture: ComponentFixture<DigitalOptionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DigitalOptionsComponent]
    });
    fixture = TestBed.createComponent(DigitalOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
