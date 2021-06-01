import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../service/login/login.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {
  hide = true;

  userData = {
    username: '',
    password: ''

  };
  constructor(public router: Router, private loginService: LoginService) { }

  ngOnInit(): void {
  }
  checkLogin() {
    //alert(this.userData.username+"<->"+this.userData.password);
    this.loginService.userLogin(this.userData.username, this.userData.password).subscribe(
      data => {
        // console.log(data);
        console.log(true);
        if (data.ok === true) {
          localStorage.setItem('token', data.token);
          localStorage.setItem('userid', data.id);
          localStorage.setItem('fullname', data.fullname);
          localStorage.setItem('dep_name', data.dep_name);
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'เข้าสู่ระบบสำเร็จ!',
            showConfirmButton: false,
            timer: 2000
          })
          this.router.navigate(['layouts']);
        } else {
          console.log(false);
          Swal.fire({
            icon: 'error',
            title: 'ไม่สามารถเข้าสู่ระบบได้!'
          });
        }

          // console.log(localStorage.getItem('data'));
        //this.router.navigate([this.returnUrl]);
        //  this.router.navigate(['dashboard']);
      },
      error => {
        console.log(false);
        Swal.fire({
          icon: 'error',
          title: 'ไม่สามารถเชื่อมต่อได้!'
        });
      });



    // if (this.userData.username == 'admin' && this.userData.password == '1234') {
    //   this.router.navigate(['/layout']);
    // } else {
    //   alert('Invalid username or password,please try again');
    // }

  }

}