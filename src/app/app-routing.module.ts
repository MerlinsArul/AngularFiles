import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from './shared/shared.module';



const routes: Routes = [
 
  { path: '', redirectTo:'home',pathMatch:'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    SharedModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
