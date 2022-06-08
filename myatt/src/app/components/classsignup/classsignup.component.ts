import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { DbhandlerService } from 'src/app/services/dbhandler/dbhandler.service';
import { arrayUnion } from 'firebase/firestore';

@Component({
  selector: 'app-classsignup',
  templateUrl: './classsignup.component.html',
  styleUrls: ['./classsignup.component.scss']
})
export class ClasssignupComponent implements OnInit {
  @Input() classCode!: string;
  @Output() classCodeChange = new EventEmitter<string>();
  uid!: string;

  constructor(private fbAuth: AngularFireAuth, private dbhandler: DbhandlerService) { }

  ngOnInit(): void {
    this.fbAuth.onAuthStateChanged((user: any) => {
      this.uid = user.uid;
    })
  }

  signUp() {
    console.log("Trying to signup")
    this.dbhandler.addStudent(this.classCode, {
      Students: arrayUnion(this.uid)
    }).then((res2: any) => {
      this.dbhandler.updateUser(this.uid,
        {
          ClassesAsStudent: arrayUnion(this.classCode)
        }).then((res2: any) => console.log("success"))
    })
  }

}




