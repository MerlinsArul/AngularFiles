import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { CookieService } from 'ngx-cookie-service';
import { OverlayModule } from '@angular/cdk/overlay';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { MatDialogModule } from '@angular/material/dialog';
import { MatMenuModule } from '@angular/material/menu';
import { HighchartsChartModule } from 'highcharts-angular';
import { AuthService } from './shared/auth.service';
//import { MenuComponent } from '../shared/component/menu/menu.component';


@NgModule({
  declarations: [
    AppComponent,
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    OverlayModule,
    MatAutocompleteModule,
    MatDialogModule,
    MatMenuModule,
    HighchartsChartModule
  ],
  providers: [CookieService,
  AuthService],

  bootstrap: [AppComponent]
})
export class AppModule { }
