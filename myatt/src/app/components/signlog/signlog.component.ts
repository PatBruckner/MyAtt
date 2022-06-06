import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { GoogleAuthProvider } from "firebase/auth";
import { Router } from '@angular/router';
import { DbhandlerService } from 'src/app/services/dbhandler/dbhandler.service';

@Component({
  selector: 'app-signlog',
  templateUrl: './signlog.component.html',
  styleUrls: ['./signlog.component.scss']
})
export class SignlogComponent implements OnInit {

  constructor(public fbAuth: AngularFireAuth, private router: Router, private dbhandler:DbhandlerService) { }
  title = 'ang-route-block';
  signIn() {
    const googleAuthProvider = new GoogleAuthProvider();
    this.fbAuth.signInWithPopup(googleAuthProvider).then(res => {
      console.log(res)
      if(res.additionalUserInfo?.isNewUser){
        // this.router.navigate(['dashboard'])
        console.log("OIE VOS ERES NUEVO")
        this.dbhandler.createUser(res.user!.uid)
      }else{
        this.router.navigate(['dashboard'])
      } 
    });
  }


  ngOnInit(): void {
  }
}




