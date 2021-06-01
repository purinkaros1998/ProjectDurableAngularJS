import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutsComponent } from './layouts.component';




const routes: Routes = [
  { 
    path: '', component: LayoutsComponent, children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule), },
      { path: 'listdurable', loadChildren: () => import('./pages/listdurable/listdurable.module').then(m => m.ListdurableModule) },
      { path: 'listmember', loadChildren: () => import('./pages/listmember/listmember.module').then(m => m.ListmemberModule) },
      { path: 'listdepreciation', loadChildren: () => import('./pages/listdepreciation/listdepreciation.module').then(m => m.ListdepreciationModule) }
     
      
    ]

  }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutsRoutingModule { }


