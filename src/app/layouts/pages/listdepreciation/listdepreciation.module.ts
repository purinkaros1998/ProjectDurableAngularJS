import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListdepreciationComponent } from './listdepreciation.component';
import { ListdepreciationRoutingModule } from './listdepreciation-routing.module';

import { MaterialModule } from '../../../material.module';
import { MyModule } from '../../../my.module';
import { NgxPaginationModule } from 'ngx-pagination';



@NgModule({
  declarations: [ListdepreciationComponent],
  imports: [
    CommonModule,
    ListdepreciationRoutingModule,
    MaterialModule,
    MyModule,
    NgxPaginationModule
  ]
})
export class ListdepreciationModule { }
