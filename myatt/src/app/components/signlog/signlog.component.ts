import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { GoogleAuthProvider } from "firebase/auth";
import { Router } from '@angular/router';

@Component({
  selector: 'app-signlog',
  templateUrl: './signlog.component.html',
  styleUrls: ['./signlog.component.scss']
})
export class SignlogComponent implements OnInit {

  constructor(public fbAuth: AngularFireAuth, private router: Router) { }
  title = 'ang-route-block';
  signIn() {
    const googleAuthProvider = new GoogleAuthProvider();
    this.fbAuth.signInWithPopup(googleAuthProvider).then(res => this.router.navigate(['dashboard']));
  }


  ngOnInit(): void {
  }
}




