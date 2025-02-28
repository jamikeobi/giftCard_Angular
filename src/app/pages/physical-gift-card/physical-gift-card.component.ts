import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-physical-gift-card',
  templateUrl: './physical-gift-card.component.html',
  styleUrls: ['./physical-gift-card.component.css']
})
export class PhysicalGiftCardComponent {
  giftCardForm: FormGroup;
  images = [
    '../../../assets/images/physical_giftcard/blackcard.jpg',
    '../../../assets/images/physical_giftcard/taxfree.jpg',
    '../../../assets/images/physical_giftcard/chipPin.jpg',
    '../../../assets/images/physical_giftcard/perfectCouple.jpg',
    '../../../assets/images/physical_giftcard/birthday.jpg'
  ];
  constructor(private fb: FormBuilder) {
    this.giftCardForm = this.fb.group({
      amount: [10, [Validators.required, Validators.min(10), Validators.max(120)]],
      quantity: [1, [Validators.required, Validators.min(1)]],
      to: ['', Validators.required],
      from: ['', Validators.required],
      message: ['', [Validators.required, Validators.maxLength(250)]]
    });
  }

  saveMessage() {
    if (this.giftCardForm.get('to')?.valid && this.giftCardForm.get('from')?.valid && this.giftCardForm.get('message')?.valid) {
      // alert('Message saved successfully!');
      let closeButton = document.getElementById('closeModalBtn') as HTMLElement;
      closeButton.click(); // Close the modal
    }
  }

  onSubmit() {
    if (this.giftCardForm.valid) {
      console.log('Gift Card Details:', this.giftCardForm.value);
    }
  }
}
