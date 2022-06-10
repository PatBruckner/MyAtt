import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClasesComponent } from './clases.component';
import { ClasesRoutingModule } from './clases-routing.modules';



@NgModule({
  declarations: [
    ClasesComponent
  ],
  imports: [
    CommonModule,
    ClasesRoutingModule
  ]
})
export class ClasesModule { }
