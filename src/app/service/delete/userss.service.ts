import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

import { Apiurl as apiurl } from '../../models/apiurl';
@Injectable({
  providedIn: 'root'
})
export class UserssService {

  length: any = '';
  apiUrl = apiurl.apiUrl;

  constructor(public router: Router, private http: HttpClient) { }

  httpOption = {
    headers: new HttpHeaders({
      'context-type': 'application/json'
    })
  }

  deleteusers(id: any): Observable<any> {
    console.log(id);
    return this.http.delete<any>(this.apiUrl + '/restapi/users/' + id);
  }
}





