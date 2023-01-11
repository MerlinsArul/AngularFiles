import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseinfoComponent } from '../admin/courseinfo/courseinfo.component';
import { UserinfoComponent } from '../admin/userinfo/userinfo.component';
import { HomepageComponent } from '../home/homepage/homepage.component';
import { LoginComponent } from '../home/login/login.component';
import { SignupComponent } from '../home/signup/signup.component';
import { ContactComponent } from '../home/contact/contact.component';
import { CourseComponent } from './course/course.component';
import { EnrollComponent } from './enroll/enroll.component';
import { BigdataComponent } from './study/bigdata/bigdata.component';
import { DevopsComponent } from './study/devops/devops.component';
import { CyberComponent } from './study/cyber/cyber.component';
import { DigitalComponent } from './study/digital/digital.component';
import { AiComponent } from './study/ai/ai.component';
import { AngularComponent } from './study/angular/angular.component';
import { AdminpageComponent } from '../admin/adminpage/adminpage.component';
import { AboutusComponent } from '../home/aboutus/aboutus.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'course',component:CourseComponent},
  {path:'enroll',component:EnrollComponent},
  {path:'contact',component:ContactComponent},
  {path:'userinfo',component:UserinfoComponent},
  {path:'courseinfo',component:CourseinfoComponent},
  {path:'homepage',component:HomepageComponent},
  {path:'bigdata',component:BigdataComponent},
  {path:'devops',component:DevopsComponent},
  {path:'cyber',component:CyberComponent},
  {path:'digital',component:DigitalComponent},
  {path:'ai',component:AiComponent},
  {path:'angular',component:AngularComponent},
  {path:'adminpage',component:AdminpageComponent},
  {path:'aboutus',component:AboutusComponent}
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SharedRoutingModule { }
