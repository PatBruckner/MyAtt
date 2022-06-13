import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-clases',
  templateUrl: './clases.component.html',
  styleUrls: ['./clases.component.scss']
})
export class ClasesComponent implements OnInit {

  constructor(private router: Router, private fbAuth:AngularFireAuth) { }

  ngOnInit(): void {
  }

  toClassAdmin() {
    this.router.navigate(['classadmin']);
  }

  //onSignOut(){
    //this.fbAuth.signOut().then(res => this.router.navigate(['login']))
 // }
  toSelectedClass(){
    
  }
}
