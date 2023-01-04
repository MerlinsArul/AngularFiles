import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonalComponent } from './personal/personal.component';

const routes: Routes = [
  {path:'personal',component:PersonalComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
