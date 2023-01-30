import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedRoutingModule } from './shared-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { CourseComponent } from './course/course.component';
import { HeaderComponent } from './header/header.component';
import { EnrollComponent } from './enroll/enroll.component';
import { FooterComponent } from './footer/footer.component';
import { StudyComponent } from './study/study.component';
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
import { ReactiveFormsModule } from '@angular/forms';
import { CoursefileComponent } from './enroll/coursefile/coursefile.component';
import { DatatableComponent} from './datatable/datatable.component';


@NgModule({
  declarations: [
    NavbarComponent,
    CourseComponent,
    HeaderComponent,
    EnrollComponent,
    FooterComponent,
    StudyComponent,
    BigdataComponent,
    DevopsComponent,
    CyberComponent,
    DigitalComponent,
    AiComponent,
    AngularComponent,
    CheckoutComponent,
    JavaComponent,
    ReactComponent,
    CloudComponent,
    CoursefileComponent,
    DatatableComponent
  
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    ReactiveFormsModule

  ],
  exports: [
    NavbarComponent,
    FooterComponent,
    DatatableComponent
  ],
  providers: [
    AuthGuard
  ]
})

export class SharedModule { }
