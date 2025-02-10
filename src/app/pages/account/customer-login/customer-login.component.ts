import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer-login',
  templateUrl: './customer-login.component.html',
  styleUrls: ['./customer-login.component.css']
})
export class CustomerLoginComponent {

  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      recaptcha: ['', Validators.required] // Placeholder for reCAPTCHA
    });
  }

  isFieldInvalid(field: string) {
    const control = this.loginForm.get(field);
    return control?.invalid && (control.dirty || control.touched);
  }

  onSubmit() {
    if (this.loginForm.valid) {
      console.log('Login successful!', this.loginForm.value);
      // Implement login logic here
    } else {
      console.log('Form is invalid');
    }
  }

  navigateToCreateAccount() {
    this.router.navigate(['/customer/account/create']);
  }

}
