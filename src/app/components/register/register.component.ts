import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})

export class RegisterComponent {
    containerClass: string = "login-container";  

  addClass() {
    this.containerClass = "login-container right-panel-active";}
  removeClass() {
    this.containerClass = "login-container";}
}
