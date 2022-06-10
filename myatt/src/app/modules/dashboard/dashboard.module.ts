import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { TimerComponent } from './pages/timer/timer.component';
import { RandomizerComponent } from './pages/randomizer/randomizer.component';
import { PerfilComponent } from './pages/perfil/perfil.component';

@NgModule({
  declarations: [
    DashboardComponent,
    TimerComponent,
    RandomizerComponent,
    PerfilComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
