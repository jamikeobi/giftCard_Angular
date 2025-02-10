import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SafeguardingMessageComponent } from './safeguarding-message.component';

describe('SafeguardingMessageComponent', () => {
  let component: SafeguardingMessageComponent;
  let fixture: ComponentFixture<SafeguardingMessageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SafeguardingMessageComponent]
    });
    fixture = TestBed.createComponent(SafeguardingMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
