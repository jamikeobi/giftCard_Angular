import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhyOne4AllComponent } from './why-one4-all.component';

describe('WhyOne4AllComponent', () => {
  let component: WhyOne4AllComponent;
  let fixture: ComponentFixture<WhyOne4AllComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WhyOne4AllComponent]
    });
    fixture = TestBed.createComponent(WhyOne4AllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
