
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClasesComponent } from './clases.component';
import { AttProffComponent } from './pages/att-proff/att-proff.component';
import { AttStudentComponent } from './pages/att-student/att-student.component';
import { ClassesListComponent } from './pages/classes-list/classes-list.component';
import { redirectLoggedInTo, canActivate, redirectUnauthorizedTo} from '@angular/fire/compat/auth-guard';


const redirectLoggedInToDashboard = () => redirectLoggedInTo(['dashboard']);
const redirectUnauthorizedToLogin= () => redirectUnauthorizedTo(['login']);

const routes: Routes = [
  {path:'', component: ClasesComponent,
  children:[
    {path:'', redirectTo: 'list', pathMatch:'full'},
    {path:'list', component: ClassesListComponent},
    {path:'prof/:classid', component: AttProffComponent},
    {path:'stu/:classid', component: AttStudentComponent}
    ]
},

];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClasesRoutingModule{}