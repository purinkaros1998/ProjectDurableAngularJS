import { Component, OnInit } from '@angular/core';
// import { NodejsCrudService } from './api/nodejs-crud.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular-app';

  constructor() {

  }

  ngOnInit() {
    // this.getDataFromAPI();
  }

  // getDataFromAPI() {
  //   this.service.getData().subscribe((response) => {
  //     // console.log('Response from API is', response)
  //   }, (error) => {
  //     console.log('Error is ', error);
  //   })
  // }
}
