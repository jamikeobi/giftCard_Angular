import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OgaLoginComponent } from './oga-login.component';

describe('OgaLoginComponent', () => {
  let component: OgaLoginComponent;
  let fixture: ComponentFixture<OgaLoginComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OgaLoginComponent]
    });
    fixture = TestBed.createComponent(OgaLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
