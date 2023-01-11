import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseComponent } from '../shared/course/course.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path:'homepage',component:HomepageComponent},
  {path:'course',component:CourseComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
