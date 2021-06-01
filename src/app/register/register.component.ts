import { Component, OnInit, ViewEncapsulation } from '@angular/core';
// import { RegisterService } from '../api/register.service';
import { Router } from '@angular/router';
import { FormControl, Validators } from '@angular/forms';
import { LoginService } from '../service/login/login.service';
import { DepartmentService } from '../service/get/department.service';
import { Observable } from 'rxjs';
// import { NodejsCrudService } from '../api/nodejs-crud.service';

import Swal from 'sweetalert2';
import { RegisterService } from '../service/post/register.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  encapsulation: ViewEncapsulation.None
})



export class RegisterComponent implements OnInit {

  register = {
    name: '',
    password: '',
    email: '',
    firstname: '',
    lastname: '',
    dep_id: ''
  };

  // departments: any = [];
  departments: any =[];

  //checkemailRequired
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  constructor(
    public router: Router,
    public registerservice: RegisterService,
    public departmentservice: DepartmentService) { }

  ngOnInit() {
    this.getdep();
  }
  saveregister() {
    this.registerservice.postUser(this.register).subscribe(data => {
      //  console.log(data);
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'สมัครสมาชิกสำเร็จ!',
        showConfirmButton: false,
        timer: 2000
      })
      this.router.navigate(['/login']);
    })
  }

  getdep() {
    this.departmentservice.getDepartment().subscribe((res => {
      // console.log(res['data']);
      //   this. departments$ = data['data'];
      this.departments = res['data'];
      // console.log(this.departments);
    }));
  }


}
