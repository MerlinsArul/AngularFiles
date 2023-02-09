import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { CourseinfoComponent } from './courseinfo/courseinfo.component';
import { RoleComponent } from './role/role.component';
import { UserinfoComponent } from './userinfo/userinfo.component';

const routes: Routes = [
  { path: 'userinfo', component: UserinfoComponent },
  { path: 'courseinfo', component: CourseinfoComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'role', component: RoleComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
