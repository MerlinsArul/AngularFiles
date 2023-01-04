import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserinfoComponent } from './userinfo/userinfo.component';

const routes: Routes = [
  {path:"userinfo",component:UserinfoComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
