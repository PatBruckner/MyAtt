import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { DbhandlerService } from 'src/app/services/dbhandler/dbhandler.service';
import {arrayUnion} from 'firebase/firestore';


@Component({
  selector: 'app-classadmin',
  templateUrl: './classadmin.component.html',
  styleUrls: ['./classadmin.component.scss']
})
export class ClassadminComponent implements OnInit {

  uid!: string;
  @Input() className!: string;
  @Output() classNameChange = new EventEmitter<string>();

  constructor(private fbAuth: AngularFireAuth, private dbhandler: DbhandlerService) {
   }

  ngOnInit(): void {
    this.fbAuth.onAuthStateChanged((user:any) =>{
      this.uid = user.uid;
    })
  }

  createClass(start:any, end:any){
    console.log("hola")
    console.log(start)
    console.log(end)

    this.dbhandler.createClass({
      ClassName: this.className,
      IdProff: this.uid,
      StartDate: start,
      EndDate: end
    }).then((res: any) =>{
      console.log(res.id)
      console.log("Class creation was successful")
      this.dbhandler.addClassProff(this.uid, 
        {
          ClassesAsProff: arrayUnion(res.id)
      }).then( (res2:any) => console.log("success"))
    })
  }

  

}
