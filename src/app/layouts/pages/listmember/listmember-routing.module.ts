import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListmemberComponent } from './listmember.component';


const routes: Routes = [{ path: '', component: ListmemberComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListmemberRoutingModule { }
