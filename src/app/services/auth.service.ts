import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';
import { Observable, map } from 'rxjs';
import { Register } from '../models/register';
import { Response } from '../models/response';
import { Login } from '../models/login';
import { TokenModel } from '../models/token-model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = "https://auth.tohirjon.uz/api/";

  constructor(private router: Router, private http: HttpClient) { }  
  decodedToken: any;
  tokenKey = 'accessToken';
  role: string = '';


  decodeToken(): any {
    try {
      return jwtDecode(localStorage.getItem(this.tokenKey)!);
      // console.log(this.decodedToken);
    } catch (error) {
      console.error('Error decoding token:', error);
      console.log('Token decode qilinmadi')
      return null;
    }
  }

  register(data:any) : Observable<Response>{
    console.log('ishladi');
    return this.http.post<Response>(`${this.apiUrl}Users/Register`, data).pipe(
      map((response)=>{
        console.log('keldi');
        if(response.succeeded){
          console.log("Registered");
        }
        return response;
      })
    );
  }

  login(data: Login): Observable<TokenModel> {
    console.log("salom");
    return this.http.post<TokenModel>(`${this.apiUrl}Users/Login`, data).pipe(
      map((response) => {
        console.log(response);
        if (response && response.isSuccess === true) {
          console.log("Login");
          localStorage.setItem(this.tokenKey, response.token);
          console.log(response);
        }
        return response;
      })
    );
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

  isUser(): any {
    this.decodedToken = this.decodeToken();
    if(this.decodedToken != 'User'){
      this.router.navigate(['/register']);
    }


  }

}
