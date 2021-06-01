import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../../service/login/login.service';
import Swal from 'sweetalert2';



@Component({
  selector: 'app-titlebar',
  templateUrl: './titlebar.component.html',
  styleUrls: ['./titlebar.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TitlebarComponent implements OnInit {

  fullname = '';
  departments = '';
  // test(){
  //   console.log(this.fullname);
  // }

  constructor(
    public router: Router,
    public loginService: LoginService) { }

  ngOnInit() {

    this.fullname = localStorage.getItem('fullname');
    this.departments = localStorage.getItem('dep_name');
  }


  logout(){
    this.loginService.userLogout();
    Swal.fire({
      title: 'คุณต้องการออกจากระบบหรือไม่!',
      width: 600,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      confirmButtonText: 'ออกจากระบบ',
      cancelButtonColor: '#d33',
      cancelButtonText: 'ยกเลิก'
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.clear();
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'ออกจากระบบสำเร็จ',
          showConfirmButton: false,
          timer: 2000
        })
        this.router.navigate(['/']);
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        this.router.navigate(['/layouts']);
      }
    })
  }


}
