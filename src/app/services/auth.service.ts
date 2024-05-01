import { Injectable } from '@angular/core';
import { jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  decodedToken: any;
  tokenKey = 'token';
  role: string = '';
  constructor() { }

  decodeToken(): any {
    try {
      this.decodeToken = jwtDecode(localStorage.getItem(this.tokenKey)!)
      return this.decodeToken;
    } catch (error) {
      console.error('Error decoding token:', error);
      return null;
    }
  }

  isAuthenticated(): any {
    this.decodedToken = this.decodeToken();
    if(this.decodedToken){
      if(this.decodedToken.expireDate > Date.now() * 1000){
        return true;
      }
      else{
        return false;
      }
    }
    else{
      return false;
    }
  }

}
