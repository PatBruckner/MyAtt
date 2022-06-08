import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { AngularFireModule } from '@angular/fire/compat';

import { environment } from 'src/environments/environment';

import {AngularFireAuthModule} from '@angular/fire/compat/auth';
import { SignlogComponent } from './components/signlog/signlog.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ClassadminComponent } from './components/classadmin/classadmin.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ClasssignupComponent } from './components/classsignup/classsignup.component';





@NgModule({
  declarations: [
    AppComponent,
    SignlogComponent,
    DashboardComponent,
    ClassadminComponent,
    ClasssignupComponent
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
