import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminpageComponent } from './adminpage/adminpage.component';
import { CourseinfoComponent } from './courseinfo/courseinfo.component';

import { UserinfoComponent } from './userinfo/userinfo.component';

const routes: Routes = [
  {path:"userinfo",component:UserinfoComponent},
  {path:'courseinfo',component:CourseinfoComponent,},
  {path:'adminpage',component:AdminpageComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
