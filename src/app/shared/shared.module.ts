import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedRoutingModule } from './shared-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { CourseComponent } from './course/course.component';
import { HeaderComponent } from './header/header.component';
import { EnrollComponent } from './enroll/enroll.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from '../home/contact/contact.component';
import { StudyComponent } from './study/study.component';
import { BigdataComponent } from './study/bigdata/bigdata.component';
import { DevopsComponent } from './study/devops/devops.component';
import { CyberComponent } from './study/cyber/cyber.component';
import { DigitalComponent } from './study/digital/digital.component';
import { AiComponent } from './study/ai/ai.component';
import { AngularComponent } from './study/angular/angular.component';
//import{NgToastModel} from 'ng-angular-popup'


@NgModule({
  declarations: [
   NavbarComponent,
   CourseComponent,
   HeaderComponent,
   EnrollComponent,
   FooterComponent,
   ContactComponent,
   StudyComponent,
   BigdataComponent,
   DevopsComponent,
   CyberComponent,
   DigitalComponent,
   AiComponent,
   AngularComponent],
  imports: [
    CommonModule,
    SharedRoutingModule,
    //NgToastModule
  ],
 exports:[
  NavbarComponent,
  FooterComponent
]
})
export class SharedModule { }
