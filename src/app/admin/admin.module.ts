import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminpageComponent } from './adminpage/adminpage.component';
import { UserinfoComponent } from './userinfo/userinfo.component';
import { CourseinfoComponent } from './courseinfo/courseinfo.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { SidenavComponent } from './sidenav/sidenav.component';




@NgModule({
  declarations: [
    AdminpageComponent,
   UserinfoComponent,
    CourseinfoComponent,
    SidenavComponent,

  
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    SharedModule,
   

  ],

})
export class AdminModule { }
