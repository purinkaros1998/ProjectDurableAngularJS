import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

import { Apiurl as apiurl } from '../../models/apiurl';


@Injectable({
  providedIn: 'root'
})
export class EditusersService {

  apiUrl = apiurl.apiUrl;

  constructor(public router: Router, private http: HttpClient) { }

  httpOption = {
    headers: new HttpHeaders({
      'context-type': 'application/json'
    })
  }

  Getedituser(id) {
    // alert(id);
    return this.http.get(this.apiUrl + '/restapi/users/'+id);
    
  }
  
}


