import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Collection2Component } from './collection2.component';

describe('Collection2Component', () => {
  let component: Collection2Component;
  let fixture: ComponentFixture<Collection2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Collection2Component]
    });
    fixture = TestBed.createComponent(Collection2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
