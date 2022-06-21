import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClasesComponent } from './clases.component';
import { ClasesRoutingModule } from './clases-routing.modules';
import { FormsModule } from '@angular/forms';
import { ClassesListComponent } from './pages/classes-list/classes-list.component';
import { MatDialogModule } from '@angular/material/dialog'
import { CreateClassPopUpComponent } from './pages/create-class-pop-up/create-class-pop-up.component';
import { SignUpClassPopUpComponent } from './pages/sign-up-class-pop-up/sign-up-class-pop-up.component';

import { AttProffComponent } from './pages/att-proff/att-proff.component';
import { AttStudentComponent } from './pages/att-student/att-student.component';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    ClasesComponent,
    ClassesListComponent,
    CreateClassPopUpComponent,
    SignUpClassPopUpComponent,
    AttProffComponent,
    AttStudentComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ClasesRoutingModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule
  ]
})
export class ClasesModule { }