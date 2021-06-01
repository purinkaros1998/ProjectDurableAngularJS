import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { DepreciationService } from '../../../service/post/depreciation.service'
import { DepartmentService } from 'src/app/service/get/department.service';
import Swal from 'sweetalert2';
import { CategoryService } from 'src/app/service/get/category.service';


@Component({
  selector: 'app-listdepreciation',
  templateUrl: './listdepreciation.component.html',
  styleUrls: ['./listdepreciation.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ListdepreciationComponent implements OnInit {

  //setMonths
  Month: any[] = [
    {value: '01', month: 'มกราคม'},
    {value: '02', month: 'กุมภาพันธ์'},
    {value: '03', month: 'มีนาคม'},
    {value: '04', month: 'เมษายน'},
    {value: '05', month: 'พฤษภาคม'},
    {value: '06', month: 'มิถุนายน'},
    {value: '07', month: 'กรกฎาคม'},
    {value: '08', month: 'สิงหาคม'},
    {value: '09', month: 'กันยายน'},
    {value: '10', month: 'ตุลาคม'},
    {value: '11', month: 'พฤศจิกายน'},
    {value: '12', month: 'ธันวาคม'},
    
  ];

  //setYears
  Year: any[] = [
    // {value: '2018', year: '2561'},
    // {value: '2019', year: '2562'},
    {value: '2020', year: '2563'},
    {value: '2021', year: '2564'},
    
  ];
  
  //Pagination footer
  currentPage: number = 1;

  //Input year and month
  reqYM = {
    year: '',
    month: '',
    category_id: ''
  }

  getCategory: any =[];
  Showdepreciation: any= [];



  constructor(
    public post_depreciation: DepreciationService,
    public get_category: CategoryService
  ) { }

  ngOnInit() {
    this.getcate();
  }

  checkDatadepreciation() {

    if (!this.reqYM.year || !this.reqYM.month  || !this.reqYM.category_id) {
      Swal.fire({
        icon: 'error',
        title: 'กรุณาป้อนข้อมูล!'
      })
    } else {
      this.post_depreciation.postDepreciation(this.reqYM).subscribe((res: {}) => {
        console.log(res['data']);
        this.Showdepreciation = res['data'];
      })
      // console.log(3+3);
    }

  }

  getcate(){
    this.get_category.getCategory().subscribe((res: {}) => {
      // console.log(res['data']);
      this.getCategory = res['data'];

    })
  }

}

