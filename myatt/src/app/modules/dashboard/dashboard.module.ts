import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { TimerComponent } from './pages/timer/timer.component';
import { RandomizerComponent } from './pages/randomizer/randomizer.component';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { HomeComponent } from './pages/home/home.component';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list'

@NgModule({
  declarations: [
    DashboardComponent,
    TimerComponent,
    RandomizerComponent,
    PerfilComponent,
    HomeComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MatButtonModule,
    MatListModule,
    MatGridListModule
  ]
})
export class DashboardModule { }
