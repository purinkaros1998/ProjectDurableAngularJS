import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListdurableComponent } from './listdurable.component';

import { ListdurableRoutingModule } from './listdurable-routing.module';
import { MaterialModule } from '../../../material.module';
import { MyModule } from '../../../my.module';

import { DateAdapter } from "@angular/material";
import { DateFormat } from "./date-format";
import { NgxPaginationModule } from 'ngx-pagination';





@NgModule({
  declarations: [ListdurableComponent],
  imports: [
    CommonModule,
    ListdurableRoutingModule,
    MaterialModule,
    MyModule,
    NgxPaginationModule
  ],
  providers: [{ provide: DateAdapter, useClass: DateFormat,  }],
})
export class ListdurableModule {
  constructor(private dateAdapter: DateAdapter<Date>) {
    dateAdapter.setLocale("th-TH"); // DD/MM/YYYY
  }
 }
