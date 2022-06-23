import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { redirectLoggedInTo, canActivate, redirectUnauthorizedTo} from '@angular/fire/compat/auth-guard';


const redirectLoggedInToDashboard = () => redirectLoggedInTo(['dashboard']);
const redirectUnauthorizedToLogin= () => redirectUnauthorizedTo(['login']);



const routes: Routes = [
  {path:'', redirectTo: 'login', pathMatch:'full'},
  {path:'login', ...canActivate(redirectLoggedInToDashboard), loadChildren: () => import('./modules/login/login.module').then(m => m.LoginModule)},
  {path:'dashboard', ...canActivate(redirectUnauthorizedToLogin), loadChildren: () => import('./modules/dashboard/dashboard.module').then(m => m.DashboardModule)},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
