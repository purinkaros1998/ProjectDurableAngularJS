import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

import { Apiurl as apiurl } from '../../models/apiurl';
@Injectable({
  providedIn: 'root'
})
export class UsersService {
  
  length = 0 ;

  apiUrl = apiurl.apiUrl;

  constructor(public router: Router, private http: HttpClient) { }

  httpOption = {
    headers: new HttpHeaders({
      'context-type': 'application/json'
    })
  }

  putusers(Updateuser: any): Observable<UsersService> {
     console.log(Updateuser);
    return this.http.put<any>(this.apiUrl + '/restapi/users', Updateuser);
  }



}





