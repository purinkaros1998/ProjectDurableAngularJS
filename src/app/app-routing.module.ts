import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { LoginRoutingModule } from './login/login-routing.module';
// import { LoginComponent } from './login/login.component';
// import { LoginModule } from './login/login.module';
import { AuthserviceGuard as AuthGuard } from './authservice.guard';

const routes: Routes = [
  { path: '', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)},
  { path: 'layouts', loadChildren: () => import('./layouts/layouts.module').then(m => m.LayoutsModule), canActivate: [AuthGuard]}, 
  { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule)},
  { path: 'register', loadChildren: () => import('./register/register.module').then(m => m.RegisterModule)},
  { path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)},
  { path: '**', redirectTo:''}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
