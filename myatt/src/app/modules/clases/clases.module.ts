import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClasesComponent } from './clases.component';
import { ClasesRoutingModule } from './clases-routing.modules';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ClasesComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ClasesRoutingModule
  ]
})
export class ClasesModule { }
