
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClasesComponent } from './clases.component';
import { AttProffComponent } from './pages/att-proff/att-proff.component';
import { AttStudentComponent } from './pages/att-student/att-student.component';
import { ClassesListComponent } from './pages/classes-list/classes-list.component';


const routes: Routes = [
  {path:'', component: ClasesComponent,
  children:[
    {path:'', redirectTo: 'list', pathMatch:'full'},
    {path:'list', component: ClassesListComponent},
    {path:'prof/:classid', component: AttProffComponent},
    {path:'stu', component: AttStudentComponent}
    ]
},

];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClasesRoutingModule{}