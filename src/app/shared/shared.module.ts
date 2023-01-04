import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedRoutingModule } from './shared-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { CourseComponent } from './course/course.component';



@NgModule({
  declarations: [
   NavbarComponent,
   CourseComponent],
  imports: [
    CommonModule,
    SharedRoutingModule
  ],
 exports:[
  NavbarComponent
]
})
export class SharedModule { }
