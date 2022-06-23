import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClasesComponent } from './clases.component';
import { ClasesRoutingModule } from './clases-routing.modules';
import { FormsModule } from '@angular/forms';
import { ClassesListComponent } from './pages/classes-list/classes-list.component';
import { MatDialogModule } from '@angular/material/dialog'
import { CreateClassPopUpComponent } from './pages/create-class-pop-up/create-class-pop-up.component';
import { SignUpClassPopUpComponent } from './pages/sign-up-class-pop-up/sign-up-class-pop-up.component';

@NgModule({
  declarations: [
    ClasesComponent,
    ClassesListComponent,
    CreateClassPopUpComponent,
    SignUpClassPopUpComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ClasesRoutingModule,
    MatDialogModule,
 
  ]
})
export class ClasesModule { }
