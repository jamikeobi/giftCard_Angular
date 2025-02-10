import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-oga-login',
  templateUrl: './oga-login.component.html',
  styleUrls: ['./oga-login.component.css']
})
export class OgaLoginComponent {

  loginForm: FormGroup;

  siteKey = "6LcsI8wqAAAAAGg34e1dGBlslZ_YsBKNR2-4NkXl"

  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      captcha: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      console.log('Logging in with:', this.loginForm.value);
    }
  }

  forgotPassword() {
  }

}
