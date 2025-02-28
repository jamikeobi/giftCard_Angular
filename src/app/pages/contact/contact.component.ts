import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  orderForm: FormGroup;
  countries: string[] = ['United Kingdom', 'United States', 'Canada', 'Australia', 'Germany', 'France'];
  submitted = false;

  constructor(private fb: FormBuilder) {
    this.orderForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      companyName: ['', Validators.required],
      jobTitle: ['', Validators.required],
      businessEmail: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', Validators.required],
      country: ['', Validators.required],
      helpMessage: ['', Validators.required],
      subscribe: [false]
    });
  }

  onSubmit() {
    if (this.orderForm.valid) {
      this.submitted = true;
      console.log('Form Data:', this.orderForm.value);

      setTimeout(() => {
        this.submitted = false;
      }, 3000);
      // alert('Form submitted successfully!');
      this.orderForm.reset();
    } else {
      console.log('Please fill in all required fields.');
    }
  }
}
