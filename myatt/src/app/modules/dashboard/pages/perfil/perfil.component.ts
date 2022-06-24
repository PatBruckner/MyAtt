import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { DbhandlerService } from 'src/app/services/dbhandler/dbhandler.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent implements OnInit {

  constructor(private fbAuth: AngularFireAuth, private dbhandler: DbhandlerService) {
  }

  uid!:string
  email!:string
  lastname!:string
  name!:string

  ngOnInit(): void {
    this.fbAuth.onAuthStateChanged((user: any) => {
      this.uid=user.uid
      this.dbhandler.getAUser(this.uid).subscribe((res:any) =>{
        this.email = res.data().Email
        this.lastname = res.data().LastName
        this.name = res.data().Name
      })
    })
  }

}
