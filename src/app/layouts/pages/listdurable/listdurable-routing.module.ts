import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListdurableComponent } from './listdurable.component';


const routes: Routes = [{ path: '', component: ListdurableComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListdurableRoutingModule { }
