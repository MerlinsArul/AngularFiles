import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { CookieService } from 'ngx-cookie-service';
import { OverlayModule } from '@angular/cdk/overlay';
import { UserService } from './shared/services/user.service';
import { ToastrModule } from 'ngx-toastr';
import { AuthguardGuard } from './shared/services/authguard.guard';
import { SharedModule } from './shared/shared.module';
//import { MenuComponent } from '../shared/component/menu/menu.component';


@NgModule({
  declarations: [
    AppComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    OverlayModule,
    SharedModule,
    ToastrModule.forRoot()
  ],


  providers: [CookieService,
    UserService,
    AuthguardGuard],

  bootstrap: [AppComponent]
})
export class AppModule { }
