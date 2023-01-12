import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './home/homepage/homepage.component';
import { AuthguardGuard } from './shared/services/authguard.guard';
import { EnrollComponent } from './shared/enroll/enroll.component';



const routes: Routes = [
 {path:"home",loadChildren:()=>import('./home/home.module')
.then(mod=>mod.HomeModule)},
{path:'enroll',component:EnrollComponent,
canActivate:[AuthguardGuard]},
{path:"shared",loadChildren:()=>import('./shared/shared.module')
.then(mod=>mod.SharedModule)},
{path:"user",loadChildren:()=>import('./user/user.module')
.then(mod=>mod.UserModule)},
{path:"admin",loadChildren:()=>import('./admin/admin.module')
.then(mod=>mod.AdminModule)},
{path:'',component:HomepageComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
