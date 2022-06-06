import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private router: Router, private fbAuth:AngularFireAuth) { }

  ngOnInit(): void {
  }

  toClassAdmin() {
    this.router.navigate(['classadmin']);
  }

  onSignOut(){
    this.fbAuth.signOut().then(res => this.router.navigate(['login']))
  }

}
