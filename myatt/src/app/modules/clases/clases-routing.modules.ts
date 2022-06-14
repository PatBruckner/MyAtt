
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClasesComponent } from './clases.component';
import { ClassesListComponent } from './pages/classes-list/classes-list.component';


const routes: Routes = [
  {path:'', component: ClasesComponent,
  children:[
    {path:'', redirectTo: 'list', pathMatch:'full'},
    {path:'list', component: ClassesListComponent}
    ]
},

];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClasesRoutingModule{}