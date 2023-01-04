import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { PersonalComponent } from './personal/personal.component';
import { CourselistComponent } from './courselist/courselist.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    PersonalComponent,
    CourselistComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    ReactiveFormsModule
  ]
})
export class UserModule { }
