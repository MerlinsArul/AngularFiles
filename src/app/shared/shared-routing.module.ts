import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseinfoComponent } from '../admin/courseinfo/courseinfo.component';
import { UserinfoComponent } from '../admin/userinfo/userinfo.component';
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
import { AuthGuard } from './services/auth.guard';
import { CheckoutComponent } from './checkout/checkout.component';
import { JavaComponent } from './study/java/java.component';
import { ReactComponent } from './study/react/react.component';
import { CloudComponent } from './study/cloud/cloud.component';
import { CoursefileComponent } from './enroll/coursefile/coursefile.component';

const routes: Routes = [
  { path: 'course', component: CourseComponent },
  { path: 'bigdata', component: BigdataComponent },
  { path: 'devops', component: DevopsComponent },
  { path: 'cyber', component: CyberComponent },
  { path: 'digital', component: DigitalComponent },
  { path: 'java', component: JavaComponent },
  { path: 'react', component: ReactComponent },
  { path: 'cloud', component: CloudComponent },
  { path: 'ai', component: AiComponent },
  { path: 'angular', component: AngularComponent },
  {path:'checkout',component:CheckoutComponent},
  {path:'coursefile',component:CoursefileComponent,
  canActivate: [AuthGuard]},
  {
    path: 'enroll', component: EnrollComponent,
    canActivate: [AuthGuard]
  },
 

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SharedRoutingModule { }
