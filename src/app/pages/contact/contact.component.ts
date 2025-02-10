import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  contactForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      cardType: ['', Validators.required],
      queryType: ['', Validators.required],
      message: ['', [Validators.required, Validators.minLength(20)]],
      fullName: ['', Validators.required],
      postcode: [''],
      orderNumber: [''],
      cardId: [''],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern(/^\d{10,15}$/)]],
      images: [null]
    });
  }

  onFileChange(event: any) {
    if (event.target.files.length > 0) {
      this.contactForm.patchValue({ images: event.target.files });
    }
  }

  submitForm() {
    if (this.contactForm.valid) {
      console.log('Form Submitted:', this.contactForm.value);
      alert('Form submitted successfully!');
    } else {
      this.contactForm.markAllAsTouched();
    }
  }
}
