import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent {
  createAccountForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.createAccountForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      countryCode: ['+1', Validators.required],
      phoneNumber: ['', [Validators.required, Validators.pattern('^[0-9]{7,15}$')]],
      email: ['', [Validators.required, Validators.email]],
      confirmEmail: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(6)]],
      recaptcha: ['', Validators.required], 
      emailUpdates: [false],
      smsUpdates: [false],
    }, { validators: this.matchEmailsAndPasswords });
  }

  matchEmailsAndPasswords(group: FormGroup) {
    const email = group.get('email')?.value;
    const confirmEmail = group.get('confirmEmail')?.value;
    const password = group.get('password')?.value;
    const confirmPassword = group.get('confirmPassword')?.value;

    return email === confirmEmail && password === confirmPassword ? null : { mismatch: true };
  }

  onSubmit() {
    if (this.createAccountForm.valid) {
      console.log('Account created!', this.createAccountForm.value);
    } else {
      console.log('Form is invalid');
    }
  }
}
