import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './home/login/login.component';

const routes: Routes = [
 {path:"course",loadChildren:()=>import('./course/course.module')
.then(mod=>mod.CourseModule)},
 {path:"home",loadChildren:()=>import('./home/home.module')
.then(mod=>mod.HomeModule)},
{path:"shared",loadChildren:()=>import('./shared/shared.module')
.then(mod=>mod.SharedModule)},
{path:"user",loadChildren:()=>import('./user/user.module')
.then(mod=>mod.UserModule)},
{path:"admin",loadChildren:()=>import('./admin/admin.module')
.then(mod=>mod.AdminModule)},
//{path:'login',component:LoginComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
