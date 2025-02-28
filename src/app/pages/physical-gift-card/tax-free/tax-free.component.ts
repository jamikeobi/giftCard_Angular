import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-tax-free',
  templateUrl: './tax-free.component.html',
  styleUrls: ['./tax-free.component.css']
})
export class TaxFreeComponent {
  giftCardForm: FormGroup;
  contactForm: FormGroup;
  images = [
    '../../../assets/images/physical_giftcard/taxfree.jpg',
    '../../../assets/images/physical_giftcard/blackcard',
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

    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      company: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern(/^\d{10,15}$/)]],
      newsletter: [false]
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

  submitForm() {
    if (this.contactForm.valid) {
      console.log('Form Submitted:', this.contactForm.value);
      alert('Request submitted successfully!');
    } else {
      this.contactForm.markAllAsTouched();
    }
  }
}
