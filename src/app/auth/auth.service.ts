import { Injectable } from '@angular/core';
import { JwtHelperService } from "@auth0/angular-jwt";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor() { }
  // token =localStorage.getItem('token');
  jwtHelper = new JwtHelperService();
  //constructor(public jwtHelper: JwtHelperService) {}
  // ...
  public isAuthenticated(): boolean {
    const token: any = localStorage.getItem('token');
    // Check whether the token is expired and return
    // true or false
    // const token2 = this.token;
    return !this.jwtHelper.isTokenExpired(token);
  }
  
}
