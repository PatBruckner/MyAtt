import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { arrayUnion } from 'firebase/firestore';
import { DbhandlerService } from 'src/app/services/dbhandler/dbhandler.service';
import { CreateClassPopUpComponent } from '../create-class-pop-up/create-class-pop-up.component';

@Component({
  selector: 'app-sign-up-class-pop-up',
  templateUrl: './sign-up-class-pop-up.component.html',
  styleUrls: ['./sign-up-class-pop-up.component.scss']
})
export class SignUpClassPopUpComponent implements OnInit {
  uid!: string;
  asProffList!: any[];
  asStudentList!: any[];
  name!: string;

  @Input() classCode!: string;
  @Output() classCodeChange = new EventEmitter<string>();

  @Input() className!: string;
  @Output() classNameChange = new EventEmitter<string>();

  constructor(private fbAuth: AngularFireAuth, private dbhandler: DbhandlerService, private router: Router, private dialogRef: MatDialog) {
  }

  ngOnInit(): void {
    this.fbAuth.onAuthStateChanged((user: any) => {
      this.uid = user.uid;
      this.name = user.displayName;
    })
  }

  openDialogSignUpClass() {
    this.dialogRef.open(SignUpClassPopUpComponent);
  }

  fetchClasses() {
    this.dbhandler.getClasses(this.uid).subscribe((res: any) => {
      console.log(res.data().ClassesAsProff)
      this.asProffList = res.data().ClassesAsProff
      this.asStudentList = res.data().ClassesAsStudent
    })
  }

  signUp() {
    if (this.checkEmptyCode()) {
      this.classCode = this.classCode.trim()
      console.log("Trying to signup")
      console.log(this.classCode)
      console.log(this.uid)
      this.dbhandler.addStudent(this.classCode, { [`Students.${this.uid}`]: this.name, }).then(() => {

        this.dbhandler.getAClass(this.classCode).subscribe((res: any) => {
          console.log(res)
          if (res.exists) {
            console.log("valide")
            console.log(res.data().ClassName)
            this.dbhandler.updateUser(this.uid, {
              ClassesAsStudent: arrayUnion({ ClassId: this.classCode, ClassName: res.data().ClassName })
            }).then((res2: any) => console.log("success"))
          } else {
            throw new Error("dne")
          }
        })
      }).catch( error => alert("Class does not exist"))
    } else {
      alert("The code is empty")
    }

  }

  checkEmptyCode(): boolean {
    return this.classCode != undefined
  }

  // markAttendance(classId:string){
  //   this.dbhandler.infoHolder = []
  //   this.dbhandler.infoHolder.push(classId)
  //   this.router.navigate(['atts'])
  // }

}