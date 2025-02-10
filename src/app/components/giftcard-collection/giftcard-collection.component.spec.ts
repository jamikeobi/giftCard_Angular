import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GiftcardCollectionComponent } from './giftcard-collection.component';

describe('GiftcardCollectionComponent', () => {
  let component: GiftcardCollectionComponent;
  let fixture: ComponentFixture<GiftcardCollectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GiftcardCollectionComponent]
    });
    fixture = TestBed.createComponent(GiftcardCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
