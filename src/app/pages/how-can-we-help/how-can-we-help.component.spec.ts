import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HowCanWeHelpComponent } from './how-can-we-help.component';

describe('HowCanWeHelpComponent', () => {
  let component: HowCanWeHelpComponent;
  let fixture: ComponentFixture<HowCanWeHelpComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HowCanWeHelpComponent]
    });
    fixture = TestBed.createComponent(HowCanWeHelpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
