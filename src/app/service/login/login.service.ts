import { Injectable } from '@angular/core';
import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

import { User } from '../../models/user/user';
import { Apiurl as apiurl } from '../../models/apiurl';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  ///private currentUserSubject: BehaviorSubject<User>;

  apiUrl = apiurl.apiUrl;

  constructor(public router: Router, private http: HttpClient) { }

  httpOption = {
    headers: new HttpHeaders({
      'context-type': 'application/json'
    })
  }

  // public getcurrentUserValue(): User {
  //   return this.currentUserSubject.value;
  // }


  // login page
  userLogin(name: any, password: any): Observable<User> {
    // console.log(name +'< -- >'+password);
    return this.http.post<any>(this.apiUrl + '/login', { name, password}).pipe(map
      (user => {
        //  console.log(user);
        return user;
      }));
  }
  userLogout() {
    localStorage.clear();
    
  }

}
