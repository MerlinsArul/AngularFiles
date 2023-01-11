import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminpageComponent } from './adminpage/adminpage.component';
import { UserinfoComponent } from './userinfo/userinfo.component';
import { CourseinfoComponent } from './courseinfo/courseinfo.component';
import { ReactiveFormsModule } from '@angular/forms';
import {MatDividerModule} from '@angular/material/divider';
import {MatIconModule} from '@angular/material/icon';
import { SharedModule } from '../shared/shared.module';
import {MatListModule} from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatMenuModule } from '@angular/material/menu';
import { OverlayModule } from '@angular/cdk/overlay';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { HighchartsChartModule } from 'highcharts-angular';
import { SidenavComponent } from './sidenav/sidenav.component';




@NgModule({
  declarations: [
    AdminpageComponent,
   UserinfoComponent,
    CourseinfoComponent,
    SidenavComponent,

  
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    MatDividerModule,
    SharedModule,
    MatIconModule,
    MatListModule,
    MatToolbarModule,
    MatSidenavModule,
    MatMenuModule,
    OverlayModule, 
    MatAutocompleteModule,
    HighchartsChartModule,

  ],

})
export class AdminModule { }
