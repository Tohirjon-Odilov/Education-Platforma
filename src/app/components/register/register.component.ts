import { Component, ElementRef, ViewChild } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})

export class RegisterComponent {

  
  constructor(private authService: AuthService, private router: Router) {

  }
  // onSubmit(form: NgForm) {
  //   console.log('Form submitted:', form.value);
  //   // Process form data here (e.g., send to server)
  //   form.reset(); // Reset form after submission
  // }
  name = '';
  email = '';
  password = '';

    containerClass: string = "login-container";  

  addClass() {
    this.containerClass = "login-container right-panel-active";}
  removeClass() {
    this.containerClass = "login-container";
  }



  login() {
    const data = {
      email: this.email,
      password: this.password
    };
  
    this.authService.login(data).subscribe({
      next: (response) => {
        console.log(response.isSuccess)
        if (response.isSuccess === true) {
          const decodedToken: any = this.authService.decodeToken();
          // console.log(decodedToken);
          console.log(decodedToken);
          if (decodedToken.role === 'User') {
            this.router.navigate(['/overwiew']);
          } else if (decodedToken.role === 'Admin') {
            this.router.navigate(['']);
          }
  
          this.email = '';
          this.password = '';
        } else {
          console.log('keldi lekin response null');
          // alert('Oops! Something went wrong. Please try again.');
          console.log(response);
          this.email = '';
          this.password = '';
        }
      },
      error: (err) => {
        console.error(err);
        console.log('vashshe error');
        // alert('Oops! Something went wrong. Please try again.');
        this.email = '';
        this.password = '';
      }
    });
  }
  


register(){
  var data  = {
    fullName: this.name,
    email: this.email,
    password: this.password,
    status: 'active',
    age: 19,
    roles: ['user'],
  }

  this.authService.register(data).subscribe({
    next: (response) => {
      if(response.succeeded){
        this.removeClass()
        this.name = '';
        this.email = '';
        this.password = '';
      }
      else{
        alert('Oops !, Can you try again');
        this.name = '';
        this.email = '';
        this.password = '';
      }
    }, 
    error: (err) => {
      // alert(err.message)
      alert('Oops !, Can you try again');
      this.name = '';
      this.email = '';
      this.password = '';
    }
  })


}

}
