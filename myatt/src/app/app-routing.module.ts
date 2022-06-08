import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SignlogComponent } from './components/signlog/signlog.component';
import { ClassadminComponent } from './components/classadmin/classadmin.component';
import { ClasssignupComponent } from './components/classsignup/classsignup.component';
import { AttProffComponent } from './components/att-proff/att-proff.component';
import { AttStudentComponent } from './components/att-student/att-student.component';

const routes: Routes = [
  {path:'', redirectTo: '/login', pathMatch:'full'},
  {path:'login', component: SignlogComponent},// ...canActivate(redirectLoggedInToDashboard)},
  {path:'dashboard', component: DashboardComponent },//...canActivate(redirectUnauthorizedToLogin)},
  {path:'classadmin', component: ClassadminComponent },
  {path:'classsignup', component: ClasssignupComponent },
  {path:'attp', component: AttProffComponent},
  {path:'atts', component: AttStudentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
