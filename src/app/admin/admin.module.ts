import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { UserinfoComponent } from './userinfo/userinfo.component';
import { CourseinfoComponent } from './courseinfo/courseinfo.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SidenavComponent } from './sidenav/sidenav.component';
import { AdminComponent } from './admin.component';
import { RoleComponent } from './role/role.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    declarations: [
        UserinfoComponent,
        CourseinfoComponent,
        SidenavComponent,
        AdminComponent,
        RoleComponent,
    ],
    imports: [
        CommonModule,
        AdminRoutingModule,
        ReactiveFormsModule,
        SharedModule
    ]
})

export class AdminModule { }
