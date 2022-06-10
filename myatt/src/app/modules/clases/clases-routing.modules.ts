
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClasesComponent } from './clases.component';


const routes: Routes = [
  {path:'', component: ClasesComponent}
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClasesRoutingModule{}