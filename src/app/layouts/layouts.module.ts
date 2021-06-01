import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutsComponent } from './layouts.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { TitlebarComponent } from './components/titlebar/titlebar.component';


import { LayoutsRoutingModule } from './layouts-routing.module';

import { MyModule } from '../my.module';
import { MaterialModule } from '../material.module';





@NgModule({
  declarations: [
    LayoutsComponent,
    FooterComponent,
    SidebarComponent,
    TitlebarComponent
    
  ],
  imports: [
    CommonModule,
    LayoutsRoutingModule,
    MyModule,
    MaterialModule
  ],
})
export class LayoutsModule  {  }
