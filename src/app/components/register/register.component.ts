import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  @ViewChild('loginBtn') loginBtn!: ElementRef;
  @ViewChild('signupBtn') signupBtn!: ElementRef;
  loginFormSlideUp: boolean = false;

  toggleForm(formType: string) {
    if (formType === 'signup') {
      this.loginFormSlideUp = true;
    } else if (formType === 'login') {
      this.loginFormSlideUp = false;
    }
  }
}
