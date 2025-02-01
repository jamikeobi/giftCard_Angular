import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtraFeaturesComponent } from './extra-features.component';

describe('ExtraFeaturesComponent', () => {
  let component: ExtraFeaturesComponent;
  let fixture: ComponentFixture<ExtraFeaturesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExtraFeaturesComponent]
    });
    fixture = TestBed.createComponent(ExtraFeaturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
