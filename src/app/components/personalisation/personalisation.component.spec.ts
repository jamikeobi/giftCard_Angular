import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalisationComponent } from './personalisation.component';

describe('PersonalisationComponent', () => {
  let component: PersonalisationComponent;
  let fixture: ComponentFixture<PersonalisationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PersonalisationComponent]
    });
    fixture = TestBed.createComponent(PersonalisationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
