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

  async signUp() {
    console.log("Trying to signup")
    await this.dbhandler.addStudent(this.classCode, {Students: arrayUnion(this.uid)})
    this.dbhandler.getAClass(this.classCode).subscribe( (res:any) => {
      console.log(res.data().ClassName)
      this.dbhandler.updateUser(this.uid, {
        ClassesAsStudent: arrayUnion({ClassId:this.classCode,ClassName:res.data().ClassName})
      }).then((res2: any) => console.log("success"))
    })
  }

}




