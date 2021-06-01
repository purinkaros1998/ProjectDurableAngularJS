import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

import { Apiurl as apiurl } from '../../models/apiurl';


@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  apiUrl = apiurl.apiUrl;

  constructor(public router: Router, private http: HttpClient) { }

  httpOption = {
    headers: new HttpHeaders({
      'context-type': 'application/json'
    })
  }

  getCategory() {
    return this.http.get(this.apiUrl + '/restapi/category');
    
  }
  
}
