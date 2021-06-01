import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { DepartmentService } from '../../../service/get/department.service';
import { CategoryService } from 'src/app/service/get/category.service';
import { BudgetService } from 'src/app/service/get/budget.service';
import { DatadurableService } from '../../../service/post/datadurable.service';
import { DurableService } from '../../../service/get/durable.service';
import { EditdurablesService } from 'src/app/service/get/editdurables.service';
import { DurablesService } from 'src/app/service/put/durables.service';
import { DurablassService } from '../../../service/delete/durablass.service';

import { Router } from '@angular/router';
import Swal from 'sweetalert2';



@Component({
  selector: 'app-listdurable',
  templateUrl: './listdurable.component.html',
  styleUrls: ['./listdurable.component.scss'],
  encapsulation: ViewEncapsulation.None
})


export class ListdurableComponent implements OnInit {

  create = {
    data_id: '',
    data_code: '',
    data_name: '',
    category_id: '',
    data_price: '',
    budget_id: '',
    dep_id: '',
    shop: '',
    buy_date: '',
    import_date: '',
    transfer_date: '',
    exp: '',
    distribution_date: '',
    note: ''
  };

  // durables: any = [];
  departments: any = [];
  budgets: any = [];
  categorys: any = [];
  datadurables: any = [];
  editdurables: any = [];

  // createSize = Object.keys(this.create).length;

  //show [hideded] Editdatadurables 
  ShowBudget: any = '';
  ShowCategory: any = '';
  ShowDepartment: any = '';
  ShowBuydate: any = '';
  ShowImportdate: any = '';
  ShowTranfersdate: any = '';


  //Pagination footer
  currentPage: number = 1;

  //set ckeckbox จำหน่าย
  enable = false;

  ngOnInit() {

    this.getdep();
    // this.getdurable();
    this.getbudget();
    this.getcategory();
    this.getdatadurable();
    // this.departments = localStorage.getItem('dep_name');
  }


  constructor(

    public router: Router,
    public get_department: DepartmentService,
    public get_Category: CategoryService,
    public get_Budget: BudgetService,
    public get_Datadurable: DurableService,
    public get_Editdurable: EditdurablesService,
    public post_Datadurables: DatadurableService,
    public put_Durable: DurablesService,
    public delete_Durable: DurablassService) { }

  getdep() {
    this.get_department.getDepartment().subscribe((res) => {
      //  console.log(res);
      // this.departments = res;
      this.departments = res['data'];
      //  console.log(this.departments);
    })
  }

  getbudget() {
    this.get_Budget.getBudget().subscribe((res: {}) => {
      // console.log(data);
      this.budgets = res['data'];
    })
  }

  getcategory() {
    this.get_Category.getCategory().subscribe((res: {}) => {
      // console.log(data);
      this.categorys = res['data'];
      //  console.log(this.categorys);
    })
  }

  getdatadurable() {
    this.get_Datadurable.Getdurable().subscribe((res: {}) => {
      // console.log(res['data']);
      this.datadurables = res['data'];

    })
  }

  geteditdatadurable(id) {
    this.get_Editdurable.Geteditdurable(id).subscribe((res: {}) => {
      //  console.log(res['data'].data_id);
      this.editdurables = res['data'];
      // console.log(this.editdurables);
      localStorage.setItem('data_id', res['data'].data_id);
      localStorage.setItem('data_code', res['data'].data_code);
      localStorage.setItem('data_name', res['data'].data_name);
      localStorage.setItem('category_id', res['data'].category_id);
      localStorage.setItem('data_price', res['data'].data_price);
      localStorage.setItem('budget_id', res['data'].budget_id);
      localStorage.setItem('dep_id', res['data'].dep_id);
      localStorage.setItem('shop', res['data'].shop);
      localStorage.setItem('buy_date', res['data'].buy_date);
      localStorage.setItem('import_date', res['data'].import_date);
      localStorage.setItem('transfer_date', res['data'].transfer_date);
      localStorage.setItem('exp', res['data'].exp);
      localStorage.setItem('distribution_date', res['data'].distribution_date);
      localStorage.setItem('note', res['data'].note);
      this.create.data_id = localStorage.getItem('data_id');
      this.create.data_code = localStorage.getItem('data_code');
      this.create.data_name = localStorage.getItem('data_name');
      this.create.category_id = localStorage.getItem('category_id');
      this.create.data_price = localStorage.getItem('data_price');
      this.create.budget_id = localStorage.getItem('budget_id');
      this.create.dep_id = localStorage.getItem('dep_id');
      this.create.shop = localStorage.getItem('shop');
      this.create.buy_date = localStorage.getItem('buy_date');
      this.create.import_date = localStorage.getItem('import_date');
      this.create.transfer_date = localStorage.getItem('transfer_date');
      this.create.exp = localStorage.getItem('exp');
      this.create.distribution_date = localStorage.getItem('distribution_date');
      this.create.note = localStorage.getItem('note');
    })
  }

  savedurable() {
    this.post_Datadurables.postDatadurable(this.create).subscribe(res => {
      //  console.log(res);
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'บันทึกสำเร็จ!',
        showConfirmButton: false,
        timer: 2500
      })
      this.btnReset();
    })
  }

  
  updateDurable() {
    Swal.fire({
      title: 'คุณต้องการแก้ไขครุภัณฑ์หรือไม่?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'ยืนยัน',
      cancelButtonText: 'ยกเลิก'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'แก้ไขครุภัณฑ์สำเร็จ!',
          ' ',
          'success'
        )
        this.put_Durable.putdurable(this.create).subscribe((res: {}) => {
          this.router.navigate['/listdurable'];
          window.location.reload();

          // console.log(res);
        })
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        this.router.navigate(['/layouts/listdurable']);
      }
    })
  }

  deleteDurable(data_id) {
    Swal.fire({
      title: 'คุณต้องการลบครุภัณฑ์หรือไม่?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'ยืนยัน',
      cancelButtonText: 'ยกเลิก'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'ลบครุภัณฑ์สำเร็จ!',
          ' ',
          'success'
        )
        this.delete_Durable.deletedurables(data_id).subscribe((res: {}) => {
          this.router.navigate['/listdurable'];
          window.location.reload();
          // console.log(res['data'].id);
        })
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        this.router.navigate(['/layouts/listdurable']);
      }
    })
  }

  // Status(){

  //   alert($('#status').is(:checked));
  // }


  btnReset() {
    this.create.data_code = null;
    this.create.data_name = null;
    this.create.category_id = null;
    this.create.data_price = null;
    this.create.budget_id = null;
    this.create.dep_id = null;
    this.create.shop = null;
    this.create.buy_date = null;
    this.create.import_date = null;
    this.create.transfer_date = null;
    this.create.note = null;
  }

}







