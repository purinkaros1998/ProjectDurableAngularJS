import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
// import { cleanData } from 'jquery';
import { DepartmentService } from 'src/app/service/get/department.service';
import { EditusersService } from 'src/app/service/get/editusers.service';
import { UserService } from 'src/app/service/get/user.service';
import { UserssService } from 'src/app/service/delete/userss.service';
import { UsersService } from 'src/app/service/put/users.service';


import Swal from 'sweetalert2';

@Component({
  selector: 'app-listmember',
  templateUrl: './listmember.component.html',
  styleUrls: ['./listmember.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ListmemberComponent implements OnInit {

  Updateuser = {
    id: '',
    name: '',
    password: '',
    email: '',
    firstname: '',
    lastname: '',
    dep_id: ''
  }

  users: any = [];
  editusers: any = [];
  departments: any = [];

  ShowDepartment: any = '';
  ShowPassword: any = '';
  
  //Pagination footer
  currentPage:number = 1;

  

  constructor(
    public router: Router,
    public get_User: UserService,
    public get_Edituser: EditusersService,
    public get_Department: DepartmentService,
    public put_users: UsersService,
    public delete_users: UserssService
  ) { }

  ngOnInit() {
    this.getuser();
    this.getdepartment();
    // this.updateUsers();
    // this.hideInput();
  }

  // hideInput() {
  //   this.ShowPassword = true;
  // }

  // hideInput() {
  //   this.ShowDepartment = true;
  // }

  getuser() {
    this.get_User.Getuser().subscribe((res: {}) => {
      // console.log(res['data']);
      this.users = res['data'];
    })
  }

  getdepartment() {
    this.get_Department.getDepartment().subscribe((res: {}) => {
      // console.log(res['data']);
      this.departments = res['data'];
    })
  }

  geteditusers(id) {
    this.get_Edituser.Getedituser(id).subscribe((res: {}) => {
      localStorage.setItem('id', res['data'].id);
      localStorage.setItem('name', res['data'].name);
      localStorage.setItem('password', res['data'].password);
      localStorage.setItem('email', res['data'].email);
      localStorage.setItem('firstname', res['data'].firstname);
      localStorage.setItem('lastname', res['data'].lastname);
      localStorage.setItem('dep_id', res['data'].dep_id);
      this.Updateuser.id = localStorage.getItem('id');
      this.Updateuser.name = localStorage.getItem('name');
      this.Updateuser.password = localStorage.getItem('password');
      this.Updateuser.email = localStorage.getItem('email');
      this.Updateuser.firstname = localStorage.getItem('firstname');
      this.Updateuser.lastname = localStorage.getItem('lastname');
      this.Updateuser.dep_id = localStorage.getItem('dep_id');
      console.log(res['data']);
      this.editusers = res['data'];
    })
  }

  updateUsers() {
    Swal.fire({
      title: 'คุณต้องการเพิ่มสมาชิกหรือไม่?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'ยืนยัน',
      cancelButtonText: 'ยกเลิก'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'เพิ่มสมาชิกสำเร็จ!',
          ' ',
          'success'
        )
        this.put_users.putusers(this.Updateuser).subscribe((res: {}) => {
          this.router.navigate['/listmember'];
          //  window.location.reload();
          // console.log(res['data'].id);
          //  console.log(res);
        })
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        this.router.navigate(['/layouts/listmember']);
       
      }
    })
  }

  deleteUsers(id) {
    Swal.fire({
      title: 'คุณต้องการลบสมาชิกหรือไม่?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'ยืนยัน',
      cancelButtonText: 'ยกเลิก'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'ลบสมาชิกสำเร็จ!',
          ' ',
          'success'
        )
        this.delete_users.deleteusers(id).subscribe((res: {}) => {
          this.router.navigate['/listmember'];
          window.location.reload();
          // console.log(res['data'].id);
        })
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        this.router.navigate(['/layouts/listmember']);
      }
    })
  }

}
