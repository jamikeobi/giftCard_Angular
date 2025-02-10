import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-perfect-couple-gift-card',
  templateUrl: './perfect-couple-gift-card.component.html',
  styleUrls: ['./perfect-couple-gift-card.component.css']
})
export class PerfectCoupleGiftCardComponent {
  giftCardForm: FormGroup;

  activeTab: string = 'whyOne4All'; // Default active tab


  images = [
    '../../../../assets/images/giftcard/giftcard5.jpg',
    '../../../assets/images/giftcard/giftcard2.jpg',
    '../../../../assets/images/gift_card.jpg',
    '../../../assets/images/giftcard/giftcard3.jpg',
    '../../../assets/images/giftcard/giftcard4.jpg'
  ];
  constructor(private fb: FormBuilder) {
    this.giftCardForm = this.fb.group({
      amount: [120, [Validators.required, Validators.min(10), Validators.max(120)]],
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
