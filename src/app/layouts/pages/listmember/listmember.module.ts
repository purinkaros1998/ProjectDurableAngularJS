import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListmemberComponent } from './listmember.component';
import { ListmemberRoutingModule } from './listmember-routing.module';

import { MaterialModule } from '../../../material.module';
import { MyModule } from '../../../my.module';

import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [ListmemberComponent],
  imports: [
    CommonModule,
    ListmemberRoutingModule,
    MaterialModule,
    MyModule,
    NgxPaginationModule
  ]
})
export class ListmemberModule { }
