import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { SharedModule } from '../shared/shared.module';
//import { NavbarComponent } from '../shared/navbar/navbar.component';



@NgModule({
  declarations: [
    HomepageComponent,
    LoginComponent,
    SignupComponent,
    //NavbarComponent
   
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ]
})
export class HomeModule { }
