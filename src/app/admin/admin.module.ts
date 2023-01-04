import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminpageComponent } from './adminpage/adminpage.component';
import { DashboradComponent } from './dashborad/dashborad.component';
import { RoleComponent } from './role/role.component';
import { UserinfoComponent } from './userinfo/userinfo.component';
import { CourseinfoComponent } from './courseinfo/courseinfo.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AdminpageComponent,
    DashboradComponent,
    RoleComponent,
    UserinfoComponent,
    CourseinfoComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { }
