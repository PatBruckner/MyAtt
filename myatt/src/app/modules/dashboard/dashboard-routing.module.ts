
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { ClasesModule } from '../clases/clases.module';
import { RandomizerComponent } from './pages/randomizer/randomizer.component';
import { TimerComponent } from './pages/timer/timer.component';
import { PerfilComponent } from './pages/perfil/perfil.component';


const routes: Routes = [
  {path:'', component: DashboardComponent,
children:[
    {path:'randomizer', component: RandomizerComponent},
    {path:'timer', component: TimerComponent},
    {path:'perfil', component: PerfilComponent},
    {path:'clases', loadChildren: () => import('../clases/clases.module').then(m => m.ClasesModule)},
    ]
},
  
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule{}