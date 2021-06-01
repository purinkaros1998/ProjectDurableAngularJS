import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

import { Apiurl as apiurl } from '../../models/apiurl';


@Injectable({
  providedIn: 'root'
})
export class EditdurablesService {

  apiUrl = apiurl.apiUrl;

  constructor(public router: Router, private http: HttpClient) { }

  httpOption = {
    headers: new HttpHeaders({
      'context-type': 'application/json'
    })
  }

  Geteditdurable(id) {
    // alert(id);
    return this.http.get(this.apiUrl + '/restapi/datadurables/'+id);
    
  }
  
}


