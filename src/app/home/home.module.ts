import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AboutusComponent } from './aboutus/aboutus.component';






@NgModule({
  declarations: [
    HomepageComponent,
    LoginComponent,
    SignupComponent,
    AboutusComponent,
   
   
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ],

})
export class HomeModule { }
