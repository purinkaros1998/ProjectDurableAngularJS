import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

import { Apiurl as apiurl } from '../../models/apiurl';
@Injectable({
  providedIn: 'root'
})
export class DatadurableService {
  
  length: any;

  apiUrl = apiurl.apiUrl;

  constructor(public router: Router, private http: HttpClient) { }

  httpOption = {
    headers: new HttpHeaders({
      'context-type': 'application/json'
    })
  }

  postDatadurable(create: any): Observable<DatadurableService>{
    // console.log(create);
    return this.http.post<any>(this.apiUrl + '/restapi/dataDurable', create);
  }



}
